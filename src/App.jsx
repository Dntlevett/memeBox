import "./App.scss";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  // const StylishButton = () => {
  //   return <button className="main-form__button">Click Me</button>;
  // };
  // StylishButton();

  const [selectedMeme, setSelectedMeme] = useState([]);

  useEffect(() => {
    async function defaultMeme() {
      const response = await axios.get`http://localhost:5050/memes`;
      setSelectedMeme(response.data);
    }
    defaultMeme();
  }, []);

  function handlePushButton(event) {
    event.preventDefault();
    const getMemes = async () => {
      const response = await axios.get`http://localhost:5050/memes`;
      setSelectedMeme(response.data);
      console.log(response.data.url);
    };
    getMemes();

    // alert("video test");
  }

  return (
    <div className="main-container">
      <h1>MeMeBoX</h1>
      <img src={`${selectedMeme.url}`} alt="" className="main-form__image" />
      <form
        onSubmit={(event) => {
          handlePushButton(event);
        }}
        className="main-form"
      >
        <button className="main-form__button"></button>
      </form>
    </div>
  );
}

export default App;
