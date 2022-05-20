import React from "react";
import "../App.css";
function TweetCompnent({name,message,likes}){

    return(
        //props
        // <div className="tweet">
        //     <h3>{props.name}</h3>
        //     <p>{props.message}</p>
        //     <h3>Number of likes</h3>
        // </div>

        //ES 6 
        <div className="tweet">
        <h3>{name}</h3>
        <p>{message}</p>
        <h3>Number of likes :{likes}</h3>
    </div>
    )
}

export default TweetCompnent;