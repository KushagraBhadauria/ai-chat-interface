import { weatherPlugin } from './weatherPlugin';
import { calcPlugin } from './calcPlugin';
import { definePlugin } from './definePlugin';

const plugins = [weatherPlugin, calcPlugin, definePlugin];

export const pluginManager = {
  getPlugins: () => plugins,
  findPlugin: (command) => {
    return plugins.find(p => p.command === command);
  },
  executePlugin: async (command, args) => {
    const plugin = plugins.find(p => p.command === command);
    if (plugin) {
      try {
        const data = await plugin.execute(args);
        return {
          pluginName: plugin.name,
          data: data,
          component: plugin.component,
        };
      } catch (error) {
        console.error(`Error executing plugin ${plugin.name}:`, error);
        return {
           pluginName: plugin.name,
           data: { error: error.message || "An error occurred." },
           component: null, // Or a generic error component
        }
      }
    }
    return null;
  },
};