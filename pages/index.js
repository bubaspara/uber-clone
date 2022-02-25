import Map from "./components/Map";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) setUser({ name: user.displayName, photoUrl: user.photoURL });
      else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
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
  h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
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
