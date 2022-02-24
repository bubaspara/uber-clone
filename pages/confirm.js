import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const router = useRouter();
  const { pickupLocation, dropoffLocation } = router.query;

  const getPickupCoordinates = (pickupLocation) => {
    console.log("Pickup", pickupLocation);
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setPickupCoordinates(data.features[0].center))
      .catch((err) => console.log(err));
  };

  const getDropoffCoordinates = (dropoffLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoffLocation}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setDropoffCoordinates(data.features[0].center))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPickupCoordinates(pickupLocation);
    getDropoffCoordinates(dropoffLocation);
  }, [pickupLocation, dropoffLocation]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector></RideSelector>
        <ConfirmButton>Confirm</ConfirmButton>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
//Map

//Ride Container
const RideContainer = tw.div`
flex-1
`;

//Ride Selector
const RideSelector = tw.div`

`;

//Confirm Button
const ConfirmButton = tw.div`

`;
const Button = tw.button`

`;
