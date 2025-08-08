import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import Portrait from "../assets/img/Portrait2.png";
import { FaBell } from 'react-icons/fa';

export const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4 topbar">
      <Container fluid className="d-flex">
        <Nav className="align-items-center ms-auto">
          <FaBell size={24} color="black"/>
          <span className="me-2 text-dark">Henry</span>
          <Image
            src={Portrait}
            roundedCircle
            alt="User Avatar"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              border: "2px solid #ccc"
            }}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};
