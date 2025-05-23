import { fetchWeather } from '../api/weatherApi';
import WeatherCard from '../components/plugins/WeatherCard.jsx';

export const weatherPlugin = {
  name: 'weather',
  command: 'weather',
  description: 'Get the current weather for a city. Usage: /weather [city]',
  execute: async (args) => {
    if (!args) {
      throw new Error('Please specify a city. Usage: /weather [city]');
    }
    return await fetchWeather(args);
  },
  component: WeatherCard,
};