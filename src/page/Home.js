import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import Viewer from "../components/Viewer";
import Movies from "../components/Movies";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  const productCollectionRef = collection(db, "movies");
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(productCollectionRef);
      let tempMovie = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setMovies(tempMovie));
    };
    getMovies();
  }, []);

  return (
    <>
      <Container>
        <ImageSlider></ImageSlider>
        <Viewer></Viewer>
        <Movies></Movies>
        {/* <Movies></Movies> */}
      </Container>
    </>
  );
};

const Container = styled.div`
  min-height: calc(100vh - 8vh);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default Home;
