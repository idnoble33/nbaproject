import styled from "styled-components";

export const StepThreeContainer = styled.div`
/* margin-top: 5rem; */
  .main {
    /* background: #fff; */
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .category img {
    width: 80%;
    height: 80%;
  }
  .valueLable {
    color: #fff;
    /* margin: 0.7rem; */
  }
  .selected {
    border: 3px solid #fff;
  }
    
    section {
      color: rgb(242, 242, 242);
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      font-size: var(--typography-copy1-fontSize-d4d7a2f8);
      font-family: var(--typography-copy1-fontFamily-d4d7a2f8);
      font-stretch: var(--typography-copy1-fontStretch-d4d7a2f8);
      line-height: var(--typography-copy1-lineHeight-d4d7a2f8);
      -webkit-font-smoothing: antialiased;
      /* margin: 1rem 0; */
    }
    p {
      margin: 0px;
      color: rgb(255, 255, 255);
      font-weight: 400;
      font-style: normal;
      letter-spacing: -0.015em;
      text-decoration: none;
      font-size: var(--typography-order1-fontSize-d4d7a2f8);
      font-family: var(--typography-order1-fontFamily-d4d7a2f8);
      font-stretch: var(--typography-order1-fontStretch-d4d7a2f8);
      line-height: var(--typography-order1-lineHeight-d4d7a2f8);
      -webkit-font-smoothing: antialiased;
      font-size: 3rem;
    }
    .featuresBg {
    position: cover;
    top: -50%;
    left: -50%;
    /* height: 200%; */
  } 
    .featuresBg img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      /* min-width: 100%;
      min-height: 100%; */
      width: 100%;
      height: 100%;
      z-index: -1;
      background-position: center center;
      background-size: cover;
      background-attachment: fixed;
      filter: brightness(30%);
      overflow: none;
    }
`;
