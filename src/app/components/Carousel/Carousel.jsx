"use client";
import React, { useRef, useState } from "react";
import Card from "../Card/Card";
import leftArrow from "../../Images/leftArrow.svg";
import rightArrow from "../../Images/rightArrow.svg";
import Frontend from "../Card/CardInfo/InfoFrontend";
import Backend from "../Card/CardInfo/InfoBackend";
import DevOps from "../Card/CardInfo/InfoDevOps";
import HR from "../Card/CardInfo/InfoHR";
import QA from "../Card/CardInfo/InfoQA";
import ResearchAnalyst from "../Card/CardInfo/InfoResearchAnalyst";
import UI from "../Card/CardInfo/InfoUI";
import darkDot from "../../Images/darkDot.svg";
import lightDot from "../../Images/lightDot.svg";

import "./styles/carousel.css";
import Image from "next/image";

function Carousel() {
  const [option, setOption] = useState(0);
  const [dot, setDot] = useState(0);
  const scrolll = useRef(null);
  const handleHeadingLeft = () => {
    setOption((prev) => (prev - 1) % 5);
  };

  const handleHeadingRight = () => {
    setOption((prev) => (prev + 1) % 5);
  };

  const scrollLeft = () => {
    scrolll.current.scrollBy({
      left: -window.innerWidth,
      behaviour: "smooth",
    });
  };
  const scrollRight = () => {
    scrolll.current.scrollBy({
      left: window.innerWidth,
      behaviour: "smooth",
    });
  };
  return (
    <>
      <h1 className="mainHeading">
        Profile We Train<div className="underline"></div>
      </h1>
      <div className="chooseHeading">10+ Profiles for you to choose from</div>

      <div className="header">
        {option != 1 && option != 0 ? (
          <Image
            onClick={handleHeadingLeft}
            className="arrow2 left2"
            src={leftArrow}
            alt="leftArrow"
          />
        ) : (
          <div className="arrow2"></div>
        )}

        <div
          className={`headerOption ${option === 1 ? "active" : ""}`}
          onClick={() => {
            setOption(1);
          }}
        >
          Developers
          <div className={`${option === 1 ? "underline" : ""}`}></div>
        </div>
        <div
          className={`headerOption ${option === 2 ? "active" : ""}`}
          onClick={() => {
            setOption(2);
          }}
        >
          Designers
          <div className={`${option === 2 ? "underline" : ""}`}></div>
        </div>
        <div
          className={`headerOption ${option === 3 ? "active" : ""}`}
          onClick={() => {
            setOption(3);
          }}
        >
          Operations
          <div className={`${option === 3 ? "underline" : ""}`}></div>
        </div>
        <div
          className={`headerOption ${option === 4 ? "active" : ""}`}
          onClick={() => {
            setOption(4);
          }}
        >
          Growth
          <div className={`${option === 4 ? "underline" : ""}`}></div>
        </div>
        {option != 4 ? (
          <Image
            onClick={handleHeadingRight}
            className="arrow2 right2"
            src={rightArrow}
            alt="rightArrow"
          />
        ) : (
          <div className="arrow2"></div>
        )}
      </div>

      <div className="carousel">
        {/* Arrow button left */}

        <button className="arrow left">
          <Image onClick={scrollLeft} src={leftArrow} alt="leftArrow" />
        </button>

        {/* main carousel */}
        <div className="cardSlider" ref={scrolll}>
          {option === 1 || option === 0 ? (
            <>
              <Card info={Frontend} />
              <Card info={Backend} />
              <Card info={Frontend} />
              <Card info={Backend} />
              <Card info={Frontend} />
              <Card info={Backend} styles={0} />
            </>
          ) : undefined}
          {option === 2 ? (
            <>
              <Card info={UI} />
              <Card info={UI} />
              <Card info={UI} />
              <Card info={UI} />
              <Card info={UI} />
              <Card info={UI} styles={0} />
            </>
          ) : undefined}
          {option === 3 ? (
            <>
              <Card info={DevOps} />
              <Card info={QA} />
              <Card info={DevOps} />
              <Card info={QA} />
              <Card info={DevOps} />
              <Card info={QA} styles={0} />
            </>
          ) : undefined}
          {option === 4 ? (
            <>
              <Card info={HR} />
              <Card info={ResearchAnalyst} />
              <Card info={HR} />
              <Card info={ResearchAnalyst} />
              <Card info={HR} />
              <Card info={ResearchAnalyst} styles={0} />
            </>
          ) : undefined}
        </div>
        {/* Arrow button right */}

        <button onClick={scrollRight} className="arrow right">
          <Image src={rightArrow} alt="rightArrow" />
        </button>
      </div>

      <div className="dotContainer">
        <Image
          onClick={() => {
            setDot(-2);
          }}
          className="dot"
          src={dot == -2 ? darkDot : lightDot}
          alt={dot == -2 ? "darkDot" : "lightDot"}
        />
        <Image
          onClick={() => {
            setDot(1);
          }}
          className="dot"
          src={dot == 1 ? darkDot : lightDot}
          alt={dot == 1 ? "darkDot" : "lightDot"}
        />
        <Image
          onClick={() => {
            setDot(2);
          }}
          className="dot"
          src={dot == 2 ? darkDot : lightDot}
          alt={dot == 2 ? "darkDot" : "lightDot"}
        />
      </div>
    </>
  );
}

export default Carousel;
