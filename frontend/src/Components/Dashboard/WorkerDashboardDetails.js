import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Text, Box, Image, Stack } from "@chakra-ui/react";

const WorkerDashboardDetails = () => {
  return (
    <Container>
      <Box width={600}>
        <Text fontSize="50px" color="black" as="b">
          Worker Dashboard
        </Text>
      </Box>
      <Stack direction={["column", "row"]} spacing="200px" marginTop={40}>
        <Box w="100px" h="40px" marginLeft={40}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/3WXqzYe"
            position="center"
            alt="Add new message"
          />
          <Button marginLeft={-4}  marginTop={2}>
            <Link to="/message">Add Message</Link>
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default WorkerDashboardDetails;
