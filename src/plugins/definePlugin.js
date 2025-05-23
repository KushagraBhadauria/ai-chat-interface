import { fetchDefinition } from '../api/dictionaryApi';
import DefineCard from '../components/plugins/DefineCard.jsx';

export const definePlugin = {
  name: 'define',
  command: 'define',
  description: 'Get the definition of a word. Usage: /define [word]',
  execute: async (args) => {
    if (!args) {
      throw new Error('Please specify a word. Usage: /define [word]');
    }
    return await fetchDefinition(args);
  },
  component: DefineCard,
};