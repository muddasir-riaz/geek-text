import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, ButtonGroup, Form } from "react-bootstrap";
import API from "../utils/API";

function Address(props) {
  const [trueAddresses, setTrueAddresses] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");
  const [userEmail] = useState(props.email);
  const [formCheck, setFormCheck] = useState(false);

  useEffect(() => {
    updateTrueAddresses();
  }, []);

  useEffect(() => {
    checkIfEmpty();
  });

  function checkIfEmpty() {
    if (!newAddress) {
      setFormCheck(false);
    } else {
      setFormCheck(true);
    }
  }

  function updateTrueAddresses() {
    API.getShippingAddressesByUser({ email: userEmail })
      .then((res) => {
        setTrueAddresses(res.data);
        setAddresses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function updateAddress(newAddress, index) {
    let newAddresses = addresses;
    newAddresses[index] = { email: userEmail, address: newAddress };
    setAddresses(newAddresses);
  }

  function deleteHandle(index) {
    API.deleteShippingAddress(addresses[index])
      .then((res) => {
        updateTrueAddresses();
      })
      .catch((err) => console.log(err));
  }

  function editHandle(index) {
    const shippingAddressUpdate = {
      primaryKeys: {
        email: userEmail,
        address: trueAddresses[index].addresses,
      },
      updates: { $set: { address: addresses[index].address } },
    };
    API.updateShippingAddress(shippingAddressUpdate)
      .then(() => {
        updateTrueAddresses();
        alert("Shipping Address updated!");
      })
      .catch((err) => {
        console.log("Error updating shipping address: " + err);
      });
  }

  function addressChangeHandle(event) {
    setNewAddress(event.currentTarget.value);
  }

  function addHandle(event) {
    event.preventDefault();
    API.addShippingAddress({ email: userEmail, address: newAddress })
      .then(() => {
        updateTrueAddresses();
        setNewAddress("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <React.Fragment>
      <Card>
        {addresses.map((address, index) => (
          <ListGroup key={index}>
            <ListGroup.Item key={index}>
              <input
                type="text"
                placeholder={address.address}
                onChange={(event) => {
                  updateAddress(event.target.value, index);
                }}
              />
              <ButtonGroup className="float-right">
                <Button onClick={() => editHandle(index)}>Save Changes</Button>
                <Button onClick={() => deleteHandle(index)} variant="danger">
                  Delete
                </Button>
              </ButtonGroup>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Card>
      <Form onSubmit={addHandle}>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control
            placeholder="1234 SW Example Ave"
            value={newAddress}
            onChange={addressChangeHandle}
          />
        </Form.Group>
        <Button
          className="float-right"
          type="submit"
          variant="primary"
          disabled={!formCheck}
        >
          Add address
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default Address;
