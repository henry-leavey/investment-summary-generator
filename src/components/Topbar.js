import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

export const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4">
      <Container fluid className="d-flex justify-content-between">
        {/* Left Side - Notifications / Updates */}
        <Nav className="align-items-center">
          <span className="fw-bold me-4 text-dark">
            📢 3 new earnings summaries available
          </span>
          <span className="fw-bold text-dark">
            📈 Guidance trend changed for 5 companies
          </span>
        </Nav>

        {/* Right Side - User Profile */}
        <Nav className="align-items-center">
          <span className="me-2 text-dark">Henry</span>
          <Image
            src="src\assets\img\Portrait2.png"
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
