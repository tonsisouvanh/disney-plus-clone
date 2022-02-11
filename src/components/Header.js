import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AddIcon from "@mui/icons-material/Add";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserName, selectUserPhoto } from "../features/user/userSlice";

const iconWidth = "1.3rem";
const menusList = [
  {
    icon: <HomeIcon style={{ width: iconWidth }} />,
    menuName: "HOME",
    path: "/",
  },
  {
    icon: <SearchIcon style={{ width: iconWidth }} />,
    menuName: "SEARCH",
    path: "#",
  },
  {
    icon: <AddIcon style={{ width: iconWidth }} />,
    menuName: "WATCHLIST",
    path: "#",
  },
  {
    icon: <MovieFilterIcon style={{ width: iconWidth }} />,
    menuName: "MOVIES",
    path: "#",
  },
  {
    icon: <LocalMoviesIcon style={{ width: iconWidth }} />,
    menuName: "SERIES",
    path: "#",
  },
  {
    icon: <StarPurple500Icon style={{ width: iconWidth }} />,
    menuName: "ORIGINALS",
    path: "#",
  },
];

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <>
      <Nav>
        <Link to="/">
          <Logo src="/images/logo.svg"></Logo>
        </Link>

        {!userName ? (
          <LoginButton>LOGIN</LoginButton>
        ) : (
          <NavMenu>
            {menusList.map((item, index) => {
              return (
                <Link key={index} className="link" to="/">
                  <Menu>
                    {item.icon}
                    <span>{item.menuName}</span>
                  </Menu>
                </Link>
              );
            })}
            <Avatar
              src={
                "https://res.cloudinary.com/shoppin/image/upload/v1644499768/disney_plus_clone/images/avatar_wckrba.jpg"
              }
            ></Avatar>
          </NavMenu>
        )}
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  top: 0;
  width: 100%;
  min-height: 8vh;
  background-color: #090b13;
  font-weight: 500;
  color: #ffffff;
  position: fixed;
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

  .link {
    text-decoration: none;
    color: #ffffff;
  }
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
      transform-origin: left;
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
  width: 2.9rem;
  border-radius: 50%;
  border: 2px solid #ffffff;
  object-fit: contain;
  cursor: pointer;
`;

const LoginButton = styled.button`
  min-width: 5rem;
  min-height: 2rem;
  background: transparent;
  border: 1px solid rgb(210, 210, 210);
  color: #ffffff;
  border-radius: 3px;
`;

export default Header;
