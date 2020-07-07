const router = require("express").Router();
const db = require("../../server/models");
const { route } = require("./api");
require("dotenv").config();
const axios = require("axios");
const KEY = process.env.BOOK_APIKEY;

const getSearched = async (search) => {
  console.log(`in getSearched: ${search}`);
//   console.log(KEY);
//   console.log(`https://www.googleapis.com/books/v1/volumes?q="${search}"&key=${KEY}`);

  return await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q="${search}"&key=${KEY}`
  );
};

// /api/books

// /api/books/search/:search
router.get("/api/books/search/:search", async (req, res) => {
  try {
    console.log(
      `IN: /api/books/search/:search\n searched: ${req.params.search}`
    );

    // let bookResults = await getSearched(req.params.search);
    let bookResults = await getSearched(req.params.search);
    console.log(bookResults.data);
    res.json(bookResults.data);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});

// /api/books/:id

module.exports = router;
