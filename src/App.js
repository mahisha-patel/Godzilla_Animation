//Before importing styled-components, you've to install it.
//Install it using: npm i styled-components


//import section
import React from 'react';
import background from './background.jpg'
import mountains from './mountain.svg'
import godzilla from './godzilla.png'
import styled, { keyframes } 
  from "styled-components";

//ImageWrapper is a div which holds every other components
//and the background image.
const ImageWrapper = styled.div`
  bottom: 0px;
`;

//Image is the background image.
const Image = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;  
`;

//Mountains is the image of mountain.
const Mountains = styled.img`
  width: 122%;
  left: -120px;
  position: absolute;
  bottom: -230px;
`;

//mountainFrame defines the keyframes of the mountain
//which will shake when the godzilla will walk.
const mountainFrame = keyframes`
  0% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(5px);
  }  
  80% {
    transform: translateY(-5px);
  }
  90% {
    transform: translateY(0);
  }
`;


//MountainWrapper is a div which holds mountain image
//and animate it using mountainFrame.
const MountainWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  animation: ${mountainFrame} 1s infinite;
`;


//godzillaWalk defines the walking of Godzilla
//throughout the screen.
const godzillaWalk = keyframes`
  100% {
    transform: translateX(1670px);
  }
`;


//GodzillaWrapper is a div which holds godzilla
//image and animate it using godzillaWalk.
const GodzillaWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: -400px;
  bottom: -40px;
  animation: ${godzillaWalk} 20s infinite linear;
`;


//godzillaJump defines the movement of godzilla
//when it moves forward.
const godzillaJump = keyframes`
  0% {
    transfrom: rotate(0);
  }
  60% {
    transform: translateY(-12px) rotate(-6deg);
  }
  70% {
    transform: rotate(0);
  }
`;


//Godzilla shows godzilla image and applies 
//godzillaJump on the image.
const Godzilla = styled.img`
  width: 440px;
  animation: ${godzillaJump} 1s infinite;
`;


const GodzillaComponent = () => (
  <div>
  <ImageWrapper>
    <Image src={background} />
    <MountainWrapper>
    <Mountains src={mountains} />
    </MountainWrapper>
    <GodzillaWrapper>
      <Godzilla src={godzilla} />
    </GodzillaWrapper>
  </ImageWrapper>
  </div>
);

export default GodzillaComponent;

