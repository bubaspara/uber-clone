import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

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
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;

//Ride Container
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

//Confirm Button
const ConfirmButtonContainer = tw.div`
    border-t-2
`;

const ConfirmButton = tw.div`
    bg-black text-white mx-10 my-4 py-4 text-center text-xl rounded-full
`;
