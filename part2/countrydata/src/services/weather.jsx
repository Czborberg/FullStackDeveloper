import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'
const api_key = import.meta.env.VITE_API_KEY

const getCoordinates = () => {
    const request = axios.get(`${baseUrl}q=London&appid=${api_key}`)
    return request.then(response => response.data)
    }

const getWeather = (parts) => {
    const request = axios.get(`${baseUrl}q=${parts}&appid=${api_key}`)
    return request.then(response => response.data)
    }
        
export default {
    getCoordinates: getCoordinates,
    getWeather: getWeather,
}