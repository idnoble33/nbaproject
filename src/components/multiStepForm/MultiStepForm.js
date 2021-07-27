import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  root: {
    // width: "50vw",
    margin: "6rem auto",
    // border: "1px solid #999",
    "& .MuiStepIcon-root": {
      //   color: "rgba(0, 0, 0, 0.38)",
      color: "transparent",
      border: "2px solid rgb(555,255,255)",
      borderRadius: "50%",
    },
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "transparent",
      // opacity: "0.4",
      border: "2px solid rgb(255, 255, 255)",
      borderRadius: "50%",
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "aliceblue",
      border: "2px solid rgb(255, 255, 255)",
      borderRadius: "50%",
    },
    "& .MuiStepper-alternativeLabel": {
      background: "transparent",
      marginTop: "-6rem",
    },
    "& .MuiStepConnector-alternativeLabel": {
      left: "calc(42% + 20px)",
      right: "calc(50% + 20px)",
    },
    "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
      color: "#fff",
    },
    "& .MuiButton-text": {
      /* padding: 6px 8px; */
      backgroundColor: "#fff",
      marginTop: "2rem",
      width: "9%",
      padding: "1rem 0",
    },
  },
});

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, labelIndex) => (
          <Step key={label}>
            <StepLabel onClick={() => setActiveStep(labelIndex)}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
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
    </div>
  );
};
export default MultiStepForm;
