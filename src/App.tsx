import { useContext } from "react";

import "./App.css";

import { SideBar } from "./components/SideBar";

import { WeatherContext, WeatherContextType } from "./context/WeatherContext";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import { ForecastList, WeatherDetails } from "./components";

function App() {
  const {
    currentCity,
    isFarenheit,
    setIsFarenheit,
    dialogOpen,
    handleDialogClose,
    error,
    loading,
  } = useContext(WeatherContext) as WeatherContextType;

  return (
    <>
      <Box
        display="flex"
        sx={{
          width: "100vw",
          height: { xs: "fit-content", xl: "100vh" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%", lg: "30%" },
            height: { xs: "100vh", sm: "unset" },
            flex: { xs: "1 1 auto" },
          }}
        >
          {currentCity && <SideBar />}
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "70%" },
            height: "100%",
            backgroundColor: "#100E1D",
            padding: { xs: "48px 20px", md: "40px", lg: "80px" },
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Stack
            flexDirection="row"
            gap={2}
            justifyContent="end"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Avatar
              sx={{
                backgroundColor: isFarenheit ? "#E7E7EB" : "#585676",
                color: !isFarenheit ? "#E7E7EB" : "#110E3C",
              }}
              onClick={() => setIsFarenheit(true)}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, cursor: "pointer" }}
              >
                ºF
              </Typography>
            </Avatar>
            <Avatar
              sx={{
                backgroundColor: !isFarenheit ? "#E7E7EB" : "#585676",
                color: isFarenheit ? "#E7E7EB" : "#110E3C",
              }}
              onClick={() => setIsFarenheit(false)}
            >
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, cursor: "pointer" }}
              >
                ºC
              </Typography>
            </Avatar>
          </Stack>

          <Box>
            {!loading ? (
              <ForecastList />
            ) : (
              <CircularProgress sx={{ color: "#3C47E9" }} />
            )}
          </Box>
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#E7E7EB",
                }}
              >
                Todays HighLights
              </Typography>
              {!loading ? (
                <WeatherDetails />
              ) : (
                <CircularProgress sx={{ color: "#3C47E9" }} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{error}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Try Again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
