import React, { useState } from "react";
import Address from "./Address";
import { Card } from "react-bootstrap";

const EditAddress = (props) => {
  const [email] = useState(props.email);

  return (
    <Card>
      <Card.Header>
        <b>Edit Addresses</b>
      </Card.Header>
      <Card.Body>
        <Address email={email} />
      </Card.Body>
    </Card>
  );
};

export default EditAddress;
