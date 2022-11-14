import React from 'react';
import { Link } from "react-router-dom";
import { Container, Button, Text, Box, Image, Stack } from "@chakra-ui/react";


const AdminDashboardDetails = () => {
  return (
    <Container>
      <Box width={600}>
        <Text fontSize="50px" color="black" as="b">
          Admin Dashboard
        </Text>
      </Box>
      <Stack direction={["column", "row"]} spacing="200px" marginTop={40}>
        <Box w="100px" h="40px" marginLeft={40}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/3E7XwZk"
            position="center"
            alt="Add Staff Members"
          />
          <Button marginLeft={-10} marginTop={2}>
            <Link to="/staffregister">Add Staff Members</Link>
          </Button>
        </Box>
        {/* <Box w="100px" h="40px">
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/3WXqzYe"
            position="center"
            alt="Add new message"
          />
          <Button>
            <Link to="/message">Add Message</Link>
          </Button>
        </Box>
        <Box w="100px" h="40px">
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/3hF7Noi"
            position="center"
            alt="Add new message"
          />
          <Button>
            <Link to="/fileUpload">Upload File</Link>
          </Button>
        </Box> */}
      </Stack>
    </Container>
  );
}

export default AdminDashboardDetails
