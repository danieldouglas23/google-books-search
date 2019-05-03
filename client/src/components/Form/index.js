import React from "react";
import "./style.css";

const Form = () => {
    return (
        <div className="form-group" id="book-form">
            <h4>Book Search</h4>
            <br />
            <h6>Book:</h6>
            <input className="form-control" id="input-form" placeholder="Book Name"/>
            <button className="btn btn-success" id="submit-button">
                Submit
            </button>
        </div>
    );
}

export default Form;

