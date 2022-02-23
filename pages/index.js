import Map from "./components/Map";
import tw from "tailwind-styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Name</Name>
            <UserImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

//Wrapper
const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;

//Header
const Header = tw.div`
flex flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28
`;

const Profile = tw.div`
  flex items-center 
`;

const Name = tw.div`
  mr-4 w-20
`;

const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`;

//Action Buttons
const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 cursor-pointer transition text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

//Input Button
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center rounded-lg mt-8
`;
