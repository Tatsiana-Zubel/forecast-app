import axios from 'axios'
import { getCache, setCache } from '@/utils/InMemoryCache'

const key = atob(process.env.VUE_APP_API_KEY)

interface Location {
  name: string
  country: string
}

const location = 'getLocation: '

const getLocation = async (
  latitude: number,
  longitude: number
): Promise<Location> => {
  const pathPrefix = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}`
  const cachedItem = await getCache(latitude, longitude, location)
  if (!cachedItem) {
    return axios.get(pathPrefix + `&appid=${key}`).then((res) => {
      const data = res.data[0]
      setCache(latitude, longitude, location, data)
      return data
    })
  }
  return Promise.resolve(cachedItem)
}
export default getLocation
