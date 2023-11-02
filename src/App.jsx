import logo from "./logo.svg";
import "./App.scss";
import React from "react";

function App() {
  const StylishButton = () => {
    return <button className="main-form__button">Click Me</button>;
  };
  StylishButton();
  return (
    <div className="main-container">
      <h1>MeMeBoX</h1>
      <form action="" className="main-form">
        <img src="" alt="" className="main-form__image" />
        <button className="main-form__button"></button>
      </form>
    </div>
  );
}

export default App;
