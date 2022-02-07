import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <LogoOne
            className="content__row"
            src="/images/cta-logo-one.svg"
          ></LogoOne>
          <Button className="content__row">GET ALL THESE</Button>
          <Description className="content__row">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour.
          </Description>
          <LogoTwo
            className="content__row"
            src="/images/cta-logo-two.png"
          ></LogoTwo>
        </ContentContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: calc(100vh - 8vh);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    margin-top: 3rem;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    opacity: 0.7;
    z-index: -1;
  }

  .content__row {
    margin: 0 0 1rem 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 55rem;
  padding: 0 2rem;
`;
const LogoOne = styled.img`
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #0063e5;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  &:hover {
    background-color: rgb(0, 111, 255);
  }
`;
const Description = styled.p`
  text-align: center;
  letter-spacing: 1.5px;
`;
const LogoTwo = styled.img`
  width: 100%;
`;

export default Login;
