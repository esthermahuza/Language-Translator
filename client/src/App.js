import React, { useReducer } from "react";
import "./App.css";
import SelectLanguage from "./components/SelectLanguage";
import SourceText from "./components/SourceText";
import TranslateButton from "./components/TranslateButton";
import TranslatedText from "./components/TranslatedText";
import { TranslationContext } from "./context/TranslationContext";
import { reducer, initialState } from "./reducers/TranslationReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TranslationContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>GPT-Translator</h1>
        <SourceText />
        <SelectLanguage />
        <TranslateButton />
        <TranslatedText />
      </div>
    </TranslationContext.Provider>
  );
}

export default App;
