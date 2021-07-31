import styled from "styled-components";

export const Div = styled.div`
  margin: 6rem auto;
  .MuiStepIcon-root {
    //   color: "rgba(0, 0, 0, 0.38)",
    color: transparent;
    border: 2px solid rgb(555, 255, 255);
    border-radius: 50%;
  }
  .MuiStepIcon-root.MuiStepIcon-active {
    color: transparent;
    opacity: "0.4";
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
  }
  .MuiStepIcon-root.MuiStepIcon-completed {
    color: aliceblue;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
  }
  .MuiStepper-alternativeLabel {
    background: transparent;
    margin-top: -6rem;
  }
  .MuiStepConnector-alternativeLabel {
    left: calc(42% + 20px);
    right: calc(50% + 20px);
  }
  .MuiStepLabel-label.MuiStepLabel-alternativeLabel {
    color: #fff;
  }
  .MuiButton-text {
    background: #fff;
    margin-top: 2rem;
    width: 17%;
    padding: 1rem 0;
    /* & .MuiButton-text:hover {
      background: #fff;
    } */
  }
  
    .MuiButtonBase-root:hover {
      background: #fff;
    } 
 
`;
