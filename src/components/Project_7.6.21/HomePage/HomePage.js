import React, { useState } from "react";
import { Container } from "react-bootstrap";
import StudentsList from "../StudentsList/StudentsList.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar.js";
import "../style.css";
import { studentsArray, sortArray, addStudent } from "../DAL/api.js";
import Particles from "react-particles-js";
import MyCard from "../MyCard/MyCard.js";

const HomePage = () => {
  const particles = (
    <Particles
      style={{ position: "absolute" }}
      height="90%"
      width="90%"
      params={{
        particles: {
          color: {
            value: "#fff",
          },
          line_linked: {
            color: {
              value: "#fff",
            },
          },
          number: {
            value: 50,
          },
          size: {
            value: 5,
          },
        },
      }}
    />
  );
  const [students, setStudents] = useState(studentsArray);

  const onAddUser = (obj) => {
    setStudents(addStudent(obj));
  };

  const sortBy = (sort) => {
    setStudents(sortArray(sort));
  };

  const [userCard, setUserCard] = useState(false);

  const setDetails = (obj) => {
    setUserCard({ ...obj });
  };

  return (
    <>
      {particles}
      <Container fluid>
        <Row>
          <Col>
            <NavBar
              onAddUser={onAddUser}
              studentsArray={students}
              sortBy={sortBy}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          {studentsArray.length ? (
            <Col md={{ span: 4 }}>
              <StudentsList setDetails={setDetails} studentsArray={students} />
            </Col>
          ) : (
            <Col md={{ offset: 4, span: 4 }}>
              <div className="shadow_card text-center p-5">
                <h2>Welcome !</h2>
                <h6>You can register to one of our courses</h6>
              </div>
            </Col>
          )}
          <Col md={{ offset: 1 }}>
            {userCard && <MyCard userData={userCard} setDetails={setDetails} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
