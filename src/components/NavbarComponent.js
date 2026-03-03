import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logoboot.webp";
import { ThemeContext } from "../Themecontext";

const StyledNavbar = styled(Navbar)`
  background-color: ${(props) =>
    props.themeMode === "light" ? "#ffffff" : "#1e1e1e"};
`;

const Logo = styled.img`
  max-height: 50px;
`;

function NavbarComponent() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <StyledNavbar expand="xl" themeMode={theme}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="gap-3">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/services"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/howitworks"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              How It Works
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              style={{ color: theme === "light" ? "black" : "white" }}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Button
            variant={theme === "light" ? "dark" : "light"}
            onClick={handleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavbarComponent;