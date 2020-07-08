import axios from "axios";

export default {
  getSearch: (search) => {
    return axios.get("/api/books/search/" + search);
  },

  saveBook: (bookData) => {
    return axios.post("/api/books/", bookData);
  },

  getBooks: () => {
    return axios.get("/api/books/");
  },

  deleteBook: (id) => {
      return axios.delete("/api/books/" + id);
  }
};
