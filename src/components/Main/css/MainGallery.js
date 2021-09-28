import styled from "styled-components";

export const ComponentGalley = styled.figure`
  display: flex;

  img {
    width: 25%;
  }

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;

    img {
      width: 50%;
    }
  }
`;
