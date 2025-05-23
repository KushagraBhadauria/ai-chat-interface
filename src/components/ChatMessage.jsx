import React from 'react';

const ChatMessage = ({ message }) => {
  const isUser = message.sender === 'user';
  const PluginComponent = message.pluginComponent;

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-xs md:max-w-md lg:max-w-lg ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message.type === 'text' && <div>{message.content}</div>}
        {message.type === 'plugin' && PluginComponent && (
            <PluginComponent data={message.pluginData} />
        )}
         {message.type === 'error' && (
             <div className="bg-red-100 p-4 rounded-lg border border-red-300 text-red-700">
                <p><strong>Error:</strong> {message.content}</p>
             </div>
         )}
         <div className="text-xs mt-1 opacity-60 text-right">
             {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
         </div>
      </div>
    </div>
  );
};

export default ChatMessage;