import { createContext, useState } from "react";
import run from "../config/API-key";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");

  const onSent = async () => {
    await run(input);
  };

  const contextValue = {
    onSent,
    input,
    setInput
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  );
};

export default ContextProvider;
