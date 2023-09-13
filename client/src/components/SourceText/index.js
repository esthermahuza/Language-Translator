import "./index.css";
import { useContext } from "react";
// import { TranslationContext } from ".././context/TranslationContext";
import { TranslationContext } from "../../context/TranslationContext";
// function SelectLanguage() {
//   const { state, dispatch } = useContext(TranslationContext);

//   const handleSourceLanguageChange = (event) => {
//     dispatch({ type: "SET_SOURCE_LANGUAGE", payload: event.target.value });
//   };

//   const handleTargetLanguageChange = (event) => {
//     dispatch({ type: "SET_TARGET_LANGUAGE", payload: event.target.value });
//   };

function SourceText() {
  const { state, dispatch } = useContext(TranslationContext);

  const handleTextChange = (event) => {
    dispatch({ type: "SET_SOURCE_TEXT", payload: event.target.value });
  };

  return (
    <div className="source-text-container">
      <label htmlFor="source-text">Enter text to translate:</label>
      <textarea
        value={state.text}
        onChange={handleTextChange}
        id="source-text"
        rows="5"
        placeholder="Type or paste text here..."
      ></textarea>
    </div>
  );
}

export default SourceText;
