import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  // HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Lorem ipsum dolor sit amet</MainHeading>
        <HeroText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </HeroText>
        <ButtonWrapper>
          <Link to="menu">
            <Button>Lorem</Button>
          </Link>
          <Button>Lorem</Button>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
