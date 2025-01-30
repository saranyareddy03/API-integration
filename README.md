# API-integration

**COMPANY**: CODTECH IT SOLUTIONS
**NAME**: NALLIMILLI SARANYA REDDY
**INTERN ID**: CT12NYK
**DOMAIN**:: FULL STACK WEB DEVELOPMENT
**DURATION**: 8 WEEKS
**MENTOR**: NEELA SANTOSH

**DESCRIPTION**:

Task 1 is API integration, the goal is to develop a webpage that fetches and displays data from a public API, specifically a weather API. API integration is the process of connecting different software systems or applications through their Application Programming Interfaces (APIs) to enable them to communicate and share data with each other. There are many types of APIs, and for this project, I chose a weather API. My project creates a simple weather webpage that fetches and displays weather data from the OpenWeatherMap API. This webpage displays the city name, temperature, and humidity for a user-specified location. The project involves three main files: index.html (HTML), styles.css (CSS), and script.js (JavaScript).

The (index.html) file is responsible for defining the structure of our webpage. Inside the head tag, we link to our external CSS file (styles.css). The <body> contains the visible content of the page. We create a DIV with the class weather-widget to group all elements of our weather webpage. Inside this DIV, we include: a heading with h1 tag displaying "Today's Weather," an input field for the user to enter the city name, a button with button tag that calls the getWeather function when clicked, and paragraphs with the ids city, highlight-temperature, and humidity to display the city name, temperature, and humidity respectively. Finally, we include a <script> tag to link to our external JavaScript file (script.js).

The (styles.css) file provides the styling for our weather widget. These styles set the font family for the entire body to Arial, create a flexbox layout to center the content, set the height to fill the viewport, remove default margins, and set a background color. The .weather-widget class styles the main container with a white background, padding, rounded corners, a subtle shadow, and centered text. These styles define the appearance of the input field and buttons, including padding, margins, border styles, colors, and hover effects.

The (script.js) file handles the functionality of fetching and displaying weather data. To generate our API key, we need to log in to the OpenWeatherMap API, click on register,click on my API keys,generate our API key, and copy it. In script.js, we define constants to store our OpenWeatherMap API key and base URL. The getWeather function retrieves the city name from the input field, constructs the API URL, makes a fetch request to the API, and calls the displayWeather function with the response data. The displayWeather function updates the DOM elements with the fetched data. If the data is invalid, it sets default "Not found" or "N/A" values.

This project demonstrates a simple yet effective way to create a weather webpage using HTML, CSS, and JavaScript. It involves fetching data from an external API, handling user input, and dynamically updating the webpage content. The combination of a clean HTML structure, responsive CSS styling, and JavaScript functionality makes this project an excellent starting point for anyone looking to learn web development and API integration.


**OUTPUT**


![Image](https://github.com/user-attachments/assets/a9d6d159-cbda-4cc3-a910-cbefb32f544f)
![Image](https://github.com/user-attachments/assets/f3a15462-cf1c-4ba4-814e-a195c7e4c5d3)
![Image](https://github.com/user-attachments/assets/7104bafc-ad8f-4ef8-a431-b79c7ec36865)

