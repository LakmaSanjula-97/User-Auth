import React from 'react';
import {
  Container,
  Box,
  Text,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import FileUpload from "./FileUpload";
import NavigationBar from '../NavigatioBar/NavigationBar';

const FileUploadPage = () => {
  const userInfo = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem('userInfo')):null

  return (
    <>
      {userInfo.role === "manager" ? (
        <Container maxW="xl" centerContent>
          <NavigationBar />
          <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            marginTop={40}
          >
            <Text fontFamily="work sans" fontSize="4xl" color="black">
              Uplaod File Here
            </Text>
          </Box>
          <Box
            p={4}
            bg={"white"}
            w="100%"
            color="black"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabPanels>
                <TabPanel>
                  <FileUpload />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      ) : (
        <h1>Not Authorized. Please login or signup to the system</h1>
      )}
    </>
  );
}

export default FileUploadPage
