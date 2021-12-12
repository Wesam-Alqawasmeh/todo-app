import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          To Do List: {props.incomplete} items pending
        </Navbar.Brand>
      </Container>
    </Navbar>
    // <header>
    //   <h1>To Do List: {props.incomplete} items pending</h1>
    // </header>
  );
}
