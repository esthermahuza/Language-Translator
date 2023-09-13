import "./index.css";
import React from "react";
import { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

function SelectLanguage() {
  const { state, dispatch } = useContext(TranslationContext);

  const handleSourceLanguageChange = (event) => {
    dispatch({ type: "SET_SOURCE_LANGUAGE", payload: event.target.value });
  };

  const handleTargetLanguageChange = (event) => {
    dispatch({ type: "SET_TARGET_LANGUAGE", payload: event.target.value });
  };

  const handleSwapLanguages = () => {
    const currentSource = state.sourceLanguage;
    const currentTarget = state.targetLanguage;

    dispatch({ type: "SET_SOURCE_LANGUAGE", payload: currentTarget });
    dispatch({ type: "SET_TARGET_LANGUAGE", payload: currentSource });
  };

  return (
    <div className="language-selector">
      <div className="language-dropdown">
        <label>Choose source language:</label>
        <select
          value={state.sourceLanguage}
          onChange={handleSourceLanguageChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>

      <button onClick={handleSwapLanguages} className="swap-button">
        &#8644;
      </button>
      <div className="language-dropdown">
        <label>Choose destination language:</label>
        <select
          value={state.targetLanguage}
          onChange={handleTargetLanguageChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>
    </div>
  );
}

export default SelectLanguage;
