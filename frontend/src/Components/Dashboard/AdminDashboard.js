import React from 'react'
import { Link } from "react-router-dom";
import {
  Container, Button
} from "@chakra-ui/react";
import NavigationBar from '../NavigatioBar/NavigationBar';

const AdminDashboard = () => {
  return (
    <Container>
      <NavigationBar />
      <Button>
        <Link to="/staffregister">Add Staff Members</Link>
      </Button>
      <Button>
        <Link to="/message">Add Message</Link>
      </Button>
      <Button>
        <Link to="/fileUpload">Upload File</Link>
      </Button>
    </Container>
  );
}

export default AdminDashboard
