import { weatherApi } from "../api/weather-api";
import { City } from "../models/city";

export function setWeatherData(cb:React.Dispatch<React.SetStateAction<City | undefined>>) {
  let lon: string;
  let lat: string;

  navigator.geolocation.getCurrentPosition(async (posicion) => {
    lon = posicion.coords.longitude.toString();
    lat = posicion.coords.latitude.toString();

    const res = await weatherApi.getWeatherLatLon(lat, lon);

    cb(res.data as City);
  });
}
