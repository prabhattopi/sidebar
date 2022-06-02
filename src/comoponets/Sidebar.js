import { Flex, HStack, Icon, Text, Container, Box } from "@chakra-ui/react";
import { FaHome,FaUpload,FaSetting,FaExplore,FaStar,FaArrowRight } from "react-icons/fa";
import React from "react";

export const Sidebar = () => {
  return (
    <HStack
      p="10px"
      width="230px"
      height="100vh"
      display="flex"
      align="flex-start"
      bg="white"
      boxShadow="2xl"
    >
      <Flex direction="column" color="black">
        <Text fontSize="18px" fontWeight="600">
          Logo
        </Text>
        <Flex direction="column" mt="30px" gap="20px" width="200px" p="10px" >
          <Flex  gap="20px" align="center" _hover={{bg:"cyan.500",borderRadius:"5px"}} width="100%" height="60px">
            <Icon ml="10px" fontSize="20px" as={FaHome}></Icon>
            <Text fontSize="20px">Home</Text>
          </Flex>
          <Flex  gap="20px" align="center" _hover={{bg:"cyan.500",borderRadius:"5px"}} width="100%" height="60px">
            <Icon ml="10px" fontSize="20px" as={FaUpload}></Icon>


          



            <Text fontSize="20px">Trending</Text>
          </Flex>
          <Flex  gap="20px" align="center" _hover={{bg:"cyan.500",borderRadius:"5px"}} width="100%" height="60px">
            <Icon ml="10px" fontSize="20px" as={FaStar}></Icon>
            <Text fontSize="20px">Favourite</Text>
          </Flex>
          <Flex  gap="20px" align="center" _hover={{bg:"cyan.500",borderRadius:"5px"}} width="100%" height="60px">
            <Icon ml="10px" fontSize="20px"></Icon>
            <Text fontSize="20px">Explore</Text>
          </Flex>
          <Flex  gap="20px" align="center" _hover={{bg:"cyan.500",borderRadius:"5px"}} width="100%" height="60px">
            <Icon ml="10px" fontSize="20px" as={FaArrowRight}></Icon>
            <Text fontSize="20px">Settings</Text>
          </Flex>
          
        </Flex>
      </Flex>
    </HStack>
  );
};
