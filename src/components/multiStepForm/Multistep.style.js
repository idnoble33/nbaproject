import styled from "styled-components";

export const Div = styled.div`
  /* margin: 6rem auto; */
  color: #fff;
  .circle{
    width: 29px;
    height: 29px;
    line-height: 25px;
    background-color: transparent;
    color: white;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer; 
}
.stepWrapper{
    display: flex;
    padding-right: 0 20px;
}
  .MuiStepIcon-root {
    color: transparent;
    border: 2px solid rgb(115 115 115);
    border-radius: 50%;
  }
  .MuiStepIcon-root.MuiStepIcon-active {
    color: transparent;
    border: 2px solid rgb(555, 255, 255);
    /* opacity: "0.4"; */ 
    border-radius: 50%;
  }
  
  .MuiStepIcon-root.MuiStepIcon-completed {
     color: aliceblue;
    /*border: 2px solid rgb(255, 255, 255);
    border-radius: 50%; */
  }
  .MuiStepper-alternativeLabel {
    background: transparent;
    /* margin-top: -6rem; */
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
    /* padding: 1rem 0; */
  }
  
    .MuiButtonBase-root:hover {
      background: #fff;
    } 
 
`;
