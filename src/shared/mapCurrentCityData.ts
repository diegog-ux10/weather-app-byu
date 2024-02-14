import { City } from "../models/city";

type DetailObject = {
  title: string;
  value: string;
  metric: string;
};

export type MapCurrentCityDataReturn = {
  wind: DetailObject & {
    deg: string;
  };

  humidity: DetailObject & {
    humidityNumber: number;
  };

  visibility: DetailObject;

  airPressure: DetailObject;
};

export const mapCurrentCityData = (
  city: City
): MapCurrentCityDataReturn | undefined => {
  const windSpeed = Math.round(city?.wind.speed).toString();
  const windDeg = city?.wind.deg.toString();
  const miles = Math.round(city.visibility / 1609)

  return {
    wind: {
      title: "Wind status",
      value: windSpeed,
      metric: "mph",
      deg: windDeg,
    },

    humidity: {
      title: "Humidity",
      value: city.main.humidity.toString(),
      metric: "%",
      humidityNumber: city.main.humidity,
    },

    visibility: {
      title: "Visibility",
      value: miles.toString(),
      metric: "miles",
    },

    airPressure: {
      title: "Air Pressure",
      value: city.main.pressure.toString(),
      metric: "mb",
    },
  };
};
