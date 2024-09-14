import React, { useState, useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react"
import NavBarContainer from "./NavBarContainer"
import MenuToggle from "./MenuToggle"
import MenuLinks from "./MenuLinks"
import Logo from "./Logo"

function NavBar({ onSignUpClick, ...props }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <NavBarContainer {...props} position="fixed" top={0} left={0} right={0} zIndex={1000} transition="all 0.3s" bg="white">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Logo
            w="170px"
            color="black"
          />
          <MenuToggle toggle={toggle} isOpen={isOpen} />
          <MenuLinks isOpen={isOpen} onSignUpClick={onSignUpClick} />
        </Flex>
      </NavBarContainer>
    )
}

export default NavBar