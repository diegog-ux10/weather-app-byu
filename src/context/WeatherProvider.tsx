import React, { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { City } from "../models/city";
import { weatherApi } from "../api/weather-api";
import { Forecast } from "../models/forecast";
import { setWeatherData } from "../shared/setWeatherData";
import { ErrorRes } from "../models/ErrorRes";
import { saveLocalStorage } from "../helper/saveLocarlStorage";
import { loadLocalStorage } from "../helper/loadLocalStorage";

type WeatherProviderProps = {
  children?: React.ReactNode;
};

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [search, setSearch] = useState<string | undefined>();
  const [currentCity, setCurrentCity] = useState<string>("caracas");
  const [error, setError] = useState<string>("");
  const [currentCityData, setCurrentCityData] = useState<City>();
  const [forecast, setForecast] = useState<Forecast>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isFarenheit, setIsFarenheit] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [ipWeather, setIpWeather] = useState<City>();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    fetchData(currentCity);

    async function fetchData(city: string) {
      try {
        setLoading(true);
        const res = await weatherApi.getWeather(city);

        setCurrentCityData(res.data);

        const { lon, lat } = res.data.coord;
        const data = await weatherApi.getForecast(lat, lon);

        setForecast(data.data);
        setLoading(false);
      } catch (error) {
        const errorData: ErrorRes = error as ErrorRes;

        if (errorData) {
          setError(errorData.response.data.message);
        }
        setDialogOpen(true);
      }
    }
  }, [currentCity]);

  useEffect(() => {
    const data = loadLocalStorage();
    if (data) {
      setSearchHistory(data);
    }
  }, []);

  useEffect(() => {
    setWeatherData(setIpWeather);
  }, [])

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSearch(e.target.value as string);
  };

  const handleClick = () => {
    if (search) {
      setCurrentCity(search);
    }
    if (searchOpen) {
      setSearchOpen(false);
    }
    setSearchHistory((oldState: string[]): string[] => {
      const formatOldState = oldState.map((search) => search.toLowerCase());
      if (formatOldState.includes(search?.toLowerCase() as string))
        return [...formatOldState];
      return [...formatOldState, search as string];
    });
    saveLocalStorage(searchHistory);
  };

  const handleIpClick = () => {
    try {
      setLoading(true);
      if (ipWeather) {
        console.log("prueba");
        
        setCurrentCityData(ipWeather);
      }
      setLoading(false);
    } catch (error) {
      setDialogOpen(true);
      console.log("se disparo el error");
      console.log(error);
    }
  };

  const handleDialogClose = () => {
    setCurrentCity("caracas");
    setDialogOpen(false);
    setError("");
    setLoading(false);
  };

  const handleSearchHistoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setLoading(true);
      setCurrentCity(event.target.value)
      setLoading(false);
    } catch (error) {
      setDialogOpen(true);
      console.log("se disparo el error");
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        currentCity,
        currentCityData,
        forecast,
        handleChange,
        handleClick,
        handleIpClick,
        ipWeather,
        isFarenheit,
        loading,
        search,
        searchOpen,
        setCurrentCity,
        setCurrentCityData,
        setForecast,
        setIpWeather,
        setIsFarenheit,
        setLoading,
        setSearch,
        setSearchOpen,
        dialogOpen,
        setDialogOpen,
        handleDialogClose,
        error,
        setError,
        searchHistory,
        handleSearchHistoryChange,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
