import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const RegistrationForm = () => {
  const userStartState = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userAgreement: false,
  };
  const [user, setUser] = useState(userStartState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // add logic later
  };

  const handleChange = (e) => {
    e.target.name === "userAgreement"
      ? setUser({ ...user, [e.target.name]: e.target.checked })
      : setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={user.email}
                type="email"
                placeholder="Enter email"
                name="userEmail"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={user?.username}
                type="text"
                placeholder="Enter username"
                name="userName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={user.password}
                type="password"
                placeholder="Password"
                name="userPassword"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                name="userAgreement"
                onChange={handleChange}
                value={user.userAgreement}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <h1>Column 2</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
