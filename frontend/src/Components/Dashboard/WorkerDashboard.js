import React from 'react'
import { Container } from "@chakra-ui/react";
import NavigationBar from '../NavigatioBar/NavigationBar';
import WorkerDashboardDetails from './WorkerDashboardDetails';

const WorkerDashboard = () => {
  return (
    <Container>
      <NavigationBar />
      <br />
      <br />
      <br />
      <br />
      <WorkerDashboardDetails />
    </Container>
  );
}

export default WorkerDashboard
