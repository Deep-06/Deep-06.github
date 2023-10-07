import React, { useEffect } from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { styled } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="zoom-in-up" style={{ width: "100%", margin: "20px" }} >
      <Heading fontSize="4xl" mb="8" color={"red.400"} >
        My Technical Skills
      </Heading>
      <DIV data-aos="zoom-in">
        <Box p={10} bgColor={"black"}>
          <Image src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width="100%" />
          <Text mt={2} fontSize="2xl">HTML</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt="" width="100%" />
          <Text mt={2} fontSize="2xl">CSS</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">JavaScript</Text>
        </Box>
        <Box border={"2px solid red"} p={10} pt="50px" pb="50px">
          <Image src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">React JS</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">TypeScript</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">Redux</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">Chakra UI</Text>
        </Box>
        <Box border={"2px solid red"} p={10} pt="30px" pb="30px">
          <Image src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">Node JS</Text>
        </Box>
        <Box border={"2px solid red"} p={10}>
          <Image src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="Skills" width="100%" />
          <Text mt={2} fontSize="2xl">Mongo DB</Text>
        </Box>
        <Box border={"2px solid red"} p={10} pt="44px" pb="44px">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="Skills" width="100%" pt="35px" pb="25px" />
          <Text mt={6} fontSize="2xl">NPM</Text>
        </Box>
      </DIV>
    </div>
  )
}

export default Skills

const DIV = styled.div`
 width:90%;
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-auto-rows:260px;
  justify-content:center;
  align-items:center;
  column-gap:50px;
  row-gap:50px;
  color:white;
  font-weight:500;
  margin:auto;
  padding:10px;
  margin-top:20px
`;