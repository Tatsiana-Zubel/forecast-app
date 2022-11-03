const getCache = async (
  latitude: number,
  longitude: number,
  prefix: string
) => {
  const cachedItem = await localStorage.getItem(
    JSON.stringify(prefix + roundUp(latitude) * roundUp(longitude))
  )
  if (cachedItem) {
    const parsedCachedItem = JSON.parse(cachedItem)
    if (Date.now() < parsedCachedItem.expirationTime) {
      return parsedCachedItem.data
    }
  }
  return null
}

const setCache = (
  latitude: number,
  longitude: number,
  prefix: string,
  data: {}
) => {
  localStorage.setItem(
    JSON.stringify(prefix + roundUp(latitude) * roundUp(longitude)),
    JSON.stringify({
      expirationTime:
        Date.now() + Number(process.env.VUE_APP_CACHE_RETENTION) + 1,
      data: data
    })
  )
}

const roundUp = (value: number): number => {
  return Number(value.toFixed(4))
}

export { getCache, setCache }
