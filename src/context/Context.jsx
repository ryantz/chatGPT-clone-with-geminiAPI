import { createContext, useState } from "react";
import run from "../config/API-key";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [clickedPrompt, setClickedPrompt] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const onSent = async () => {
    const out = await run(input);
    setAiOutput(out);
  };

  const contextValue = {
    onSent,
    input,
    setInput,
    clickedPrompt,
    setClickedPrompt,
    setSubmitted,
    showButtons,
    setShowButtons,
    confirmed,
    setConfirmed,
    aiOutput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  );
};

export default ContextProvider;
