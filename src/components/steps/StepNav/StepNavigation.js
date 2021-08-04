import React from "react";
import Step from "./Step";
import { stepNavigationWrapper } from "./StepNavigation.style";
import "./nav.css"
const StepNavigation = (props) => {
  return (
     <stepNavigationWrapper>
      <div className="stepWrapper">
        {props.labelArray.map((item, index) => (
          <Step
            key={index}
            index={index}
            label={item}
            selected={props.currentStep === index + 1}
            updateStep={props.updateStep}
          >
          </Step>
        ))}
      </div>
     </stepNavigationWrapper>
  );
};

export default StepNavigation;
