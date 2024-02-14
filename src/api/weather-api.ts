import { instance } from "./base.api";

const endPoint = "/weather";

export const weatherApi = {
  getWeather: (city: string) => {
    return instance.get(endPoint, {
      params: {
        q: city,
        units: "metric",
        appid: "44f1b0b0e9952ff9fbe6a475ec8b5f1a",
      },
    });
  },

  getWeatherLatLon: (lat: string, lon: string) => {
    return instance.get(endPoint, {
      params: {
        lat: lat,
        lon: lon,
        units: "metric",
        appid: "44f1b0b0e9952ff9fbe6a475ec8b5f1a",
      },
    });
  },

  getForecast: (lat: string, lon: string) => {
    return instance.get("onecall", {
      params: {
        lat,
        lon,
        appid: "44f1b0b0e9952ff9fbe6a475ec8b5f1a",
        cnt: 5,
        units: "metric",
      },
    });
  },
};
