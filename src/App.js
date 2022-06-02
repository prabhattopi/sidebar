import { IconButton, Stack, useColorMode,Flex, Spacer } from "@chakra-ui/react";
import { Sidebar } from "./comoponets/Sidebar";

import {FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin} from "react-icons/fa"
function App() {
  const {colorMode,toggleColorMode}=useColorMode()
  const isDark=colorMode==="dark"
  return (
   
    <Stack>
      <Flex>
       <Sidebar/>
       
       <Spacer></Spacer>
       <IconButton mt="10px" mr={8} icon={isDark ? <FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
       </Flex>
    </Stack>
     
  );
}

export default App;
