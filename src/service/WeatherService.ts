import axios from "axios";

const key = atob(process.env.VUE_APP_API_KEY);

interface Weather {
  main: Main;
  weather: any[];
  wind: Wind;
  sys: Sys;
}

interface Main {
  temp: number;
  humidity: number;
}

interface Wind {
  speed: number;
}

interface Sys {
  sunrise: number;
  sunset: number;
}

const getWeather = (latitude: number, longitude: number): Promise<Weather> => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    )
    .then((res) => res.data);
};

export default getWeather;
