import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyB8Tm8-dXKAx9IEqf3Ds59O4L8rzx5ueN4";

export default {
  searchBooks: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};