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

    handleDeleteButton = (event) => {
        API.deleteBook(event.target.id)
            .then(res => this.componentDidMount(res))
            .catch(err => console.log(err))
    }

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