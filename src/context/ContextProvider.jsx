import main from "../config/gemini.js";
import Context from "./Context.jsx";
import {useState} from "react";

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const typingEffect = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75*index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        setInput("")
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined) {
            response = await main(prompt);
            setResultData(prompt);

        }
        else{
            setPrevPrompts(prev=>[...prev, input])
            setRecentPrompt(input)
            response = await main(input);
        }
        let responseArray = response.split("**")
        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++) {
            if(i === 0 || i%2 !==1){
                newResponse += responseArray[i]
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse
            .split("*")
            .join("</br>")
        let newResponseArray = newResponse2.split(" ")
        for(let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i]
            typingEffect(i, nextWord + " ");
        }
        setLoading(false)
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;