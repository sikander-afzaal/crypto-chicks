import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Team.css";
import teamImg from "../../../Assets/team/team1.webp";
import teamNft from "../../../Assets/team/team-nft.webp";
import TeamBox from "../../../Components/TeamBox/TeamBox";
function Team() {
  return (
    <div className="team">
      <h2 className="kanit section-heading">Team</h2>
      <div className="coo-row">
        <div className="coo-div">
          <div className="coo__img-div">
            <img src={teamImg} alt="" className="team-img" />
            <img src={teamNft} alt="" className="team-nft" />
          </div>
          <div className="top-desc">
            <div>
              <h2 className="kanit">Elissa Maercklein</h2>
              <p className="futura title">CEO and CMO</p>
            </div>

            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>

          <p className="coo-desc futura">
            I grew up in the Midwest in the US and have spent the past few years
            in the Bay Area. I now live in Seattle, Washington. Prior to CC, I
            built a startup leading our Business Operations and then co-founded
            a software startup where I led as CEO.​ I’m a dog mom who loves all
            outdoor activities - hiking, biking, skiing, and swimming (to name a
            few). You can often find me traveling to explore new areas of the
            country and world. I’m passionate about bringing more women into
            tech, crypto, and NFTs 💜
          </p>
        </div>
        <div className="coo-div">
          <div className="coo__img-div">
            <img src={teamImg} alt="" className="team-img" />
            <img src={teamNft} alt="" className="team-nft" />
          </div>
          <div className="top-desc">
            <div>
              <h2 className="kanit">Elissa Maercklein</h2>
              <p className="futura title">CEO and CMO</p>
            </div>

            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>

          <p className="coo-desc futura">
            I grew up in the Midwest in the US and have spent the past few years
            in the Bay Area. I now live in Seattle, Washington. Prior to CC, I
            built a startup leading our Business Operations and then co-founded
            a software startup where I led as CEO.​ I’m a dog mom who loves all
            outdoor activities - hiking, biking, skiing, and swimming (to name a
            few). You can often find me traveling to explore new areas of the
            country and world. I’m passionate about bringing more women into
            tech, crypto, and NFTs 💜
          </p>
        </div>
      </div>
      <div className="team-grid">
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
            drag: true,
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
      </div>

      {/* <div className="mod-container">
        <h1 className="futura">Mod Squad</h1>
        <div className="mod-row">
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div className="mod-div">
            <img src={teamNft} alt="" className="team-nft" />
            <h2 lassName="futura">Jodes</h2>
            <div className="social-team">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Team;
