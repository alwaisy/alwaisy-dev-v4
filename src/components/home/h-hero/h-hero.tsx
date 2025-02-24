"use client";

import { ShootingStars } from "~/components/aceternityui/shooting-stars";
import { StarsBackground } from "~/components/aceternityui/stars-background";
import { Meteors } from "~/components/magicui/meteors";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Container from "~/components/ui/container";

const HomeHero = () => {
  return (
    <Container as="section" className="border-b border-border/10">
      <div className="relative mx-auto h-[595px] max-w-[740px] overflow-hidden border-x border-dashed border-border/10 px-12 py-20 pb-10">
        <button className="btn relative z-10">Contact</button>

        <div className="flex h-min content-center items-center justify-start gap-2 overflow-visible rounded-none p-0">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-accent-foreground">
            Doubled growth in 6 months with Andrew.
          </p>
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
