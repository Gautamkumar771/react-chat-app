// ChatApp.js
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

import './style.css'

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];   // to feach the random user 

    const newMessage = { user: randomUser, text };
    
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <div className="chat-thread">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatApp;
