import { Grid } from "@mui/material";
import React, { useMemo } from "react";

import { useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { ProgressBar, SimpleWeatherDetailCard } from "..";
import DynamicArrow from "../DynamicArrow/DynamicArrow";
import {
  MapCurrentCityDataReturn,
  mapCurrentCityData,
} from "../../shared/mapCurrentCityData";

const WeatherDetails: React.FC = () => {
  const { currentCityData } = useContext(WeatherContext) as WeatherContextType;

  const displayData: MapCurrentCityDataReturn | undefined = useMemo(() => {
    if (currentCityData) {
      return mapCurrentCityData(currentCityData!);
    }
  }, [currentCityData]);

  return (
    displayData && (
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} display="grid">
          <SimpleWeatherDetailCard
            title={displayData.wind.title}
            data={displayData.wind.value}
            metric={displayData.wind.metric}
            render={<DynamicArrow deg={displayData.wind.deg!} />}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SimpleWeatherDetailCard
            title={displayData.humidity.title}
            data={displayData.humidity.value}
            metric={displayData.humidity.metric}
            render={<ProgressBar value={displayData.humidity.humidityNumber} />}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SimpleWeatherDetailCard
            title={displayData.visibility.title}
            data={displayData.visibility.value}
            metric={displayData.visibility.metric}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SimpleWeatherDetailCard
            title={displayData.airPressure.title}
            data={displayData.airPressure.value}
            metric={displayData.airPressure.metric}
          />
        </Grid>
      </Grid>
    )
  );
};

export default WeatherDetails;
