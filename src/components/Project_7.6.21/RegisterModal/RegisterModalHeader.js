import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <header className="text-center">
      <Row>
        <Col>
          <h2 className="display-5 blue">Student Details</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>Hello Student! Please fill in your details.</small>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr></hr>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
