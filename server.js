// DECLARE CONSTANTS
// =============================================================================
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
// const routes = require("./server/routes");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
const PROD_ENV = process.env.NODE_ENV === "production" ? true : false;


// Connect to the Mongo DB
// =============================================================================
mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then((conn) => {
  if (conn)
    console.log(`Connected to ${conn.connections[0].db.databaseName}`);
})
.catch(console.error);

// NPM package that automatically handles our user sessions in our Mongo database
// =============================================================================
const Store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "user-sessions",
});
Store.on("error", (error) => console.log(error));


// Start Express App
// =============================================================================
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Allows cross-origin requests from our React dev server
app.use(cors({ credentials: true, origin: `http://localhost:3000` }))
// Session middleware
app.use(
  session({
    secret: process.env.SESS_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
    store: Store,
    cookie: {
      maxAge: 60000 * 60 * 24,
      sameSite: true,
      httpOnly: true,
      secure: false,
    },
  })
)

// Serve up static assets (usually on heroku)
// if (PROD_ENV) app.use(express.static(path.join(__dirname, "client/build")));
if (PROD_ENV) app.use(express.static("client/build"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
// app.use(routes);
app.use(require("./server/routes/books-routes"));


// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
if (PROD_ENV)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });


app.listen(PORT, function() {
  console.log(`😀  ==> API server now on port ${PORT}!`);
});
