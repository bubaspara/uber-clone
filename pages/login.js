import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <Title>Log in to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray p-4
`;

//Uber Logo
const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`;

//Title
const Title = tw.div`
    text-5xl pt-4 text-gray-500 
`;

//User Picture
const HeadImage = tw.img`
    object-contain w-full
`;

//Sign In Button
const SignInButton = tw.button`
    bg-black text-white text-center mt-8 py-4 self-center w-full
`;
