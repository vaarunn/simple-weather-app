
Demo: https://simple-weather-5xkdb2roh-vaarunn.vercel.app/

 ## Outputs
![Screenshot (149)](https://github.com/vaarunn/simple-weather-app/assets/122664469/25794f8a-3213-4b34-9cb6-5b2a0a5920ce)
![Screenshot (150)](https://github.com/vaarunn/simple-weather-app/assets/122664469/bc43ef5d-3351-4770-9825-2a355e1511ab)

**Simple Weather App** is a weather web app to get the current weather data of the Entered Location.
Written in ReactJS and tailwindCSS for frontend.
NodeJS and Express for backend.
ALso with the help of OpenWeatherMap API to get weather data.

## Setup

Prereq apps to have downloaded

- [Node](https://nodejs.org/en/)
- [git](https://git-scm.com/downloads)

Clone the repo:

```
git clone https://github.com/vaarunn/simple-weather-app
```

Download all npm packages for both client/server

```javascript
npm run setup
```

#### Weather API

Make an account at and go to the [api keys](https://home.openweathermap.org/api_keys) section.
Copy/pasta that key to the .env file using `WEATHER_KEY` as your key

```
Example
WEATHER_KEY=1234567890asdfjkl
```

## Run Locally

```javascript
npm run dev
```

This is command will your client and server concurrently.

- client - localhost:5173
- server - localhost:3000

The service will auto-watch both frontend and backend, so no need to restart to see your changes.  
Once you save your changes, it'll auto-refresh to view your changes.

### Deploy

Connect this repo to Vercel and deploy it easily
