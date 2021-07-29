import React, { useState } from "react";
import { Div } from "./Multistep.style";
import {
  Stepper,
  Step,
  StepLabel,
  // Typography,
  Button,
} from "@material-ui/core";
import StepOne from "../steps/stepOne/StepOne";
import StepFour from "../steps/StepFour/StepFour";
import StepTwo from "../steps/StepTwo/StepTwo";
import StepThree from "../steps/StepThree.js/StepThree";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTypicalDrive, setSelectedTypicalDrive] = useState([]);

  const updateSelectedTypicalDrive = (area) => {
    const isFound = selectedTypicalDrive.find((x) => x === area);
    if (isFound) {
      setSelectedTypicalDrive([
        ...selectedTypicalDrive.filter((x) => x !== area),
      ]);
    } else {
      setSelectedTypicalDrive([...selectedTypicalDrive, area]);
    }
  };

  function getSteps() {
    return ["Family", "Fuel", "Category", "Animation"];
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const steps = getSteps();

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne
            updateSelection={updateSelectedTypicalDrive}
            selectedTypicalDrive={selectedTypicalDrive}
          />
        );
      case 1:
        return (
          <StepTwo
            updateSelection={updateSelectedTypicalDrive}
            selectedTypicalDrive={selectedTypicalDrive}
          />
        );
      case 2:
        return (
          <StepThree
            updateSelection={updateSelectedTypicalDrive}
            selectedTypicalDrive={selectedTypicalDrive}
          />
        );
      case 3:
        return <StepFour />;
      default:
        return "unknown Step";
    }
  }
  // const classes = useStyles();
  return (
    <Div>
      {activeStep < steps.length - 1 && (
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, labelIndex) => (
            <Step key={label}>
              <StepLabel onClick={() => setActiveStep(labelIndex)}>
                {activeStep < steps.length - 1 ? label : null}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
      {activeStep === steps.length ? (
        "The step completed"
      ) : (
        <>
          {getStepsContent(activeStep)}
          <Button onClick={handleNext}>
            {activeStep === steps.length ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </Div>
  );
};
export default MultiStepForm;
