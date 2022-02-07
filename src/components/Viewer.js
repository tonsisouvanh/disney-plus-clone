import React from "react";
import styled from "styled-components";


const Viewer = () => {
  return (
    <>
      <Container>
        <ViewCard>
          <img src="/images/viewers-disney.png"></img>
          <video autoPlay muted loop>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </ViewCard>
        <ViewCard>
          <img src="/images/viewers-pixar.png"></img>
          <video autoPlay muted loop>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
        </ViewCard>
        <ViewCard>
          <img src="/images/viewers-starwars.png"></img>
          <video autoPlay muted loop>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </ViewCard>
        <ViewCard>
          <img src="/images/viewers-national.png"></img>
          <video autoPlay muted loop>
            <source
              src="/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </ViewCard>
        <ViewCard>
          <img src="/images/viewers-marvel.png"></img>
          <video autoPlay muted loop>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </ViewCard>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  margin: 2rem 0 0 0;
  padding: 1rem 0 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
`;

const ViewCard = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 0.4rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms ease;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    visibility: hidden;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      visibility: visible;
    }
  }
`;

export default Viewer;
