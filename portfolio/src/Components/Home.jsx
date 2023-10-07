import React from 'react'
import { VStack,HStack,Box,Image,Text } from "@chakra-ui/react";
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import Skills from './Skills';
import Contact from './Contact';
const Home = () => {
  return (
    <VStack >

      {/* Introduction    */}
      <HStack id="intro" w="100%" m={5} p={10}>
         <VStack spacing={2} w={"50%"} color={"white"}>
            <Text fontSize='4xl' fontWeight="extrabold">Hi👋, My name is</Text>
            <Text fontSize='4xl' fontWeight="extrabold" color={"red.400"}>Deepshikha</Text>
            <Text fontSize='3xl' fontWeight="extrabold">I am a Full Stack Web Developer</Text>
            <HStack spacing={8}>
              <Box bgColor="red.400" boxSize={10} pt={1}>
                <a href="https://www.linkedin.com/in/deep-shikha-338a051a6/"><FontAwesomeIcon  icon={faLinkedin} size="2x"/> </a>
              </Box>
              <Box bgColor="red.400" boxSize={10} pt={1}>
                <a href="https://github.com/Deep-06"><FontAwesomeIcon  icon={faGithub} size="2x"/></a>
              </Box>
              <Box bgColor="red.400" p={3} pt={1}>
                <a href="">Resume</a>
              </Box>
            </HStack>
         </VStack>

         <Box w={"50%"} p={5} ml={20}>
          <Image src="/Images/Profilepic.jpeg" alt="Image" width="60%" borderRadius="50%"/>
         </Box>
      </HStack>

      {/* About Us */}
      <Box id="about" className="about-section">
      <About/>
      </Box>
        
      {/* Projects */}
      <Box id="project" className="project-section">

      </Box>

      {/* Skills */}
      <Box id="skill" className="skill-section">
       <Skills/>
      </Box>

      {/* Contact */}
      <Box id="contact" className="contact-section">
        <Contact/>
      </Box>
    </VStack>
  )
}

export default Home
