import React from "react";
import "./style.css";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";

const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="left-column">
                    title
                    author
                </div>
                <div className="right-column">
                    <ViewBtn />
                    <SaveBtn />
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    image | description
                </div>
            </div>
        </div>
    )
}

export default Card;