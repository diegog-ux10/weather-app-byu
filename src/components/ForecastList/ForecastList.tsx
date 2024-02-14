import React, { useContext } from "react";

import { Grid } from "@mui/material";

import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { Day } from "../../models/day";
import { DayForecastCard } from "..";

const ForecastList: React.FC = () => {
  const { forecast } = useContext(WeatherContext) as WeatherContextType;

  return (
    <Grid
      container
      spacing={2}
      sx={{justifyContent: {
        sm:"start",
        lg: "space-between"
      }}}
    >
      {forecast?.daily.map((day: Day, index) => {
        if (index > 4) return;
        return (
          <Grid
            item
            key={index}
            xs={6}
            sm={4}
            md={4}
            lg={2.4}
          >
            <DayForecastCard
              icon={day.weather[0].icon}
              date={day.dt}
              index={index}
              maxTemp={day.temp.max}
              minTemp={day.temp.min}
              weather={day.weather[0].main}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ForecastList;
