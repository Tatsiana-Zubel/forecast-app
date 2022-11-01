<template>
  <LoadingSpinner v-if="loading"/>
  <div v-else>
    <div class="container">
      <span v-if="temperature && weatherDescription"> {{ temperature }}&#8451; | {{ weatherDescription }}</span>
      <span v-if="city && country">{{ city }}, {{ country }}</span>
    </div>
    <div class="container flex">
      <div class="wrapper">
        <span v-if="humidity">Humidity</span>
        <span v-if="wind">Wind</span>
        <span v-if="sunrise">Sunrise</span>
        <span v-if="sunset">Sunset</span>
      </div>
      <div class="wrapper">
        <span v-if="humidity">{{ humidity }}&#37;</span>
        <span v-if="wind">{{ wind }} m/s</span>
        <span>{{ sunrise }}</span>
        <span>{{ sunset }}</span>
      </div>
    </div>
    <ToggleComponent/>
  </div>
</template>

<script>
import LoadingSpinner from "@/components/Spinner/LoadingSpinner";
import './ForecastComponent.scss'
import axios from 'axios'
import ToggleComponent from "@/components/Toggler/ToggleComponent";

export default {
  name: "ForecastComponent",
  components: {
    ToggleComponent,
    LoadingSpinner
  },
  data() {
    return {
      temperature: null,
      weatherDescription: null,
      city: null,
      country: null,
      humidity: null,
      wind: null,
      sunrise: null,
      sunset: null,
      positionLatitude: null,
      positionLongitude: null,
      loading: false,
      apiKey: 'a8309208f1b602f825e91ac2c91e131b'
    }
  },
  computed: {
    locationApiCallLink() {
      return `http://api.openweathermap.org/geo/1.0/reverse?lat=${this.positionLatitude}&lon=${this.positionLongitude}&appid=${this.apiKey}`
    },
    weatherApiCallLink() {
      return `https://api.openweathermap.org/data/2.5/weather?lat=${this.positionLatitude}&lon=${this.positionLongitude}&appid=${this.apiKey}`
    }
  },
  beforeMount() {

    this.getCoordinates()
  },
  methods: {
    getCoordinates() {
      this.loading = true
      if (navigator.geolocation) {
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
      await axios.get(this.locationApiCallLink)
        .then(res => {
          const data = res.data[0]
          this.city = data.name
          this.country = data.country
          this.loading = false
        })
    },
    async getWeather() {
      this.loading = true
      let kelvinUnit = -272.15
      await axios.get(this.weatherApiCallLink)
        .then(res => {
          const data = res.data
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
          this.sunrise =`${sunriseHours}:${sunriseMinutes.slice(-2)}`

          const sunsetUnixTimestamp = data.sys.sunset
          const sunsetDate = new Date(sunsetUnixTimestamp * 1000)
          const sunsetHours = sunsetDate.getHours()
          const sunsetMinutes = `0${sunsetDate.getMinutes()}`
          this.sunset =`${sunsetHours}:${sunsetMinutes.slice(-2)}`

          this.loading = false
        })
    }
  }
}
</script>
