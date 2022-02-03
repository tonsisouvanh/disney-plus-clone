import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AddIcon from "@mui/icons-material/Add";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import tons from "../asset/tons.png";
const iconWidth = "1.3rem";
const menusList = [
  { icon: <HomeIcon style={{ width: iconWidth }} />, menuName: "HOME" },
  { icon: <SearchIcon style={{ width: iconWidth }} />, menuName: "SEARCH" },
  { icon: <AddIcon style={{ width: iconWidth }} />, menuName: "WATCHLIST" },
  {
    icon: <MovieFilterIcon style={{ width: iconWidth }} />,
    menuName: "MOVIES",
  },
  {
    icon: <LocalMoviesIcon style={{ width: iconWidth }} />,
    menuName: "SERIES",
  },
  {
    icon: <StarPurple500Icon style={{ width: iconWidth }} />,
    menuName: "ORIGINALS",
  },
];

const Header = () => {
  return (
    <>
      <Nav>
        <Logo src="https://res.cloudinary.com/shoppin/image/upload/v1643862214/Disneyplus/logo_ysmbxj.svg"></Logo>
        <NavMenu>
          {menusList.map((item) => {
            return (
              <Menu>
                {item.icon}
                <span>{item.menuName}</span>
              </Menu>
            );
          })}
        </NavMenu>
        <Avatar src={tons}></Avatar>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  min-height: 7vh;
  background-color: #090b13;
  color: #ffffff;
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  object-fit: contain;
  margin-top: -0.6rem;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 2.5rem;
  font-size: 0.8rem;
  span {
    position: relative;
    margin-left: 0.2rem;
    cursor: pointer;
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #ffffff;
      left: 0;
      right: 0;
      bottom: -0.2rem;
      transform: scaleX(0);
      transition: all ease 0.3s;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;

const Avatar = styled.img`
  width: 2.7rem;
  border-radius: 50%;
  border: 2px solid #ffffff;
  object-fit: contain;
  cursor: pointer;
`;

export default Header;
