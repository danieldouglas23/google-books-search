import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import Card from "../components/Card";
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
        this.setState({ searchedBook: event.target.value});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.searchedBook)
            .then(res => {
                // this.setState({ bookData: res.data })
                // this.setState({ searchedBook: "" })
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <Form onChange={this.handleInputChange} value={this.state.searchedBook} onClick={this.handleFormSubmit} />
                <div id="card-container">
                    <h4>Results</h4>
                    <Card bookData={this.state.bookData} />
                </div>
            </>
        );

    }
}


export default Search;
