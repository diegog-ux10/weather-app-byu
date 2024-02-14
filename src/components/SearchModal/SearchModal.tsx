import React, { useContext } from "react";

import {
  Button,
  IconButton,
  Drawer,
  Stack,
  InputBase,
  Paper,
  Box,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";
import { SelectSearchHistory } from "../SelectSearchHistory";

const SearchModal: React.FC = () => {
  const {
    searchOpen,
    setSearchOpen,
    handleChange,
    handleClick,
    searchHistory,
  } = useContext(WeatherContext) as WeatherContextType;

  return (
    <Drawer
      open={searchOpen}
      onClose={() => setSearchOpen(false)}
      PaperProps={{
        sx: {
          backgroundColor: "#1E213A",
        },
      }}
    >
      <Box
        padding="12px 36px"
        sx={{
          width: { xs: "100vw", md: "50vw", lg: "30vw" },
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            marginBottom: "24px",
          }}
        >
          <IconButton onClick={() => setSearchOpen(false)}>
            <CloseIcon sx={{ color: "#E7E7EB" }} />
          </IconButton>
        </Box>
        <Stack flexDirection="row" justifyContent="space-between" gap={1}>
          <Paper
            component="form"
            sx={{
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              width: "auto",
              backgroundColor: "#1E213A",
              border: "1px solid",
              borderColor: "#E7E7EB",
              borderRadius: 0,
              "&hover": {
                borderColor: "black",
              },
            }}
          >
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClick}
            >
              <SearchIcon sx={{ color: "#585676" }} />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "#E7E7EB" }}
              placeholder="search location"
              inputProps={{ "aria-label": "search location weather" }}
              onChange={handleChange}
            />
          </Paper>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              backgroundColor: "#3C47E9",
              borderRadius: 0,
            }}
          >
            Search
          </Button>
        </Stack>
        {searchHistory.length ? (
          <SelectSearchHistory />
        ) : (
          <Typography>There is not any search</Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default SearchModal;
