import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useChatStore = create((set) => ({
  messages: JSON.parse(localStorage.getItem('chatHistory')) || [],
  addMessage: (message) => set((state) => {
    const newMessages = [...state.messages, { ...message, id: uuidv4(), timestamp: new Date().toISOString() }];
    localStorage.setItem('chatHistory', JSON.stringify(newMessages));
    return { messages: newMessages };
  }),
}));

export default useChatStore;