import React, { useState } from "react";
import { StepTwoContainer, ImageDiv } from "./StepTwo.style";

const StepTwo = ({ updateSelection, selectedTypicalDrive }) => {
  const fuelPriority = [
    {
      value: "Very important",
      img: "images/veryimportant.jpg",
      alt: "veryimportant-car-image",
    },
    {
      value: "Somewhat Important",
      img: "images/somewhatimportant.jpg",
      alt: "somewhatimportant-car-image",
    },
    {
      value: "Not Important",
      img: "images/notimportant.jpg",
      alt: "city-car-image",
    },
  ];
  const [lastSelectedArea, setLastSelectedArea] = useState(null);

  const updatedSelectedArea = (area) => {
    updateSelection(area.value);
    setLastSelectedArea(area.value);
  };
  return (
    <div>
      <StepTwoContainer className="StepTwoContainer">
        <div>
          <section>A fuel-efficient Vehicle is</section>
        </div>
        <div>
          {fuelPriority.map((fuel, fuelIndex) => (
            <ImageDiv key={fuelIndex}>
              <button
                onClick={() => updatedSelectedArea(fuel)}
                className={`${
                  selectedTypicalDrive.includes(fuel.value) ? "selected" : ""
                }`}
              >
                {fuel.value}
              </button>
              {fuel.value === lastSelectedArea &&
                selectedTypicalDrive.length > 0 && <img src={fuel.img} alt={fuel.alt} />}
            </ImageDiv>
          ))}
        </div>
      </StepTwoContainer>
    </div>
  );
};

export default StepTwo;
