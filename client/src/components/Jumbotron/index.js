import React from "react";
import "./style.css";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container" id="jumbo-container">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search and Save Books of Interest</p>
            </div>
        </div>
    );
}

export default Jumbotron;

