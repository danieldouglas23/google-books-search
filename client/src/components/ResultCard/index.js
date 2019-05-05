import React from "react";
import "./style.css";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";

const ResultCard = (props) => {
    return (
        <>
            {props.bookData.map(bookData => {
                return (
                    <li id="card-list">
                        <div className="card">
                            <div className="card-header">

                                <div className="row">
                                    <div className="column" id="left-column">
                                        <h4 id="card-h4"> {bookData.title}</h4> <br />
                                        {/* <h5>By: {bookData.author}</h5> */}
                                        <h5>By: {((bookData.author) && (bookData.author.length > 1))
                                            ? (bookData.author.reduce((prev, curr) =>
                                                [prev, ", ", curr])) : bookData.author ? bookData.author[0] : null}</h5>
                                    </div>
                                    <div className="column" id="right-column">

                                        <SaveBtn onClick={props.onClick} />
                                        <a href={bookData.link} target="_blank">
                                            <ViewBtn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card-body">
                            <div className="row">
                                <div className="column" id="left-body-column" >
                                    {/* <img src={bookData.image} alt={bookData.title} /> */}
                                    {bookData.image ? <img src={bookData.image} alt={bookData.title} /> :
                                        <img src="https://static1.squarespace.com/static/5989afe4db29d6b9e128065d/t/59944c3015d5db0803cd0527/1502891078798/NO+IMAGE+AVAILABLE+200x200.jpg" alt="blank image" />}
                                </div>
                                <div className="column" id="right-body-column" >
                                    <p>{bookData.description}</p>
                                </div>
                            </div>
                        </div>

                    </li>
                );
            })}






        </>
    )
}

export default ResultCard;