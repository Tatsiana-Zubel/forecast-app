import axios from "axios";

const key = atob(process.env.VUE_APP_API_KEY);

interface Location {
  name: string;
  country: string;
}

const getLocation = (
  latitude: number,
  longitude: number
): Promise<Location> => {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${key}`
    )
    .then((res) => res.data[0]);
};

export default getLocation;
