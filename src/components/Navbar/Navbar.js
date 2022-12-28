import { useState } from "react";
import {
  Container,
  Menu,
  MenuItems,
  MenuItemsLink,
  MobileIcon,
} from "./Navbar.styles";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
     <a href='/'>
      <FaCode/>
      </a>
      <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <Menu open={showMobileMenu}>
        <MenuItems>
          <MenuItemsLink
            to="/#home"
            scroll={(el) => {
              el.scrollIntoView(true);
              window.scrollBy(0, -100);
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            HOME
          </MenuItemsLink>
        </MenuItems>
        <MenuItems>
          <MenuItemsLink
            to="/#about"
            scroll={(el) => {
              el.scrollIntoView(true);
              window.scrollBy(0, -64);
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ABOUT
          </MenuItemsLink>
        </MenuItems>
        <MenuItems>
          <MenuItemsLink
            to="/#projects"
            scroll={(el) => {
              el.scrollIntoView(true);
              window.scrollBy(0, -64);
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            PROJECTS
          </MenuItemsLink>
        </MenuItems>
        <MenuItems>
          <MenuItemsLink
            to="/#contact"
            scroll={(el) => {
              el.scrollIntoView(true);
              window.scrollBy(0, -64);
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            CONTACT
          </MenuItemsLink>
        </MenuItems>
      </Menu>
    </Container>
  );
};

export default Navbar;
