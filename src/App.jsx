import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const StylishButton = () => {
  //   return <button className="main-form__button">Click Me</button>;
  // };
  // StylishButton();

  function handlePushButton(event) {
    event.preventDefault();
    // need to adjust this link to source files
    // const response = axios.get(`${process.env.REACT_APP_API_URL}/public`);
    alert("video test");
  }

  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState({});

  useEffect(() => {
    // const response = axios.get`${process.env.REACT_APP_API_URL}/data/memes.json`;
    const response = axios.get(`http://localhost:5050`);
    // console.log(response);
    setMemes(response.data);
  }, []);

  return (
    <div className="main-container">
      <h1>MeMeBoX</h1>
      <form
        onSubmit={(event) => {
          handlePushButton(event);
        }}
        className="main-form"
      >
        {/* {memes
          .filter((meme) => meme.id !== selectedMeme.id)
          .map((meme) => {
            return (
              <img
                src={`${process.env.REACT_APP_API_URL}/data/${meme.url}`}
                alt=""
                className="main-form__image"
              />
            );
          })} */}

        <button className="main-form__button"></button>
      </form>
    </div>
  );
}

export default App;
