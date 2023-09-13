import React from "react";
import "./index.css";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

function TranslateButton() {
  const { state, dispatch } = useContext(TranslationContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTranslate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { sourceText, sourceLanguage, targetLanguage } = state;
      const response = await axios.post("http://localhost:8080/translate", {
        text: sourceText,
        sourceLanguage,
        targetLanguage,
      });

      const translatedText = response.data.translatedText;

      dispatch({ type: "SET_TRANSLATED_TEXT", payload: translatedText });
    } catch (err) {
      setError("Failed to translate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleTranslate}
        disabled={isLoading}
        className="translate-btn"
      >
        {isLoading ? "Translating..." : "Translate"}
      </button>
      {error && <p>{error}</p>};
    </div>
  );
}

export default TranslateButton;
