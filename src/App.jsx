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
  }

  async function handleUpload(event) {
    event.preventDefault();
    let url = event.target.url.value;
    const uploadMeme = await axios.post(`http://localhost:5050/upload`, {
      url,
    });
  }

  return (
    <>
      <div className="main-container">
        <div className="main-container__title">MeMeBoX</div>
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
      <div className="spaceholder"></div>
      <div className="uploadsec">
        <form onSubmit={handleUpload} className="uploadsec__form">
          <input
            className="uploadsec__input"
            name="url"
            placeholder="Add a meme URL"
          ></input>
          <button className="uploadsec__button">UPLOAD URL</button>
        </form>
        {/* <img
          src={`${selectedMeme.url}`}
          alt=""
          className="uploadsec__img"
        ></img> */}
      </div>
    </>
  );
}

export default App;
