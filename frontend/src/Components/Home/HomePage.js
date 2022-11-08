import React from 'react';
import { 
  Container, 
  Box, 
  Text,
  Tab, 
  Tabs,
  TabList,
  TabPanels,
  TabPanel
} from "@chakra-ui/react";
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p = {3}
        bg = {'white'}
        w = "100%"
        m = "40px 0 15px 0"
        borderRadius= "lg"
        borderWidth="1px"
      >
        <Text
          fontFamily= "work sans"
          fontSize= "4xl"
          color= "black"
        >
          ADMIN
        </Text>
      </Box>
      <Box
        p = {4}
        bg = {'white'}
        w = "100%"
        color = "black"
        borderRadius= "lg"
        borderWidth="1px"
      >
        <Tabs 
          variant='soft-rounded' 
          colorScheme='green'
        >
          <TabList>
            <Tab width="50%">Sign-In</Tab>
            <Tab width="50%">Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage
