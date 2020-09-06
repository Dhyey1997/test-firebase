import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { messaging } from "./init-fcm";

function App() {

  useEffect(() => {
    messaging.requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
        console.log("This is token: " + token)
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", (message) => console.log("Msg - ",message));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
