import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <img src="/images/slider-badging.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-badag.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-scale.jpg" alt=""></img>
        </Wrap>
        <Wrap>
          <img src="/images/slider-scales.jpg" alt=""></img>
        </Wrap>
      </Carousel>
    </>
  );
};

const Carousel = styled(Slider)`
  margin-top: 6rem;
  .slick-prev:before,
  .slick-next:before {
    font-size: 2rem;
    display: none;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
    position: relative;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    transition-duration: 500ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

export default ImageSlider;
