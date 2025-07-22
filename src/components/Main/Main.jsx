import React, {useContext} from 'react';
import './Main.css'
import {assets} from "../../assets/assets.js";
import Context from "../../context/Context.jsx";
import {ClipLoader} from "react-spinners";


const Main = () => {
    const {onSent, showResult, loading, resultData, setInput, input} = useContext(Context);
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Ahmed</span></p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>
                                    <span className="primary-text">Illustrate Python</span>
                                    <span className="secondary-text">dictionary comprehension</span>
                                </p>
                            </div>
                            <div className="card">
                                <p>
                                    <span className="primary-text">Illustrate Python</span>
                                    <span className="secondary-text">dictionary comprehension</span>
                                </p>
                            </div>
                            <div className="card">
                                <p>
                                    <span className="primary-text">Illustrate Python</span>
                                    <span className="secondary-text">dictionary comprehension</span>
                                </p>
                            </div>
                        </div>
                    </>:
                    <div className="result">
                        <div className="result-data">

                            {loading ?
                                <>
                                    <ClipLoader
                                        color={"#3186ff"}
                                        loading={loading}
                                        size={30}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                    <p>Just a sec ...</p>
                                </>

                            :<>
                                    <img src={assets.gemini_real_icon} alt=""/>
                                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                </>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Ask Gemini"
                            onKeyDown={(e) => {
                                if (e.key === "Enter")
                                    onSent();
                            }}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            {input? <img
                                onClick={() => onSent()}
                                src={assets.send_icon}
                                alt=""
                            />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini can make mistakes, so double-check it
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;