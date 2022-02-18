import React, { useEffect } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AddIcon from "@mui/icons-material/Add";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";

import { auth, provider } from "../firebase";
// import { signInWithPopup, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

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
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userProfile = {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        };

        dispatch(
          setUserLogin({
            name: userProfile.name,
            email: userProfile.email,
            photo: userProfile.photo,
          })
        );

        localStorage.setItem("user", JSON.stringify(userProfile));
        navigator("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignout = () => {
    localStorage.removeItem("user");
    dispatch(setSignOut());
    navigator("/login");
  };

  useEffect(() => {
    // auth.onAuthStateChanged(async (user) => {
    //   console.log('heuuu',user);
    //   if (user) {
    //     dispatch(
    //       setUserLogin({
    //         name: user.displayName,
    //         email: user.email,
    //         photo: user.photoURL,
    //       })
    //     );
    //     // navigator("/");
    //   }
    // });
    const user = JSON.parse(localStorage.getItem("user"));
    if (user || user !== null) {
      dispatch(
        setUserLogin({
          name: user.name,
          email: user.email,
          photo: user.photo,
        })
      );
    }
  }, []);

  return (
    <>
      {!userName ? (
        <Nav>
          <Link to="/">
            <Logo src="/images/logo.svg"></Logo>
          </Link>
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
          </NavMenu>
          <LoginButton onClick={handleSignIn}>
            {/* <Link className="link" to='/login'> */}
            LOGIN
            {/* </Link> */}
          </LoginButton>
        </Nav>
      ) : (
        <Nav>
          <Link to="/">
            <Logo src="/images/logo.svg"></Logo>
          </Link>
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
          </NavMenu>
          <AvatarContainer>
            <span onClick={handleSignout}>Sign out</span>
            <Avatar src={userPhoto}></Avatar>
          </AvatarContainer>
        </Nav>
      )}
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

  .link {
    text-decoration: none;
    color: #ffffff;
  }
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
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: all ease-in-out 0.3s;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0.2rem 0.8rem;
    text-align: center;
    border: 2px solid white;
  font-size: 0.8rem;
    /* visibility: hidden; */
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 0.3rem;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition-duration: 0.3s;
  }

  &:hover {
    span {
      /* visibility: visible; */
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

const Avatar = styled.img`
  width: 2.9rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const LoginButton = styled.button`
  min-width: 5rem;
  min-height: 2rem;
  background: transparent;
  border: 1px solid rgb(210, 210, 210);
  color: #ffffff;
  border-radius: 3px;
  margin-left: auto;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: #222222;
    background-color: #ffffff;
  }
`;

export default Header;
