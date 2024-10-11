import {createContext} from 'react'
import run from '../config/API-key';

export const Context = createContext();

const ContextProvider = (props) => {
    const onSent = async(prompt) => {
        await run(prompt);
    }
    
    onSent("who is Thenaish");

    const contextValue = {
    }

    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
