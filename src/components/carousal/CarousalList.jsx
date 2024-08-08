'use client'
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CarousalLists = ({ images }) => {
  return (
    <AutoplaySlider
      animation="fallAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2000}
      className="h-full"
    >
      {images.map((item, index) => (
        <div key={index}>
          <img src={item} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default CarousalLists;
