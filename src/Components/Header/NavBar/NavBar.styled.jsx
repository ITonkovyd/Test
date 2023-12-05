import { Link } from "react-router-dom";

const { styled } = require("styled-components");

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  margin-bottom: 15px;
  padding: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: block;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;

  color: black;
  text-transform: none;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #5187ec;
    scale: 1.3;
    transition: background-color 300ms ease-in-out;
    transition: scale 300ms ease-in-out;
  }

  &:not(:first-child) {
    margin-left: 10px;
  }
`;
