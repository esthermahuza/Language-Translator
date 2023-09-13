export const initialState = {
  sourceText: "",
  sourceLanguage: "English",
  targetLanguage: "French",
  translatedText: "",
  error: null,
};

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_SOURCE_TEXT":
      return { ...state, sourceText: action.payload };
    case "SET_SOURCE_LANGUAGE":
      return { ...state, sourceLanguage: action.payload };
    case "SET_TARGET_LANGUAGE":
      return { ...state, targetLanguage: action.payload };
    case "SET_TRANSLATED_TEXT":
      return { ...state, translatedText: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
