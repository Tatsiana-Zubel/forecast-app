<template>
  <LoadingSpinner v-if="loading"/>
  <div v-else>
    <div class="container">
      <div class="flex">
        <span v-if="!displayFahrenheit && temperature"> {{ temperature }}&#8451;</span>
        <span v-else-if="displayFahrenheit && temperature">{{ temperatureInFahrenheit }}&#8457;</span>
        <span class="divider"> | </span>
        <span> {{ weatherDescription }}</span>
      </div>
      <span v-if="city && country">{{ city }}, {{ country }}</span>
    </div>
    <div class="container flex">
      <div class="wrapper">
        <span>Humidity</span>
        <span>Wind</span>
        <span>Sunrise</span>
        <span>Sunset</span>
      </div>
      <div class="wrapper">
        <span>{{ humidity }}&#37;</span>
        <span>{{ wind }} m/s</span>
        <span>{{ sunrise }}</span>
        <span>{{ sunset }}</span>
      </div>
    </div>
    <ToggleComponent @toggle="toggleValue"/>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/spinner/LoadingSpinner"
import ToggleComponent from "@/components/toggler/ToggleComponent"
import {ToggleValues} from '@/shared/ToggleValues'
import getLocation from "@/service/LocationService"
import getWeather from "@/service/WeatherService"

export default {
  name: "ForecastComponent",
  components: {
    ToggleComponent,
    LoadingSpinner
  },
  data() {
    return {
      temperature: "N/D",
      displayFahrenheit: false,
      weatherDescription: "N/D",
      city: "N/D",
      country: "N/D",
      humidity: "N/D",
      wind: "N/D",
      sunrise: "N/D",
      sunset: "N/D",
      // non ui values
      positionLatitude: null,
      positionLongitude: null,
      loading: false
    }
  },
  computed: {
    temperatureInFahrenheit() {
      return (this.temperature * 9 / 5) + 32
    }
  },
  beforeMount() {
    this.getCoordinates()
  },
  methods: {
    getCoordinates() {
      if (navigator.geolocation) {
        this.loading = true
        navigator.geolocation.getCurrentPosition((position) => {
          this.positionLatitude = position.coords.latitude
          this.positionLongitude = position.coords.longitude

          this.getWeather()
          this.getCityAndCountry()
          this.loading = false
        });
      } else {
        return null
      }
    },
    async getCityAndCountry() {
      this.loading = true
      await getLocation(this.positionLatitude, this.positionLongitude)
          .then(data => {
            this.city = data.name
            this.country = data.country
          })
          .catch(e => console.error(e))
          .finally(() => this.loading = false)
    },
    async getWeather() {
      this.loading = true
      const kelvinUnit = -272.15

      await getWeather(this.positionLatitude, this.positionLongitude)
          .then(data => {
            this.temperature = Math.round(data.main.temp + kelvinUnit)
            this.weatherDescription = data.weather[0].main
            this.humidity = data.main.humidity

            // toFixed() converts to string
            this.wind = data.wind.speed.toFixed(1)

            //Get and convert sunrise/sunset time
            const sunriseUnixTimestamp = data.sys.sunrise
            const sunriseDate = new Date(sunriseUnixTimestamp * 1000)
            let sunriseHours = sunriseDate.getHours()
            sunriseHours = ("0" + sunriseHours).slice(-2);
            const sunriseMinutes = `0${sunriseDate.getMinutes()}`
            this.sunrise = `${sunriseHours}:${sunriseMinutes.slice(-2)}`

            const sunsetUnixTimestamp = data.sys.sunset
            const sunsetDate = new Date(sunsetUnixTimestamp * 1000)
            const sunsetHours = sunsetDate.getHours()
            const sunsetMinutes = `0${sunsetDate.getMinutes()}`
            this.sunset = `${sunsetHours}:${sunsetMinutes.slice(-2)}`
          })
          .catch(e => console.error(e))
          .finally(() => this.loading = false)
    },
    toggleValue(param) {
      this.displayFahrenheit = param === ToggleValues.Fahrenheit
    }
  }
}
</script>

<style lang="scss">
.container {
  span {
    display: block;
    line-height: 1.5;
  }

  .wrapper:first-child {
    margin-right: 15px;
  }

  .divider {
    margin: 0 10px;
  }
}

.flex {
  display: flex;
}
</style>
