import React from "react";
import {  IconButton, Typography, Stack } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';


export type DynamicArrowProps = {
	deg: string
};

const DynamicArrow: React.FC<DynamicArrowProps> = ({deg}) => {
  return (
    <Stack display="flex" justifyContent="center" alignItems="center" gap={1} flexDirection="row">
      <IconButton
        sx={{ backgroundColor: "#585676" }}
        size="small"
      >
        <NavigationIcon
          sx={{
            color: "#E7E7EB",
            transform: `rotate(${deg}deg)`,
          }}
        />
      </IconButton>
      <Typography sx={{ color: "#E7E7EB" }}>WSW</Typography>
    </Stack>
  );
};

export default DynamicArrow;
