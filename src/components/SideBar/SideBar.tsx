import React, { useContext, useMemo } from "react";

import {
  Button,
  IconButton,
  Typography,
  CircularProgress,
  Stack,
  Box,
} from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PlaceIcon from "@mui/icons-material/Place";

import { formatDate } from "../../helper/formatDate";
import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";

import { WeatherImage } from "../WeatherImage";

import background from "/src/assets/sidebar-background.png?url";
import { celsiusToFarenheit } from "../../helper/celsiusToFarenheit";
import { SearchModal } from "../SearchModal";

const SideBar: React.FC = () => {
  const {
    setSearchOpen,
    currentCityData,
    loading,
    handleIpClick,
    isFarenheit,
  } = useContext(WeatherContext) as WeatherContextType;

  const temp = useMemo(() => {
    return Math.round(currentCityData?.main.temp ?? 0).toString();
  }, [currentCityData]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          padding: "28px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!loading ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  background: "#585676",
                  color: "white",
                  borderRadius: 0,
                }}
                variant="contained"
                onClick={() => setSearchOpen(true)}
              >
                Search for places
              </Button>
              <IconButton
                sx={{ background: "#585676", color: "white" }}
                onClick={handleIpClick}
              >
                <GpsFixedIcon />
              </IconButton>
            </Box>
            <WeatherImage image={currentCityData?.weather[0].main ?? "default"} />
            <Stack display="flex" alignItems="center" flexDirection="row">
              <Typography fontSize="144px" sx={{ color: "#E7E7EB" }}>
                {isFarenheit ? celsiusToFarenheit(temp) : temp}
              </Typography>
              <Typography fontSize="48px" sx={{ color: "#585676" }}>
                {isFarenheit ? "ºF" : "ºC"}
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize="36px" sx={{ color: "#585676" }}>
                {currentCityData?.weather[0].main}
              </Typography>
            </Stack>
            <Stack>
              <Typography fontSize="18px" sx={{ color: "#585676" }}>
                Today - {formatDate(currentCityData?.dt ?? 0)}
              </Typography>
            </Stack>
            <Stack display="flex" flexDirection="row">
              <PlaceIcon sx={{ color: "#88869D" }} />
              <Typography fontSize="18px" sx={{ color: "#585676" }}>
                {currentCityData?.name}
              </Typography>
            </Stack>
          </>
        ) : (
          <CircularProgress sx={{color: "#3C47E9"}} />
        )}
      </Box>
      <SearchModal />
    </>
  );
};

export default SideBar;
