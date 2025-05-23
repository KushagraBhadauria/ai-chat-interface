
export const fetchWeather = async (city) => {
  console.log(`Workspaceing weather for ${city}... (Mocked)`);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!city) {
      throw new Error("Please provide a city name.");
  }

  // Mock data - In a real scenario, we'd use fetch() or axios
  const mockData = {
      'paris': { temp: 15, description: 'Cloudy', humidity: 75, city: 'Paris' },
      'tokyo': { temp: 22, description: 'Sunny', humidity: 60, city: 'Tokyo' },
      'london': { temp: 12, description: 'Rainy', humidity: 85, city: 'London' },
      'new york': { temp: 18, description: 'Partly Cloudy', humidity: 70, city: 'New York'},
      'mumbai': { temp: 33, description: 'Mostly Cloudy', humidity: 82, city: 'mumbai'},
      'new delhi': { temp: 40, description: 'Partly Cloudy', humidity: 70, city: 'new delhi'},
      'jaipur': { temp: 40, description: 'Sunny', humidity: 38, city: 'jaipur'},
      'kanpur': { temp: 37, description: 'Sunny', humidity: 26, city: 'kanpur'},
      'benglore': { temp: 32, description: 'Sunny', humidity: 42, city: 'benglore'},
      'jhasi': { temp: 37, description: 'Sunny', humidity: 26, city: 'jhasi'},
      'noida': { temp: 37, description: 'Sunny', humidity: 26, city: 'noida'},
      'gurugram': { temp: 37, description: 'Sunny', humidity: 26, city: 'gurugram'},
      'faridabad': { temp: 37, description: 'Sunny', humidity: 26, city: 'kanpur'},

  };

  const data = mockData[city.toLowerCase()];

  if (data) {
      return data;
  } else {
      throw new Error(`Could not find weather data for ${city}. Try Paris, Tokyo, London, or New York.`);
  }
};
