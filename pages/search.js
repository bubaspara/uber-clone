import React from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src=" https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <ConfirmButton>
        <Button>Confirm</Button>
      </ConfirmButton>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;

//Back Button
const ButtonContainer = tw.div`
    bg-white px-4
`;

const BackButton = tw.img`
    cursor-pointer h-12
`;

//Input Container
const InputContainer = tw.div`
    bg-white flex items-center px-4  
`;

//Little Icons
const FromToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;

const Circle = tw.img`
    h-2.5 
`;

const Line = tw.img`
    h-10 
`;

const Square = tw.img`
    h-3 
`;

//Inputs
const InputBoxes = tw.div`
    flex flex-col flex-1 
`;

const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

//Plus Icon
const PlusIcon = tw.img`
    bg-gray-200 w-10 h-10 rounded-full ml-3 
`;

//Saved Places
const SavedPlaces = tw.div`
    bg-white flex items-center px-4 py-2
`;

const StarIcon = tw.img`
    bg-gray-400 rounded-full w-10 h-10 p-2 mr-2
`;

//Confirm Button
const ConfirmButton = tw.div`
    bg-black text-center text-white mx-20 my-2 px-4 py-1 text-2xl cursor-pointer rounded-full
`;

const Button = tw.button`
    
`;
