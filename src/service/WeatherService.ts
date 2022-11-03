import axios from 'axios'
import { getCache, setCache } from '@/utils/InMemoryCache'

const key = atob(process.env.VUE_APP_API_KEY)

interface Weather {
  main: Main
  weather: any[]
  wind: Wind
  sys: Sys
}

interface Main {
  temp: number
  humidity: number
}

interface Wind {
  speed: number
}

interface Sys {
  sunrise: number
  sunset: number
}

const weather = 'getWeather: '

const getWeather = async (
  latitude: number,
  longitude: number
): Promise<Weather> => {
  const pathPrefix = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`
  const cachedItem = await getCache(latitude, longitude, weather)
  if (!cachedItem) {
    return axios.get(pathPrefix + `&appid=${key}`).then((res) => {
      const data = res.data
      setCache(latitude, longitude, weather, data)
      return data
    })
  }
  return Promise.resolve(cachedItem)
}

export default getWeather
