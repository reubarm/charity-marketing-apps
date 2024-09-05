"use client";

import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";

interface AdvertProps {
  refresh: any;
}

export const Advert: React.FC<AdvertProps> = ({ refresh }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Replace with Firebase doc
  const refreshAdvert = () => {
    const adverts = isMobile
      ? [
          "https://www.charity.marketing/static/ads/Criskel-320x100.png",
          "https://www.charity.marketing/static/ads/EatStreet-320x100.png",
          "https://www.charity.marketing/static/ads/OceanGolf-320x100.png",
          "https://www.charity.marketing/static/ads/Pandawa-320x100.png",
          "https://www.charity.marketing/static/ads/Rimmba-320x100.png",
        ]
      : [
          "https://www.charity.marketing/static/ads/Criskel-720x90.png",
          "https://www.charity.marketing/static/ads/EatStreet-720x90.png",
          "https://www.charity.marketing/static/ads/OceanGolf-720x90.png",
          "https://www.charity.marketing/static/ads/Pandawa-720x90.png",
          "https://www.charity.marketing/static/ads/Rimmba-720x90.png",
        ];

    // const advertisers = isMobile
    //   ? ["Criskel", "EatStreet", "OceanGolf", "Pandawa", "Rimmba"]
    //   : ["Criskel", "EatStreet", "OceanGolf", "Pandawa", "Rimmba"];

    const advertElement = document.getElementById(
      isMobile ? "advert-320x100" : "advert-728x90"
    );

    if (advertElement) {
      const img = document.createElement("img");
      img.style.width = isMobile ? "320px" : "728px";
      img.style.height = isMobile ? "100px" : "90px";

      const randomIndex = Math.floor(Math.random() * adverts.length);
      img.src = adverts[randomIndex]!;

      // Clear existing advert before appending new one
      advertElement.innerHTML = "";
      advertElement.appendChild(img);
    }
  };

  useEffect(() => {
    refreshAdvert();
  }, [refresh]); 

  return (
    <Stack sx={{ margin: "2rem auto" }} alignItems="center" justifyContent="center">
      <div id={isMobile ? "advert-320x100" : "advert-728x90"} />
    </Stack>
  );
};
