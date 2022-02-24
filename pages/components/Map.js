import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  const addMarkers = (map, coordinates) => {
    const pickupMarker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [43.508133, 16.440193],
      zoom: 3,
    });

    if (pickupCoordinates) addMarkers(map, pickupCoordinates);

    if (dropoffCoordinates) addMarkers(map, dropoffCoordinates);

    if (pickupCoordinates && dropoffCoordinates)
      map.fitBounds([pickupCoordinates, dropoffCoordinates], { padding: 60 });
  }, [pickupCoordinates, dropoffCoordinates]);

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
    flex-1 
`;

export default Map;
