import React, {useState} from 'react';
import { assets } from "../../assets/assets.js";
import './Sidebar.css';
import { motion } from "motion/react"

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    return (
        <motion.div layout className= "sidebar" >
            <div className="top">
                <motion.img layout src={assets.menu_icon} alt="" className="menu" onClick={() => setExtended(prevState => !prevState)}   />
                <div className="new-chat">
                    <motion.img layout src={assets.plus_icon} alt=""/>
                    {extended?<p layout>New Chat</p>:null}
                </div>
                <div className="recent">
                    {extended?<p className="recent-title">Recent</p>:null}
                    {extended?<div className="recent-entry">
                        <img src={assets.message_icon} alt=""/>
                        <p>What is love ...</p>
                    </div>:null}
            </div>

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <motion.img layout src={assets.question_icon} alt=""/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <motion.img layout src={assets.history_icon} alt=""/>
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <motion.img layout src={assets.setting_icon} alt=""/>
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </motion.div>
    );
};

export default Sidebar;