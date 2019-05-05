import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyB8Tm8-dXKAx9IEqf3Ds59O4L8rzx5ueN4";

export default {
  searchBooks: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
   // Gets all books
   getBooks: function () {
    return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function (savedBooks) {
    return axios.post("/api/books", savedBooks);
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};