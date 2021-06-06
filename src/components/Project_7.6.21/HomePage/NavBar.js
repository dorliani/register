import React, { useState } from "react";
import {
  Nav,
  Container,
  Navbar,
  NavDropdown,
  Button,
  Modal,
} from "react-bootstrap";
import Tilt from "react-tilt";
import brainImage from "../images/brain.png";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import "../style.css";

const NavBar = ({ sortBy, onAddUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const putUser = (obj) => {
    onAddUser(obj);
  };

  return (
    <nav>
      <Navbar bg="bg-light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className="ml-auto">
            <Tilt className="my_gradient my_shadow p-2" options={{ max: 55 }}>
              <div>
                <img src={brainImage} alt="Logo" />
              </div>
            </Tilt>
          </Navbar.Brand>

          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="me-auto">
              <NavDropdown
                className="ml-4"
                title="Sort By"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item variant="secondary" onClick={() => sortBy(1)}>
                  Ascending
                </NavDropdown.Item>
                <NavDropdown.Item variant="secondary" onClick={() => sortBy(2)}>
                  Descending
                </NavDropdown.Item>
              </NavDropdown>
              <p className="ml-4" onClick={handleShow}>
                Add Student+
              </p>
              <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Body>
                  <RegisterModal putUser={putUser} handleClose={handleClose} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};
export default NavBar;
