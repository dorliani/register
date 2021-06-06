import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const StudentsList = ({ studentsArray, setDetails }) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <ListGroup className="my_shadow" variant="flush">
            <ListGroup.Item className="text-center p-3 font-weight-bold">
              Students List.
            </ListGroup.Item>
            {studentsArray.map((student, i) => (
              <ListGroup.Item onClick={() => setDetails(student)} key={i}>{`${
                i + 1
              }) ${student.name}`}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
//
export default StudentsList;
