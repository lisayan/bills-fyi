import React from 'react'
import NavBarContainer from "./NavBarContainer";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";

function NavBar({ onSignUpClick, ...props }) {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <NavBarContainer {...props}>
        <Logo
          w="150px"
          color="black"
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} onSignUpClick={onSignUpClick} />
      </NavBarContainer>
    );
}

export default NavBar