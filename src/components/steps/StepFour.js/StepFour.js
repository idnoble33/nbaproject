import React from "react";
import { useState } from "react";
import { StepThreeContainer } from "./StepFour.style";

const StepFour = ({ updateSelection, selectedTypicalDrive }) => {
  const featureWanted = [
    { valueType: "Luxury", img: "images/luxury.jpg", alt: "luxury car image" },
    {
      valueType: "Performance",
      img: "images/performance.jpg",
      alt: "performance car image",
    },
    { valueType: "Safety", img: "images/safety.jpg", alt: "safety car image" },
    {
      valueType: "Technology",
      img: "images/technology.jpg",
      alt: "technology car image",
    },
    {
      valueType: "Fuel Efficient",
      img: "images/fuel-efficiency.jpg",
      alt: "luxury car image",
    },
    {
      valueType: "Cargo space",
      img: "images/cargospace.jpg",
      alt: "cargo space car image",
    },
  ];
  const [lastSelectedArea, setLastSelectedArea] = useState(null);
  const updatedSelectedArea = (area) => {
    updateSelection(area.valueType);
    setLastSelectedArea(area.valueType);
  };
  return (
    <StepThreeContainer>
      <header>
        <p> What are your must haves ?</p>
      </header>
      <section>Please select up to 3</section>
      <div className="main">
        {featureWanted.map((value, index) => (
          <div className="category" key={index}>
            <div className="featureImages">
              <img
                src={value.img}
                alt={value.alt}
                onClick={() => updatedSelectedArea(value)}
                className={`${
                  selectedTypicalDrive.includes(value.valueType)
                    ? "selected"
                    : ""
                }`}
              />
            </div>
            <div className="valueLable">{value.valueType}</div>
            <div className="featuresBg">
              {value.valueType === lastSelectedArea &&
                selectedTypicalDrive.length > 0 && (
                  <img src={value.img} alt={value.alt} />
                )}
            </div>
          </div>
        ))}
      </div>
    </StepThreeContainer>
  );
};

export default StepFour;
