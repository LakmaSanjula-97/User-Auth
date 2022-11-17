import React from 'react'
import {
  Container
} from "@chakra-ui/react";
import NavigationBar from '../NavigatioBar/NavigationBar';
import AdminDashboardDetails from './AdminDashboardDetails';

const AdminDashboard = () => {
  return (
    <Container>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <AdminDashboardDetails />
    </Container>
  );
}

export default AdminDashboard
