import React from "react";

import HeavyCloud from "/src/assets/HeavyCloud.png?url";
import Clear from "/src/assets/Clear.png?url";
import Hail from "/src/assets/Hail.png?url";
import HeavyRain from "/src/assets/HeavyRain.png?url";
import LightRain from "/src/assets/LightRain.png?url";
import LightCloud from "/src/assets/LightCloud.png?url";
import Shower from "/src/assets/Shower.png?url";
import Snow from "/src/assets/Snow.png?url";
import Thunderstorm from "/src/assets/Thunderstorm.png?url";
import Sleet from "/src/assets/Sleet.png?url";

import {Stack} from "@mui/material"

export type WeatherImageProps = {
  image: string;
  width?: string;
};

const WeatherImage: React.FC<WeatherImageProps> = ({ image, width }) => {
  return (
    <Stack>
      {image === "Clouds" && <img src={HeavyCloud} alt="" width={width} />}
      {image === "Rain" && <img src={HeavyRain} alt="" width={width} />}
      {image === "Haze" && <img src={LightCloud} alt="" width={width} />}
      {image === "Clear" && <img src={Clear} alt="" width={width} />}
      {image === "Hail" && <img src={Hail} alt="" width={width} />}
      {image === "Shower" && <img src={Shower} alt="" width={width} />}
      {image === "Snow" && <img src={Snow} alt="" width={width} />}
      {image === "Thunderstorm" && (
        <img src={Thunderstorm} alt="" width={width} />
      )}
      {image === "Sleet" && <img src={Sleet} alt="" />}
      {image === "Light Rain" && <img src={LightRain} alt="" width={width} />}
      {image === "Mist" && <img src={HeavyCloud} alt="" width={width} />}
    </Stack>
  );
};

export default WeatherImage;
