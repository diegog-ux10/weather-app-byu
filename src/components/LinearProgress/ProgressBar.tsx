import { styled } from "@mui/material/styles";
import { Typography, Stack } from '@mui/material';

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";


export type ProgressBarProps = {
  value: number
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#FFEC65" : "#308fe8",
  },
}));

// Inspired by the former Facebook spinners.

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <Stack sx={{ flexGrow: 1 }}>
      <Stack sx={{width: "100%", display: "flex", justifyContent:"space-between", flexDirection: "row"}}>
        <Typography sx={{color: "#585676"}}>0</Typography>
        <Typography sx={{color: "#585676"}}>50</Typography>
        <Typography sx={{color: "#585676"}}>100</Typography>
      </Stack>
      <BorderLinearProgress variant="determinate" value={value} />
      <Stack sx={{width: "100%", display: "flex", justifyContent:"end"}}>
        <Typography sx={{color: "#585676", width: "fit-content"}}>%</Typography>
      </Stack>
    </Stack>
  );
}

export default ProgressBar
