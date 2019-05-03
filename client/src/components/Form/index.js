import React from "react";
import "./style.css";

const Form = (props) => {
    return (
        <form className="form-group" id="book-form">
            <h4>Book Search</h4>
            <br />
            <h6>Book:</h6>
            <input className="form-control" id="input-form" placeholder="Book Name" onChange={props.onChange}/>
            <button className="btn btn-success" type="submit" id="submit-button" value="Submit" onClick={props.onClick}>
                Submit
            </button>
        </form>
    );
}

export default Form;

