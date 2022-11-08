import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from "@chakra-ui/react";

const WorkerDashboard = () => {
  return (
    <Container>
      <Button>
        <Link to="/message">Add Message</Link>
      </Button>
    </Container>
  );
}

export default WorkerDashboard
