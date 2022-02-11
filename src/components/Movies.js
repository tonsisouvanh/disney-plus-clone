/*********************************** ITEM SLIDE WITH CSS ************************************/

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

const Movies = () => {
  const movies = useSelector(selectMovies);

  return (
    <>
      <MovieContainer>
        <h3>Recommended For You</h3>
        <Container>
          {movies &&
            movies.map((movie) => {
              return (
                <Wrap key={movie.id}>
                  <Link className="link" to={`/detail/${movie.id}`}>
                    <CardHover className="card-hove-active"></CardHover>
                    <PlayCircleOutlineIcon className="playIcon" />
                  </Link>
                  <img src={movie.image} alt=""></img>
                </Wrap>
              );
            })}

          {/* <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-ironman2.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-ironman3.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-mandalorian.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-thelastjedai.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-avatar.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-spiderman1.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-spiderman2.jpg" alt=""></img>
          </Wrap>
          <Wrap>
            <CardHover className="card-hove-active"></CardHover>
            <PlayCircleOutlineIcon className="playIcon" />
            <img src="/images/movie-spiderman3.jpg" alt=""></img>
          </Wrap> */}
        </Container>
      </MovieContainer>
    </>
  );
};
const MovieContainer = styled.div`
  margin: 1.5rem 0;
  font-family: "Roboto", sans-serif;
  h3 {
    font-weight: 500;
    color: #e5e5e5;
    letter-spacing: 1.5px;
  }

  .link {
    text-decoration: none;
    color: white;
  }
`;
const Container = styled.div`
  display: grid;

  /* grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: minmax(0, 10rem);
  grid-gap: 1rem; */

  grid-auto-flow: column;
  grid-auto-columns: 16.5rem;
  grid-template-rows: minmax(0, 10rem);

  overflow-x: auto;
  overscroll-behavior-inline: contain;
  gap: 1.5rem;
  /* padding-bottom: 1.5rem; */
  padding: 1rem;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(249, 249, 249, 0.1);

    border-radius: 10px;
  }
`;

const CardHover = styled.div`
  position: absolute;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all ease-in 200ms;
`;

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.3rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition-duration: 500ms;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .playIcon {
    position: absolute;
    left: 45%;
    top: 36%;
    font-size: 3rem;
    opacity: 80%;
    transform: scaleX(0);
    transition: all ease-in 200ms;
  }

  &:hover {
    border: 4px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.1);
    overflow: none;
    .playIcon {
      transform: scaleX(1);
    }
    .card-hove-active {
      opacity: 30%;
    }
  }
`;

export default Movies;

/*********************************** USE SLIDER SLICK ************************************/
// import React from "react";
// import Slider from "react-slick";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Movies = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//   };

//   return (
//     <>
//       {/* <MovieContainer>
//         <h3>Recommended For You</h3>
//         <Container>
//           <Wrap>
//             <img src="/images/movie-ironman1.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-ironman2.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-ironman3.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-mandalorian.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-thelastjedai.jpg" alt=""></img>
//           </Wrap>
//         </Container>
//       </MovieContainer> */}

//       <MovieContainer>
//         <h3>Recommended For You</h3>
//         <Carousel {...settings}>
//           <Wrap>
//             <img src="/images/movie-ironman1.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-ironman2.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-ironman3.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-mandalorian.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-thelastjedai.jpg" alt=""></img>
//           </Wrap>
//           <Wrap>
//             <img src="/images/movie-avatar.jpg" alt=""></img>
//           </Wrap>
//         </Carousel>
//       </MovieContainer>
//     </>
//   );
// };
// const MovieContainer = styled.div`
//   margin-top: 1.5rem;

//   h3 {
//     margin-bottom: 0.6rem;
//   }
// `;
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, minmax(0, 1fr));
//   grid-template-rows: minmax(0, 10rem);
//   grid-gap: 1rem;
// `;

// const Wrap = styled.div`
//   cursor: pointer;
//   overflow: hidden;
//   border-radius: 0.3rem;
//   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//     rgb(0 0 0/ 73%) 0px 16px 10px -10px;

//   /* width: 12rem; */
//   height: 8rem;
//   /* margin-right: 1rem; */

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;

//     /* transition-duration: 500ms; */

//     /* &:hover {
//       border: 4px solid rgba(249, 249, 249, 0.8);
//     } */
//   }
// `;
// const Carousel = styled(Slider)`
//   .slick-list .slick-track div {
//     margin-left: 0.5rem;
//   }

//   .slick-track{
//     height: 5rem;
//   }
// `;
// export default Movies;
