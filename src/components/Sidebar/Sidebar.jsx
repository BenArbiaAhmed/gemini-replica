import React, {useContext, useState} from 'react';
import { assets } from "../../assets/assets.js";
import './Sidebar.css';
import Context from "../../context/Context.jsx";

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return (
        <div className= "sidebar" >
            <div className="top">
                <img src={assets.menu_icon} alt="" className="menu" onClick={() => setExtended(prevState => !prevState)}   />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" onClick={()=>{newChat()}}/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>

                            {prevPrompts.map((item) => {
                                return (
                                    <div className="recent-entry" onClick={() => loadPrompt(item)}>
                                        <img src={assets.message_icon} alt=""/>
                                        <p>{item.slice(0, 17)}...</p>
                                    </div>
                                )
                            })}
                    </div>:
                null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt=""/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt=""/>
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt=""/>
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;