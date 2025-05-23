import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ChatMessage from './ChatMessage';
import useChatStore from '../store/useChatStore';

const MessageList = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <ScrollToBottom className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
    </ScrollToBottom>
  );
};

export default MessageList;