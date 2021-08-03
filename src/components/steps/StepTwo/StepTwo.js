import * as React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { MainDiv } from "./StepTwo.style";
import { useState } from "react";

const marks = [
  { value: 2, img: "images/twoSeaters.jpg", label: "2 seats" },
  { value: 50, img: "images/fiveSeaters.jpg", label: "5 seats" },
  { value: 100, img: "images/sevenSeaters.jpg", label: "7 seats" },
];
const StepTwo = ({ updateSelection, selectedTypicalDrive }) => {
  const [lastSelectedArea, setLastSelectedArea] = useState(null);



  // const updatedSelectedArea = (area) => {
  //   console.log(updateSelection)
  //   console.log(selectedTypicalDrive)

  //   updateSelection(area.value);
  //   setLastSelectedArea(area.value);
  // };
  function valueText(value) {
    return `${value}`;
  }
  const valueLabelFormat = (value) => {
    return marks.findIndex((mark) => mark.value === value);
  };
  

  return (
    <MainDiv>
      <Box>
        <Slider
          aria-label="restricted values"
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valueText}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
        {marks.map((mark, markIndex) => (
          <div key={markIndex}>
            {mark.value === lastSelectedArea &&
              selectedTypicalDrive.length > 0 && (
                <img src={mark.img} alt={mark.alt} />
              )}
          </div>
        ))}
      </Box>
    </MainDiv>
  );
};
export default StepTwo;

// function valueText(value) {
//   return `${value}`
// }
// const valueLabelFormat = (value) => {
//  return marks.findIndex((mark) => mark.value === value) + 1
// }
// const StepTwo = () => {
//   return (

//     <MainDiv>
//       <Box sx={{ width: 300, marginLeft: 50}}>
//         <Slider
//           aria-label="restricted values"
//           defaultValue={0}
//           valueLabelFormat={valueLabelFormat}
//           getAriaValueText={valueText}
//           step={null}
//           valueLabelDisplay="auto"
//           marks={marks}
//         />
//       </Box>
//     </MainDiv>
//   )
// }
