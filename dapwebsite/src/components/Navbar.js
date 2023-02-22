import { Flex, Box, Heading, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink  } from "react-router-dom";
import logo from '../components/assets/daplogo.jpg'
import React from 'react'

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between"
     wrap="wrap" bg="blue">
      <Box>
        <Link as={RouterLink} to="/">
          <Image src={logo} alt="logo" boxSize={100}/>
        </Link>
      </Box>
      <Box display={{ base: "none", md: "block" }} color= 'white'>
  <Link as={RouterLink} to="/" mr={4}>
    Home
  </Link>
  <Link as={RouterLink} to="/about" mr={4}>
    About
  </Link>
  <Link as={RouterLink} to="/registration" mr={4}>
    Registration
  </Link>
  <Link as={RouterLink} to="/multimedia" mr={4}>
    Multimedia
  </Link>
  <Link as={RouterLink} to="/contact" mr={4}>
    Contact
  </Link>
</Box>

    </Flex>
  )
}

export default Navbar