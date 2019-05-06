import React from "react";
import "./style.css";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";

const SavedCard = (props) => {
    console.log(props)
    return (
        <>
            {props.savedBooks.map(savedBooks => {
                return (
                    <li id="card-list" key={savedBooks._id}>
                        <div className="card">
                            <div className="card-header">

                                <div className="row">
                                    <div className="column" id="left-column">
                                        <h4 id="card-h4"> {savedBooks.title}</h4> <br />

                                        <h5>By: {savedBooks.author}</h5>
                                    </div>
                                    <div className="column" id="right-column">

                                        <DeleteBtn onClick={props.onClick} id={savedBooks._id} />
                                        <a href={savedBooks.link} target="_blank">
                                            <ViewBtn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card-body">
                            <div className="row">
                                <div className="column" id="left-body-column" >
                                    {savedBooks.image ? <img src={savedBooks.image} alt={savedBooks.title} /> :
                                        <img src="https://static1.squarespace.com/static/5989afe4db29d6b9e128065d/t/59944c3015d5db0803cd0527/1502891078798/NO+IMAGE+AVAILABLE+200x200.jpg" alt="blank image" />}
                                </div>
                                <div className="column" id="right-body-column" >
                                    <p>{savedBooks.description}</p>
                                </div>
                            </div>
                        </div>

                    </li>


                );
            })}

        </>
    )

}

export default SavedCard;