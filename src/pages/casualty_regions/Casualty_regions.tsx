import React, { useEffect, useState } from "react";
import useFetch from "../../componnets/hooks/UseFetch";
import MapComponent from "../../componnets/map/Map";
import CasualtyMap from "../../componnets/map/Map";
import { Box, Stack } from "@mui/material";

// interface ILocition {
//   id: string;
//   lat: number;
//   lng: number;
//   name: string;
//   year: number;
//   attacktype1_txt: string;
//   targtype1_txt: string;
//   target1: string;
//   city: string;
// }

export const Casualty_regions = () => {
  const { GET, data } = useFetch("http://localhost:3001/terror");

  const [locations, setlocations] = useState();

  useEffect(() => {
    GET("highest-casualty-regions");
  }, []);

  useEffect(() => {
    if (data) {
      console.log("Data from API:", data);
      setlocations(data);
    }
  }, [data]);

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
        width: 900,
        margin: 20,
      }}
    >
      {locations && <CasualtyMap data={locations} />}
    </Stack>
  );
};
