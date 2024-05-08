

import React, { useState } from 'react';
import './style.css'; // Import CSS file 

const ChatMessage = ({ message }) => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setIsClicked(true);
  };

  return (
    <div className="chat-message">
      <div className="user-circle">{message.user.charAt(0)}</div>
      <div className="message-content">
        <span className='user'>{message.user}: </span>
        <span className='meassage-text'>{message.text}</span>
      </div>
      <button className={`heart-button ${isClicked ? 'clicked' : ''}`} onClick={handleLike}>
        {isClicked ? '❤️' : '🤍'} Like ({likes})
      </button>
    </div>
  );
};



export default ChatMessage;


