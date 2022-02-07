import React, { useState } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";

import Movies from "../components/Movies";
import MovieSlider from "./MovieSlider";
const useStyles = makeStyles({
  TabStyle: {
    color: "white",
    fontSize: "1.3rem",
    margin: "0 2rem 0 0",
    padding: "0",
    fontWeight: "200",
    // '&:hover':{
    //   color: 'red'
    // }
    "&.Mui-selected": {
      fontWeight: "500",
    },
  },
  TabListStyle: {
    margin: "1.5rem 0 0 0",
  },
});

const Detail = () => {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  console.log(selectedTab);
  return (
    <>
      <Container>
        <Background>
          <img
            src="https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg"
            alt="img"
          ></img>
        </Background>

        <ContentContainer>
          <ImageTitle>
            <img
              className="movie-name-image"
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
              alt="img"
            ></img>
          </ImageTitle>

          <ActionButton>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt=""></img>
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt=""></img>
              <span>TRAILER</span>
            </TrailerButton>
            <AddCircleOutlineIcon className="add-icon"></AddCircleOutlineIcon>
          </ActionButton>

          <p className="short-text">
            Lorem Ipsum is simply dummy text of the printing and{" "}
          </p>

          <p className="long-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
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
                <Tab className={classes.TabStyle} label="DETAIL" value="2" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <MovieSlider></MovieSlider>
            </TabPanel>
            <TabPanel value="2">Detail</TabPanel>
          </TabContext>
        </Box>
      </Container>
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
    font-weight: 600;
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
  width: 30vw;
  .movie-name-image {
    margin-top: 8rem;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Detail;
