import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaXZhbm9qb3Zhbm8iLCJhIjoiY2t6emg2OHIyMDl3MzNrbmEwZGprNDN3YSJ9.S9qObPYPiw2_MZnZt2Wr6w";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [43.508133, 16.440193],
      zoom: 3,
    });
  }, []);

  return <Wrapper id="map">MAP</Wrapper>;
};

const Wrapper = tw.div`
    flex-1 
`;

export default Map;
