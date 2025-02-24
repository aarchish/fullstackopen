import axios from "axios";

const baseUrl = "https://api.weatherstack.com/current?";
const access_key = import.meta.env.VITE_WEATHERSTACK_API_KEY;

const getWeather = (capital) => {
    const request = axios.get(`${baseUrl}access_key=${access_key}&query=${capital}`);
    return request.then(response => response.data);
}

export default { getWeather };