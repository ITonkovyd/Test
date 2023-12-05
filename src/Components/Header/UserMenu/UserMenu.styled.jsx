import { styled } from "styled-components";

export const Button = styled.button`
  height: 20px;
  margin-left: 10px;
  display: block;
  border: 1px solid grey;
  border-radius: 4px;

  color: black;
  text-transform: none;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #5187ec;
    transition: background-color 0.5 ms ease-in-out;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;

  font-weight: 600;
  font-size: 16px;
`;
