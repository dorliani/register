import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import RegisterModalHeader from "./RegisterModalHeader.js";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { FaUser, FaCity } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import ErrorMessages from "../ErrorMessages/ErrorMessages.js";
import "../style.css";

const RegisterModal = ({ putUser, handleClose }) => {
  const radios = [
    { name: "Male", value: "1" },
    { name: "Female", value: "2" },
    { name: "Other", value: "3" },
  ];

  const courses = ["JavaScript", "Python", "C", "Android"];

  const makeTarget = (value, name) => {
    const ele = {
      target: {
        value,
        name,
      },
    };
    ele.target.id = name;
    validateInput(ele);
  };

  const [registerData, setRegisterData] = useState({
    name: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        minLength: 2,
      },
    },
    email: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        pattern: /^\w+([-]?\w+)*@\w+([npm-]?\w+)*(\.\w{2,3})+$/,
      },
    },
    address: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
        minLength: 10,
      },
    },
    course: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },
    gender: {
      value: "",
      errors: [],
      classes: "",
      validations: {
        required: true,
      },
    },
  });

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    const { validations } = registerData[name];

    if (validations.required && !value) {
      newErrors.push(`${name} is required`);
    }

    if (validations.pattern && !validations.pattern.test(value)) {
      newErrors.push(`Invalid ${name} value`);
    }

    if (validations.minLength && validations.minLength > value.length) {
      newErrors.push(
        `${name} should be no less then ${validations.minLength} characters`
      );
    }

    registerData[name].value = value;
    registerData[name].errors = newErrors;
    registerData[name].classes = newErrors.length > 0 ? "errorInput" : "";
    setRegisterData({ ...registerData });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const sendUser = () => {
    let student;
    let flag = true;
    for (const key in registerData) {
      if (registerData[key].errors.length > 0 || !registerData[key].value) {
        flag = false;
        makeTarget(registerData[key].value, key);
      }
      student = {
        ...student,
        [key]: registerData[key].value,
      };
    }
    if (flag) {
      putUser(student);
      handleClose();
    }
  };

  return (
    <Container fluid>
      <RegisterModalHeader />
      <Form onSubmit={onSubmit}>
        <Container>
          <Row className="justify-content-around mb-3">
            <Col>
              <Form.Label htmlFor="name">Username</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  id="name"
                  className={registerData.name.classes}
                  placeholder="Enter Username"
                  onBlur={validateInput}
                  defaultValue={registerData.name.value}
                  name="name"
                />
              </InputGroup>
              <ErrorMessages errors={registerData.name.errors} />
            </Col>
            <Col>
              <Form.Label htmlFor="email">Email</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <HiMail />
                </InputGroup.Text>
                <FormControl
                  name="email"
                  className={registerData.email.classes}
                  defaultValue={registerData.email.value}
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onBlur={validateInput}
                />
              </InputGroup>
              <ErrorMessages errors={registerData.email.errors} />
            </Col>
          </Row>

          <Row className="mb-3 justify-content-center">
            <Col>
              <Form.Label htmlFor="address">Address</Form.Label>
              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <FaCity />
                  </InputGroup.Text>
                  <Form.Control
                    name="address"
                    type="text"
                    id="address"
                    defaultValue={registerData.address.value}
                    className={registerData.address.classes}
                    as="textarea"
                    rows={2}
                    placeholder="Street, Number, City, Zip"
                    onBlur={validateInput}
                  />
                </InputGroup>
                <ErrorMessages errors={registerData.address.errors} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-around mb-3">
            <Col>
              <Form.Label htmlFor="course">Course</Form.Label>
              <Form.Group>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <MdSchool />
                  </InputGroup.Text>
                  <FormControl
                    id="course"
                    className={registerData.course.classes}
                    placeholder="Select Course"
                    aria-describedby="basic-addon2"
                    name="course"
                    defaultValue={registerData.course.value}
                    onBlur={validateInput}
                  />
                  <DropdownButton
                    as={InputGroup.Append}
                    variant="light"
                    title=""
                    id="input-group-dropdown-2"
                  >
                    {courses.map((course, i) => {
                      return (
                        <Dropdown.Item
                          key={i}
                          className={registerData.course.classes}
                          onClick={() => makeTarget(course, "course")}
                        >
                          {course}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </InputGroup>
                <ErrorMessages errors={registerData.course.errors} />
              </Form.Group>
            </Col>
            <Col lg="6">
              <div>
                <Form.Label>Gender</Form.Label>
              </div>
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant={"outline-primary"}
                    name="gender"
                    className={registerData.gender.classes}
                    defaultValue={registerData.gender.value}
                    value={radio.value}
                    checked={registerData.gender.value === radio.name}
                    onClick={(e) => makeTarget(radio.name, "gender")}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <ErrorMessages errors={registerData.gender.errors} />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Button
              className="my_gradient"
              onClick={sendUser}
              type="submit"
              variant="primary"
              block
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterModal;
