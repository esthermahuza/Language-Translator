import React from "react";
import { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";
import "./index.css";

function TranslatedText() {
  const { state } = useContext(TranslationContext);

  return (
    <div className="translated-section">
      <label className="translated-label" htmlFor="translated-text-area">
        Translated Text:
      </label>
      <textarea
        value={state.translatedText}
        rows="5"
        cols="50"
        id="translated-text-area"
        className="translated-text"
        readOnly
      ></textarea>
    </div>
  );
}

export default TranslatedText;
