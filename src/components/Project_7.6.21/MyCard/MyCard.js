import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const MyCard = ({ userData }) => {
  return (
    <Card className="text-center shadow_card pa-4 br-3">
      <Card.Header>Student Details</Card.Header>
      <Card.Body>
        <Card.Title>{userData.name}</Card.Title>
        <Card.Text>
          <Container>
            <Row>
              <Col>{`Email: ${userData.email}`}</Col>
            </Row>
            <Row>
              <Col>{`Address: ${userData.address}`}</Col>
            </Row>
            <Row>
              <Col>{`Gender: ${userData.gender}`}</Col>
            </Row>
          </Container>
        </Card.Text>
      </Card.Body>
      <Card.Footer>{userData.course}</Card.Footer>
    </Card>
  );
};
export default MyCard;
