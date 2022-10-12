import { useState, useEffect, useReducer } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

// User service
import UserService from "../../services/UserService";

const TableDisplay = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UserService.getUsers().then((response) =>
      setUsersData(...usersData, response)
    );
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3 className="text-primary">User list</h3>
          <p className="text-italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            quidem est, assumenda doloremque ipsa explicabo alias, odio mollitia
            velit animi molestiae tempora earum iusto optio! Cum laudantium
            nostrum consectetur voluptate!
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table bordered hover className="shadow-lg text-center" responsive="sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {usersData?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TableDisplay;
