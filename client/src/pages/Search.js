import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import ResultCard from "../components/ResultCard";
import "./styleSearch.css";

class Search extends Component {
    state = {
        bookData: [],
        searchedBook: ""
    }

    handleInputChange = event => {
        // this.setState({ bookData: event.target.value });
        // const value = event.target.value;
        // const name = event.target.name;
        // this.setState({
        //     [name]: value
        // });
        this.setState({ searchedBook: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.searchedBook)
            .then(res => {
                if (res.data) {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "https://static1.squarespace.com/static/5989afe4db29d6b9e128065d/t/59944c3015d5db0803cd0527/1502891078798/NO+IMAGE+AVAILABLE+200x200.jpg",
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ bookData: results });
                    this.setState({ searchedBook: "" });
                }
            })
            .catch(err => console.log(err));
    }

    handleSaveButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.bookData);
        let savedBooks = this.state.bookData.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        console.log(savedBooks);
        API.saveBook(savedBooks)
            .then(alert("Your book is saved!"))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Form onChange={this.handleInputChange} value={this.state.searchedBook} onClick={this.handleFormSubmit} />
                <div id="card-container">
                    <h4>Results</h4>
                    <ResultCard bookData={this.state.bookData} onClick={this.handleSaveButton} />
                </div>
            </>
        );

    }
}


export default Search;
