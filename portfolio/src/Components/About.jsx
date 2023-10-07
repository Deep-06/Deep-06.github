import React from 'react';
import { Box, Heading, Text, Flex, Image, chakra, VStack } from '@chakra-ui/react';

function About() {
  return (
    <VStack p={10}>
      <Box w="100%">
        <Heading fontSize="4xl" mb="4" color={"red.400"} >
          About Me
        </Heading>
        {/* <Text id="user-detail-name" fontSize="xl" fontWeight="bold">
          <chakra.span
            fontSize="larger"
            color={"white"}
          >
            DEEPSHIKHA
          </chakra.span>
        </Text> */}
        <Box
          id="user-detail-intro"
          fontSize="2xl"
          background="linear-gradient(135deg, #0072B5, #033245)"
          color="white"
          borderRadius="xl"
          boxShadow="md"
          padding="10"
          ml={10} mr={10}
          data-aos="zoom-in-up"
        >
          <Flex alignItems="center" gap={20}>
            <Image
              src="https://learntocodewith.me/wp-content/uploads/2022/07/Building-a-portfolio-website.jpg"
              alt="Profile Image"
              borderRadius="full"
              boxSize="40%" // Adjusted to occupy 30% of the width
              marginRight="20px" // Add marginRight to the Image
            />
            <ul style={{ textAlign: 'left', margin: '0', padding: '0' }}>
              <li style={{ marginBottom: '10px' }}>
                Hello, I'm Deepshikha. I hold a Bachelor's degree in Food Technology and 
                completed a 30-week Full Stack Web Development course at Masai, where I gained 
                industry-level knowledge.
              </li>
              <li style={{ marginBottom: '10px' }}>
                Though I lack formal work experience, I'm passionate about technology and 
                have worked on projects like e-commerce and hotel booking systems.
              </li>
              <li>
                My interest in coding stems from a strong desire to explore and learn more about 
                the tech world. I'm eager to contribute my skills to your team and excited about the opportunity.
              </li>
            </ul>
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
}

export default About;