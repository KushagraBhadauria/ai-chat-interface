import React, { useState } from 'react';
import useChatStore from '../store/useChatStore';
import { parseMessage } from '../utils/parser';
import { pluginManager } from '../plugins/pluginManager';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add user message
    addMessage({ sender: 'user', content: trimmedInput, type: 'text' });
    setInput('');

    // Parse and handle command/text
    const parsed = parseMessage(trimmedInput);

    if (parsed.type === 'command') {
      const result = await pluginManager.executePlugin(parsed.command, parsed.args);
      if (result) {
          if (result.data.error) {
              addMessage({
                  sender: 'assistant',
                  content: result.data.error,
                  type: 'error',
              });
          } else {
              addMessage({
                  sender: 'assistant',
                  type: 'plugin',
                  pluginName: result.pluginName,
                  pluginData: result.data,
                  pluginComponent: result.component, // Pass the component
              });
          }
      } else {
        addMessage({
          sender: 'assistant',
          content: `Unknown command: /${parsed.command}`,
          type: 'text',
        });
      }
    } else {
      // Handle natural language or simple echo (for now)
      addMessage({
        sender: 'assistant',
        content: `You said: ${parsed.content}. (Natural language understanding isn't implemented yet.)`,
        type: 'text',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex">
      <input
        type="text"
        className="flex-1 border rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message or /command..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;