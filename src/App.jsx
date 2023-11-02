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
      <div className="main-container__title">MeMeBoX</div>
      {/* <div className="main-container__description">
        "MemeMe: Click for instant, random laughs from a diverse collection of
        memes – no login required!"
      </div> */}
      <img src={`${selectedMeme.url}`} alt="" className="main-form__image" />
      <form
        onSubmit={(event) => {
          handlePushButton(event);
        }}
        className="main-form"
      >
        <button className="main-form__button">CLICK ME</button>
      </form>
    </div>
  );
}

export default App;
