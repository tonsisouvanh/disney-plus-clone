import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";

import MovieSlider from "./MovieSlider";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// style for material ui tab component
const useStyles = makeStyles({
  TabStyle: {
    color: "white",
    fontSize: "1.3rem",
    margin: "0 2rem 0 0",
    padding: "0",
    fontWeight: "200",

    "&.Mui-selected": {
      fontWeight: "500",
    },
  },
  TabListStyle: {
    margin: "1.5rem 0 0 0",
  },
});

//style for modal popup in material ui
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "transparent",
  border: "none",
  borderRadius: "5px",
};

const Detail = () => {
  //handle router & data
  const classes = useStyles();
  const { id } = useParams();
  const productCollectionRef = collection(db, "movies");

  // handle tab component
  const [selectedTab, setSelectedTab] = useState("1");
  const [movies, setMovies] = useState([]);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // handle modal popup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(productCollectionRef);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMovies();
  }, [productCollectionRef]);

  return (
    <>
      {movies &&
        movies
          .filter((movie) => movie.id === id)
          .map((movie) => {
            return (
              <Container key={movie.id}>
                <Background>
                  <img src={movie.backgroundImage} alt="img"></img>
                </Background>

                <ContentContainer>
                  <ImageTitle>
                    <img
                      className="movie-name-image"
                      src={movie.imageTitle}
                      alt="img"
                    ></img>
                  </ImageTitle>

                  <ActionButton>
                    <PlayButton>
                      <img src="/images/play-icon-black.png" alt=""></img>
                      <span>PLAY</span>
                    </PlayButton>

                    <div>
                      <TrailerButton onClick={handleOpen}>
                        <img src="/images/play-icon-white.png" alt=""></img>
                        <span>TRAILER</span>
                      </TrailerButton>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <iframe
                          style={style}
                          width="420"
                          height="315"
                          src={`https://www.youtube.com/embed/${movie.trailer}`}
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title="video"
                        ></iframe>
                      </Modal>
                    </div>
                    <AddCircleOutlineIcon className="add-icon"></AddCircleOutlineIcon>
                  </ActionButton>

                  <p className="short-text">{movie.subDescription}</p>

                  <p className="long-text">{movie.description}</p>
                </ContentContainer>

                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={selectedTab}>
                    <Box
                      sx={{
                        boder: "none",
                        // borderBottom: 1,
                        // borderColor: "divider"
                      }}
                    >
                      <Tabs
                        TabIndicatorProps={{
                          style: {
                            backgroundColor: "white",
                            height: "3px",
                          },
                        }}
                        className={classes.TabListStyle}
                        value={selectedTab}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                        textColor="inherit"
                      >
                        <Tab
                          // className="tab__style"
                          className={classes.TabStyle}
                          label="SUGGESTED"
                          value="1"
                        />
                        <Tab
                          className={classes.TabStyle}
                          label="DETAIL"
                          value="2"
                        />
                      </Tabs>
                    </Box>
                    <TabPanel value="1">
                      <MovieSlider></MovieSlider>
                    </TabPanel>
                    <TabPanel value="2">Detail</TabPanel>
                  </TabContext>
                </Box>
              </Container>
            );
          })}
    </>
  );
};
const Container = styled.div`
  max-width: 100vw;
  min-height: calc(100vh - 8vh);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  .tab__style {
    .Mui-selected {
      color: red;
    }
  }
`;

const Background = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    opacity: 40%;
  }
`;

const ContentContainer = styled.div`
  /* margin-top: 5rem; */

  max-width: 48rem;
  .short-text {
    opacity: 90%;
    font-size: 1.1rem;
    margin: 1rem 0;
  }

  .long-text {
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

const ActionButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  .add-icon {
    font-size: 4rem;
    cursor: pointer;
  }
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 500ms;
  letter-spacing: 1.8px;
  span {
    margin-left: 0.5rem;
    font-size: 1.3rem;
  }

  &:hover {
    opacity: 80%;
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
  margin: 0 1.6rem;
`;

const ImageTitle = styled.div`
  width: 35vw;
  .movie-name-image {
    margin-top: 8rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Detail;
