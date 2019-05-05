import React from "react";
import "./style.css";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";

const SavedCard = (props) => {
    return (
        <>
            <li id="card-list">
                <div className="card">
                    <div className="card-header">

                        <div className="row">
                            <div className="column" id="left-column">
                                <h4 id="card-h4"> </h4> <br />
                                
                                <h5>By: </h5>
                            </div>
                            <div className="column" id="right-column">

                                <DeleteBtn onClick={props.onClick} />
                                {/* <a href= target="_blank"> */}
                                    <ViewBtn />
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card-body">
                    <div className="row">
                        <div className="column" id="left-body-column" >
                           
                        </div>
                        <div className="column" id="right-body-column" >
                            
                        </div>
                    </div>
                </div>

            </li>




        </>
    )

}

export default SavedCard;