const router = require("express").Router();
const db = require("../../server/models");
require("dotenv").config();
const axios = require("axios");
const KEY = process.env.BOOK_APIKEY;

const getSearched = async (search) => {
  console.log(`in getSearched: ${search}`);
  //   console.log(KEY);
//   console.log(
//     `https://www.googleapis.com/books/v1/volumes?q="${search}"&key=${KEY}`
//   );

  return await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q="${search}"&key=${KEY}`
  );
};

// /api/books
router.get("/api/books", (req, res) => {
  console.log(`GETTING ALL`);

  db.Book.find({})
    .sort({ _id: -1 })
    .then((dbBooks) => {
      res.json(dbBooks);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/books", ({ body }, res) => {
  console.log(`POSTING: `, body);

  db.Book.create(body)
    .then((dbBook) => {
      console.log("Success: " + dbBook);
      res.json(dbBook).end();
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete("/api/books/:id", (req, res) => {
  console.log(`DELETING: ${req.params.id}`);

  db.Book.findByIdAndDelete(req.params.id)
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// /api/books/search/:search
router.get("/api/books/search/:search", async (req, res) => {
  try {
    console.log(
      `IN: /api/books/search/:search\n searched: ${req.params.search}`
    );

    // let bookResults = await getSearched(req.params.search);
    let bookResults = await getSearched(req.params.search);
    console.log(bookResults.data);
    res.json(bookResults.data).end();
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// /api/books/:id

module.exports = router;
