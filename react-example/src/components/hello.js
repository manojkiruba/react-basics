import React from "react";


function Hello() {
const hello = () =>{
//   alert('hey everyone');
  console.log('hello');
};

    return (
    <div>
        <h3>this is the hello component</h3>
    <button onClick={hello}>hello</button>
    </div>
);
}

export default Hello;