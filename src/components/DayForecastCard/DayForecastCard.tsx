import React from "react";
import {  Typography, Stack, Box } from "@mui/material";


import { formatDate } from "../../helper/formatDate";
import { WeatherImage } from "../WeatherImage";
import { useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { celsiusToFarenheit } from "../../helper/celsiusToFarenheit";

export type DayForecastCardProps = {
  index: number;
  date: number;
  icon: string;
  maxTemp: number;
  minTemp: number;
  weather: string;
};

const DayForecastCard: React.FC<DayForecastCardProps> = ({
  index,
  date,
  maxTemp,
  minTemp,
  weather,
}) => {
  const { isFarenheit } = useContext(WeatherContext) as WeatherContextType;
  const dayDate = index === 0 ? "Tomorrow" : formatDate(date);

  return (
    <Box
      sx={{
        backgroundColor: "#1E213A",
        padding: "24px 18px",
        textAlign: "center",
        height: { md: "177px", xs: "230px" },
        width: { md: "120px", xs: "100%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "#E7E7EB",
          fontSize: { md: "12px", sm: "16px" },
        }}
      >
        {dayDate}
      </Typography>
      <Stack textAlign="center">
        <WeatherImage image={weather} width="60px" />
      </Stack>
      <Stack display="flex" flexDirection="row" justifyContent="space-between">
        <Typography sx={{ color: "#E7E7EB" }}>
          {isFarenheit
            ? celsiusToFarenheit(maxTemp.toString())
            : Math.round(maxTemp)}
          {isFarenheit ? "ºF" : "ºC"}
        </Typography>
        <Typography sx={{ color: "#585676" }}>
          {isFarenheit
            ? celsiusToFarenheit(maxTemp.toString())
            : Math.round(minTemp)}
          {isFarenheit ? "ºF" : "ºC"}
        </Typography>
      </Stack>
    </Box>
  );
};

export default DayForecastCard;
