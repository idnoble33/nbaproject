import React, { useState } from "react";
import { Main, Section, Button, ImageDiv } from "./Steps.style";

const StepOne = ({ updateSelection, selectedTypicalDrive }) => {
  const driveArea = [
    { value: "city", img: "images/city.jpg", alt: "city-car-image" },
    { value: "highway", img: "images/highway.jpg", alt: "highway-car-image" },
    { value: "offroad", img: "images/offroad.jpg", alt: "offroad-car-image" },
  ];
  const [lastSelectedArea, setLastSelectedArea] = useState(null);

  const updatedSelectedArea = (area) => {
    updateSelection(area.value);
    setLastSelectedArea(area.value);
  };
  return (
    <div>
      <Main>
        <header>
          <p> Where Do you typically drive</p>
        </header>
        <Section>Please select up to 3</Section>
        <div>
          {driveArea.map((area, index) => (
            <ImageDiv className="bg" key={index}>
              <Button
                textColor="white"
                onClick={() => updatedSelectedArea(area)}
                className={`${
                  selectedTypicalDrive.includes(area.value) ? "selected" : ""
                }`}
              >
                {area.value}
              </Button>
              {area.value === lastSelectedArea &&
                selectedTypicalDrive.length > 0 && (
                  <img src={area.img} alt={area.alt} />
                )}
            </ImageDiv>
          ))}
        </div>
      </Main>
    </div>
  );
};

export default StepOne;
