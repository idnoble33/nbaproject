import React from "react";
import { StepContainer } from "./StepNavigation.style";

const Step = (props) => {
  return (
    <StepContainer>
      <div className={"stepBlock"  +  (props.selected  ?  " selected" : " ")}>
      <div className={"circleWrapper"} onClick={() => props.updateStep(props.index + 1)}>
        <div className="circle">{props.index + 1}</div>
      </div>
      <span>{props.label}</span>
      </div>
    </StepContainer>
  );
};

export default Step;
