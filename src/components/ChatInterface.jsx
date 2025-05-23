import React from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatInterface = () => {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-white shadow-xl rounded-lg my-5 border">
        <div className="bg-gray-800 text-white p-4 text-center font-bold text-xl rounded-t-lg">
            AI Chat Interface 🤖
        </div>
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default ChatInterface;