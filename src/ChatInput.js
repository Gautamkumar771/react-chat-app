// ChatInput.js
import React, { useState } from 'react';
import './style.css'

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSend = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="chat-input">
      <input className='input' type="text" value={text} onChange={handleChange} />
      <button className='button'  onClick={handleSend}>Send</button>
    </div>
    
  );
};

export default ChatInput;
