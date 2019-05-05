import React, { Component } from "react";
import API from "../utils/API";
import "./styleSearch.css";
import SavedCard from "../components/SavedCard";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
    // handleSaveButton = event => {
    //     // console.log(event)
    //     event.preventDefault();
    //     console.log(this.state.books)
    //     let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    //     savedBooks = savedBooks[0];
    //     API.saveBook(savedBooks)
    //         .then(this.setState({ message: alert("Your book is saved") }))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <>
                <div id="card-container">
                    <h4>Saved</h4>
                    <SavedCard savedBooks={this.state.savedBooks} onClick={this.handleDeleteButton} />
                </div>
            </>
        );

    }
}

export default Saved;