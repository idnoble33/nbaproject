import React, { useState } from "react";
import { Main, Section, Button, ImageDiv } from "./Steps.style";

const StepOne = () => {
  const [city, setCity] = useState(false);
  const [highway, setHighway] = useState(false);
  const [offway, setOffway] = useState(false);

  const toggleCity = () => setCity(!city);
  const toggleHighway = () => setHighway(!highway);
  const toggleOffway = () => setOffway(!offway);

  return (
    <Main>
      <header>
        <p> Where Do you typically drive</p>
      </header>
      <Section>Please select up to 3</Section>

      <div>
        <ImageDiv className="bg">
          <Button
            textColor="white"
            onClick={toggleCity}
            src=""
            alt="city-car-image"
          >
            City
          </Button>
          {/* {city && <img src="https://www.audi.ca/dam/nemo/ca/Models/a5/a5-coupe/MY2020/compressed/1920x1080/1920x1080_A1911824_large-edited-4-min.jpg" />} */}
          {city && <img src="images/city.jpg" alt="city"/>}
        </ImageDiv>
        <ImageDiv className="bg">
          <Button onClick={toggleHighway} src="" alt="Highway-car-image">
            Highway
          </Button>
          {/* {highway && <img src="https://www.audi.ca/dam/nemo/ca/Models/a5/a5-coupe/MY2020/compressed/1920x1080/1920x1080_A1911824_large-edited-4-min.jpg" />} */}
          {highway && <img src="images/highway.jpg" alt="highway"/>}

        </ImageDiv>
        <ImageDiv>
          <Button onClick={toggleOffway} src="" alt="off-road-car-image">
            Off-road
          </Button>
          {/* {offway && <img src="https://www.audi.ca/dam/nemo/ca/Models/a5/a5-cabriolet/MY2020/compressed/730x730/730x730_A1911775_large-min.jpg" />} */}
          {offway && <img src="images/offroad.jpg" alt="offway"/>}
        </ImageDiv>
      </div>
    </Main>
  );
};
export default StepOne;
