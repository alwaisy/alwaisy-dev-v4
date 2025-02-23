"use client";

import { ShootingStars } from "~/components/aceternityui/shooting-stars";
import { StarsBackground } from "~/components/aceternityui/stars-background";
import { Meteors } from "~/components/magicui/meteors";
import Container from "~/components/ui/container";

const HomeHero = () => {
  return (
    <Container
      as="section"
      className="relative flex h-[40rem] flex-col items-center overflow-hidden rounded-md bg-neutral-900"
    >
      <h2 className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-2 bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:flex-row md:gap-8 md:text-5xl md:leading-tight">
        <span>Shooting Star</span>
        <span className="text-lg font-thin text-white">x</span>
        <span>Star Background</span>
      </h2>
      <ShootingStars />
      <StarsBackground />
      <Meteors />

      <button className="btn z-10">Contact</button>
    </Container>
  );
};

export default HomeHero;
