# AI Chat Interface with Plugin System

This project is a React-based chatbot interface that supports a plugin-style system for extending its functionality through slash commands and potentially natural language processing.

## 🚀 Features

* **Chat UI:** A familiar, scrollable conversation view.
* **Slash Commands:** Supports commands like `/weather`, `/calc`, and `/define`.
* **Plugin Architecture:** Easily extendable with new commands and functionalities.
* **Rich Responses:** Plugins can return custom UI cards for better visualization.
* **Persistence:** Chat history is saved to `localStorage` and reloaded.
* **Styling:** Uses Tailwind CSS for a clean, modern look.

## ⚙️ Tech Stack

* **UI:** React + Vite
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Scrolling:** `react-scroll-to-bottom`
* **IDs:** `uuid`

## 🧩 Plugin Architecture

The system uses a `pluginManager` to handle commands.

* **Location:** `src/plugins/`
* **Manager:** `src/plugins/pluginManager.js` handles registration and execution.
* **Parsing:** `src/utils/parser.js` detects slash commands (`/command [args]`).
* **Plugin Definition:** Each plugin in `src/plugins/` defines:
    * `name`: A unique identifier.
    * `command`: The slash command trigger (e.g., 'weather').
    * `description`: Help text.
    * `execute`: An async function that takes arguments and returns data.
    * `component`: A React component to render the plugin's output.

## ✨ Implemented Plugins

1.  **/weather [city]**
    * **Description:** Fetches the current weather for a specified city.
    * **API Used:** Mock API (`src/api/weatherApi.js`). Easily adaptable to real APIs (e.g., OpenWeatherMap, WeatherAPI.com). *Note: Real APIs usually require an API key.*
2.  **/calc [expression]**
    * **Description:** Evaluates a simple mathematical expression.
    * **Logic:** Uses a *relatively* safer `Function` constructor. **Warning:** For production, consider a dedicated library like `mathjs`.
3.  **/define [word]**
    * **Description:** Provides the dictionary definition of a word.
    * **API Used:** [DictionaryAPI.dev](https://dictionaryapi.dev/) (Free, no key required).

## 📦 Setup and Running

1.  **Clone the repository (if applicable) or follow the code setup.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open your browser to the specified local address (usually `http://localhost:5173`).
