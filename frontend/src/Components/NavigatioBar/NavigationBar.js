import React from 'react'
import { Container, Button } from "@chakra-ui/react";

const NavigationBar = () => {
  return (
    <Container>
      <Button>
        <Link to="/create_member">Add Staff Members</Link>
      </Button>
    </Container>
  );
}

export default NavigationBar
