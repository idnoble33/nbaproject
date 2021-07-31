import styled from "styled-components";

export const Main = styled.main`
  margin-top: 2rem;

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

    /* span {
        margin: 0px;
        color: rgb(255, 255, 255);
        color: rgb(242, 242, 242);
        font-weight: 400;
        font-style: normal;
        text-decoration: none;
        font-size: var(--typography-copy1-fontSize-d4d7a2f8);
        font-family: var(--typography-copy1-fontFamily-d4d7a2f8);
        font-stretch: var(--typography-copy1-fontStretch-d4d7a2f8);
        line-height: var(--typography-copy1-lineHeight-d4d7a2f8);
        -webkit-font-smoothing: antialiased;
      } */
  }
`;

export const Section = styled.section`
  /* margin: 3rem; */
  color: rgb(242, 242, 242);
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  font-size: var(--typography-copy1-fontSize-d4d7a2f8);
  font-family: var(--typography-copy1-fontFamily-d4d7a2f8);
  font-stretch: var(--typography-copy1-fontStretch-d4d7a2f8);
  line-height: var(--typography-copy1-lineHeight-d4d7a2f8);
  -webkit-font-smoothing: antialiased;
  margin: 1rem 0;
`;
export const Button = styled.button`
  background-color: rgb(79, 79, 79);
  /* color: ${(props) => props.textColor}; */
  color: rgb(242, 242, 242);
  font-weight: 400;
  border: none;
  height: 90px;
  outline: none;
  padding: 28px 24px;
  width: 319px;
  margin: 0.5rem;
  cursor: pointer;
  font-size: var(--typography-copy1-fontSize-d4d7a2f8);
  font-family: var(--typography-copy1-fontFamily-d4d7a2f8);
  font-stretch: var(--typography-copy1-fontStretch-d4d7a2f8);
  line-height: var(--typography-copy1-lineHeight-d4d7a2f8);
`;

export const ImageDiv = styled.div`
  position: cover;
  top: -50%;
  left: -50%;
  /* width: 200%; */
  height: 200%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* min-width: 50%;
    min-height: 50%; */
    width: 100%;
      height: 100%;
    z-index: -1;
    background-position: center center;
      background-size: cover;
      background-attachment: fixed;
      overflow: none;
    filter:brightness(40%);
  }
  .selected {
    border: 2px solid #fff;
  }
`;

