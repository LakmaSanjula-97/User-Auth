import React from 'react'
import { Container } from "@chakra-ui/react";
import NavigationBar from '../NavigatioBar/NavigationBar';
import ManagerDashboardDetails from './ManagerDashboardDetails';

const ManagerDashboard = () => {
  return (
    <Container>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <ManagerDashboardDetails />
    </Container>
  );
}

export default ManagerDashboard
