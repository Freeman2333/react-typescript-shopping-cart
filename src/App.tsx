import React from 'react';
import AppRouter from './Router'
import  Navbar  from "./shared/Navbar";
import { Container } from "reactstrap";

function App() {
  return (
    <Container>
      <Navbar />
      <AppRouter/>
    </Container>
  );
}

export default App;
