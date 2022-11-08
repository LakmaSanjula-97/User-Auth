import React from 'react'
import { Link } from "react-router-dom";
import { Container, Button } from "@chakra-ui/react";

const ManagerDashboard = () => {
  return (
    <Container>
      <Button>
        <Link to="/message">Add Message</Link>
      </Button>
      <Button>
        <Link to="/fileUpload">Upload File</Link>
      </Button>
    </Container>
  );
}

export default ManagerDashboard
