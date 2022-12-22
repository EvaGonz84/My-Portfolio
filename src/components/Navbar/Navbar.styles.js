import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const desktopStartWidth = 900;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Lato", sans-serif;
  box-shadow: 5px;
  background-color: #2a536e;
  padding: 0px 10px;
  position: sticky;
  z-index: 2;
  top: 0;

  svg {
    color: #f1f1f1;
    font-size: 1.5em;
    margin-left: 2rem;

    &:hover {
      color: #faa36c;
      transition: 0.5s;
    }
  }
`;

export const Menu = styled.ul`
  background-color: #2a536e;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile} {
    position: absolute;
    z-index: 2;
    top: 50px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    padding: 0;
    width: 100%;
    height: 95vh;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.3s all ease;
  }
`;

export const MenuItems = styled.li`
  height: 100%;
  list-style: none;
  letter-spacing: 1px;

  ${mobile} {
    width: 100%;
    height: 70px;
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemsLink = styled(HashLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #f1f1f1;
  height: 100%;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #faa36c;
    transition: 0.5s all ease;
  }

  ${mobile} {
    width: 100%;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  ${mobile} {
    display: block;
    align-items: center;
    cursor: pointer;
    padding: 20px;
  }
  svg {
    fill: #f1f1f1;
    margin-right: 2rem;
    font-size: 25px;

    &:hover {
      fill: #faa36c;
      transition: 0.5s;
    }
  }
`;
