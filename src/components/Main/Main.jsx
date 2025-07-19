import React from 'react';
import './Main.css'
import {assets} from "../../assets/assets.js";
import { motion } from "motion/react"


const Main = () => {
    return (
        <motion.div layout className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">
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
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text"  placeholder="Enter prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            <img src={assets.send_icon} alt=""/>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini can make mistakes, so double-check it
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Main;