import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const router = useRouter();
  const { pickupLocation, dropoffLocation } = router.query;

  const getPickupCoordinates = (pickupLocation) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLocation}.json?` +
        new URLSearchParams({
          access_token: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => setPickupCoordinates(data.features[0].center))
      .catch((err) => console.error(err));
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
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPickupCoordinates(pickupLocation);
    getDropoffCoordinates(dropoffLocation);
  }, [pickupLocation, dropoffLocation]);

  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>
      {pickupCoordinates && dropoffCoordinates && (
        <>
          <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
          />
          <RideContainer>
            <RideSelector
              pickupCoordinates={pickupCoordinates}
              dropoffCoordinates={dropoffCoordinates}
            />
            <ConfirmButtonContainer>
              <ConfirmButton>Confirm</ConfirmButton>
            </ConfirmButtonContainer>
          </RideContainer>
        </>
      )}
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

//Back Button
const BackButtonContainer = tw.div`
  rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
  h-full object-contain
`;
