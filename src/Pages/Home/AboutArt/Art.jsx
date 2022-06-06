import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import TeamBox from "../../../Components/TeamBox/TeamBox";
import teamNft from "../../../Assets/team/team-nft.webp";
import "./Art.css";
import { Fade } from "react-awesome-reveal";
function Art() {
  return (
    <div className="art">
      <Fade
        fraction={0}
        triggerOnce
        direction="down"
        duration={500}
        delay={200}
      >
        <h2 className="kanit section-heading">About The Art</h2>
      </Fade>
      <Splide
        options={{
          width: "100%",
          autoplay: true,
          arrows: true,
          pagination: false,
          perPage: 2,
          perMove: 1,
          gap: "1rem",
          type: "loop",
          interval: 5000,
          speed: 4000,
          pauseOnHover: true,
          drag: false,
          breakpoints: {
            788: {
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
        <SplideSlide>
          <TeamBox
            img={teamNft}
            desc={
              "Philly has been my hometown for many years now (go Birds). My professional background is in product development, design, and production. I later became a consultant for business development with a focus on implementing scaling strategies specifically for small businesses through tech, customer service and engagement. In other news, Satoshi Nakamoto was my first love. Initially I was drawn to the shared community ethos for a decentralized, nationless currency. Fast forward to 2021 and curiosity brought me to NFTs. I’m here to share ideas, brainstorm elaborate plans, collaborate, and have fun building cool shit. Also, is my dog invited?"
            }
            name={"Esther"}
            title={"Head of Growth"}
          />
        </SplideSlide>
      </Splide>
      <Fade triggerOnce direction="up" duration={500} delay={700}>
        <p className="lulu art-desc">
          VC villaflores has drawn a total of 178 traits to ensure that each and
          every sister is unique and beautiful, these traits are divided in to
          12 categories ( Type, Eyes, Mouth, Hair, Head item, Accessories,
          Clothes, Earrings, 3rd Eye (rare), Costume (rare), necklace, nose
          piercing, backgrounds.
        </p>
      </Fade>
    </div>
  );
}

export default Art;
