import React from "react";
import {  Typography, Stack, Box } from "@mui/material";


export type SimpleWeatherDetailCardProps = {
  title: string;
  data: string ;
  metric: string;
  render?: React.ReactNode;
};

const SimpleWeatherDetailCard: React.FC<SimpleWeatherDetailCardProps> = ({
  title,
  data,
  metric,
  render,
}) => {

  return (
    <Box
      sx={{
        backgroundColor: "#1E213A",
        padding: "24px 36px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flex: "1 1 auto"
      }}
    >
      <Typography sx={{ color: "#E7E7EB", fontWeight: 500 }}>
        {title}
      </Typography>
      <Stack display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <Typography
          sx={{
            color: "#E7E7EB",
            fontSize: "64px",
            fontWeight: 700,
          }}
        >
          {data}
        </Typography>
        <Typography
          sx={{
            color: "#E7E7EB",
            fontSize: "40px",
            fontWeight: 500,
          }}
        >
          {metric}
        </Typography>
      </Stack>
      {render && render}
    </Box>
  );
};

export default SimpleWeatherDetailCard;
