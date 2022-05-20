import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Hello from './components/hello';
import TweetCompnent from './components/tweet';
import Increment from './components/incerment';
import ColorComponent from './components/color';

function App() {
  const [users, setUsers] = useState([
    { name: "kiruba", message: "he is not so good" ,likes:100},
    { name: "itachi", message: "he is the best",likes:1000 },
    { name: "sasuke", message: "he can use amertarasu",likes:500  }
  ]);

  return (
    <div className="app">
      {/* <h1>Hello world</h1>
      <h2>this is the app compnent</h2> */}
      {users.map(
        user=>(
      <TweetCompnent name={user.name} message={user.message} likes={user.likes} />
        ))}

      {/* <ColorComponent /> */}
      {/* <Increment/>
     <Hello/>  */}
      {/* <TweetCompnent name="kiruba" message="hey" likes="400"/>
     <TweetCompnent name="dante" message="how are you" likes="450" />
     <TweetCompnent name="yoru" message="drift walker" likes="564"/>
     <TweetCompnent name="reyna" message="they will cower" likes="520"/>
     <TweetCompnent name="neon" message="salamah thanks!" likes="560"/> */}
     


    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
