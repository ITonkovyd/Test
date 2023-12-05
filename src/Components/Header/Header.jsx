import React from "react";
import { Nav, Wrapper } from "./Header.styled";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <NavBar />
      </Nav>
    </Wrapper>
  );
};
