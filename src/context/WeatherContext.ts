import React, { createContext } from "react";
import { City } from "../models/city";
import { Forecast } from "../models/forecast";

export type WeatherContextType = {
  currentCity: string;
  currentCityData?: City;
  dialogOpen: boolean;
  error: string;
  forecast?: Forecast;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  handleDialogClose: () => void;
  handleIpClick: () => void;
  handleSearchHistoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  ipWeather: City | undefined;
  isFarenheit: boolean;
  loading: boolean;
  search: string | undefined;
  searchHistory: string[];
  searchOpen: boolean;
  setCurrentCity: React.Dispatch<React.SetStateAction<string>>;
  setCurrentCityData: React.Dispatch<React.SetStateAction<City | undefined>>;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setForecast: React.Dispatch<React.SetStateAction<Forecast | undefined>>;
  setIpWeather: React.Dispatch<React.SetStateAction<City | undefined>>;
  setIsFarenheit: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);
