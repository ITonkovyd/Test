import React from "react";
import UserMenu from "../UserMenu/UserMenu";
import { LinkStyled, Nav, Wrapper } from "./NavBar.styled";

export const NavBar = () => {
  const isLoggedIn = localStorage.getItem("key") ? true : false;

  console.log(isLoggedIn);

  return (
    <Wrapper>
      <Nav>
        <LinkStyled to={"/freepage"}>Free page</LinkStyled>
        <LinkStyled to={"/users"}>Users after login</LinkStyled>
      </Nav>

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Nav>
          <LinkStyled to="/login">Log in</LinkStyled>
          <LinkStyled to="/register">Sign up</LinkStyled>
        </Nav>
      )}
    </Wrapper>
  );
};
