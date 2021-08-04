import styled from "styled-components";

export const stepNavigationWrapper = styled.div`
.stpWrap{
    display: flex;
}
/* .stepWrapper{
    display: flex;
} */
`
export const StepperContainer = styled.div`
/* display: flex; */
background: #000;
color: #fff;
.primaryButton{
    padding: 10px 25px;
    border: none;
    margin: 10px;
    cursor: pointer;
}
`


export const StepContainer = styled.div`
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
.stepBlock .circleWrapper{
padding: 0px 20px;
position: relative;
}
.selected .circle {
color: red;
background: blue;
}

`

