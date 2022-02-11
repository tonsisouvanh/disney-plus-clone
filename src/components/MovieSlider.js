/*********************************** USE SLIDER SLICK ************************************/
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function PrevArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowBackIosIcon style={{ color: "white" }}></ArrowBackIosIcon>
    </div>
  );
}

function NextArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon style={{ color: "white" }}></ArrowForwardIosIcon>
    </div>
  );
}

const MovieSlider = () => {
  const settings = {
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 5,
    // slidesToScroll: 3,
    // initialSlide: 0,

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrowButton />,
    nextArrow: <NextArrowButton />,
  };

  return (
    <>
      <MovieContainer>
        <Carousel {...settings}>
          <Wrap>
            <img src="/images/movie-ironman1.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-ironman2.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-ironman3.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-mandalorian.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-thelastjedai.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
        </Carousel>
      </MovieContainer>
    </>
  );
};
const MovieContainer = styled.div`
  h3 {
    margin-bottom: 0.6rem;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  height: 10rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    /* transition-duration: 500ms; */

    /* &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    } */
  }
`;
const Carousel = styled(Slider)`
  .slick-list .slick-track div {
    /* margin: 0 0.2rem; */
    height: 12rem;
  }


  .slick-track {
    height: 5rem;
  }

  .slick-prev:before {
    display: none;
  }

  .slick-next:before {
    display: none;
  }
`;
export default MovieSlider;
