import { useContext } from "react";
import { Box, MenuItem, TextField } from "@mui/material";

import { withStyles } from "@material-ui/core/styles";

import {
  WeatherContext,
  WeatherContextType,
} from "../../context/WeatherContext";

const TextFieldSelect = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#E7E7EB",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#616475",
        color: "#616475"
      },
      "&:hover fieldset": {
        borderColor: "#3C47E9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E7E7EB",
      },
    },
  },
})(TextField);

export default function SelectSearchHistory() {
  const {
    setLoading,
    setCurrentCity,
    setDialogOpen,
    searchHistory,
    setSearchOpen,
  } = useContext(WeatherContext) as WeatherContextType;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      setCurrentCity(event.target.value);
      setSearchOpen(false);
      setLoading(false);
    } catch (error) {
      setDialogOpen(true);
      console.log("se disparo el error");
      console.log(error);
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <TextFieldSelect
        id="demo-simple-select-helper"
        onChange={handleChange}
        fullWidth
        label="Select city"
        multiline
        InputLabelProps={{
          sx: {
            color: "#616475",
          },
        }}
        select
      >
        {searchHistory.map((search, index) => (
          <MenuItem key={index} value={search}>
            {search}
          </MenuItem>
        ))}
      </TextFieldSelect>
    </Box>
  );
}
