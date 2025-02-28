"use client";

import { ShootingStars } from "~/components/aceternityui/shooting-stars";
import { StarsBackground } from "~/components/aceternityui/stars-background";
import { Meteors } from "~/components/magicui/meteors";
import { NoSSR } from "~/components/no-ssr";
import TimeDisplay from "~/components/time-display";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Container from "~/components/ui/container";
import { Typography } from "~/components/ui/typography";

const HomeHero = () => {
  return (
    <Container as="section" className="border-b border-border/10">
      <div className="relative mx-auto h-[595px] max-w-[740px] overflow-hidden border-x border-dashed border-border/10 px-12 py-20 pb-10">
        <div className="mb-5 flex h-min content-center items-center justify-start gap-[10px] overflow-visible rounded-none p-0">
          <Avatar className="size-[26px] border border-[#545454]">
            <AvatarImage src="https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg?scale-down-to=512" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-accent-foreground">
            Doubled growth in 6 months with Andrew.
          </p>
        </div>

        <div className="mb-5 max-w-[440px]">
          <Typography as={"h1"} variant={"h1"} weight={"medium"}>
            I’m Andrew, creating tech magic from the pulse of{" "}
            <span className="opacity-60">urban innovation.</span>
          </Typography>
        </div>

        <div className="mb-8 max-w-[332px]">
          <Typography as={"p"} variant={"body-l"} weight={"medium"}>
            I specialize in creating visually stunning designs that leave a
            lasting impression.
          </Typography>
        </div>

        <div className="relative z-10 flex items-center gap-4">
          <button className="btn">Contact</button>
          <NoSSR>
            <TimeDisplay />
          </NoSSR>
        </div>

        {/* background */}
        <ShootingStars />
        <StarsBackground />
        <Meteors />
      </div>
    </Container>
  );
};

export default HomeHero;
