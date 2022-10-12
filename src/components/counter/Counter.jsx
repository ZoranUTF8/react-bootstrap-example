import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <Container mb={5}>
      <Row className="mt-5 mb-3">
        <Col sm={12} md={6} className="mb-3">
          <Card bg="light" className="text-center shadow-lg">
            <Card.Body>
              <Card.Title>Card counter</Card.Title>
              <Card.Text className="display-1">{counter}</Card.Text>
              <Button variant="primary" className="m-1" onClick={increment}>
                Increment
              </Button>
              <Button variant="danger" className="m-1" onClick={decrement}>
                Decrement
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <h1>Simple counter</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;
