import React from "react";
import "./style.css";

const SaveBtn = (props) => {
    return (
        <button id="save-button" onClick={props.onClick}>Save</button>
    );
}

export default SaveBtn;