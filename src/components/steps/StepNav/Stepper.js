import React from "react";
import { useState } from "react";
import StepNavigation from "./StepNavigation";
import { StepperContainer } from "./StepNavigation.style";

const Steppers = () => {
  const labelArray = ["Family", "Fuel", "Category", "Animation"];
  const [currentStep, setUpdateCurrentStep] = useState(1);

  const updateStep = (step) => {
    setUpdateCurrentStep(step);
  };
  return (
    <StepperContainer>
      <StepNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        updateStep={updateStep}
      >
      </StepNavigation>
      <p>Selected Step: {currentStep}</p>
      <button className="primaryButton" onClick={() => updateStep(currentStep - 1)}>Previous Step</button>
      <button className="primaryButton" onClick={() => updateStep(currentStep + 1)}>Previous Step</button>
    </StepperContainer>
  );
};

export default Steppers;
