import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import EditPersonalInfo from "./EditUserinfo";
import EditShippingAddresses from "./EditAddress";
import EditCreditCard from "./EditCreditCard";
import API from "../utils/API";

function EditProfile(props) {
  const [email, setEmail] = useState(props.userEmail);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [renderChildren, setRenderChildren] = useState(false);

  useEffect(() => {
    API.getUser({ email: email }).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setHomeAddress(res.data.homeAddress);
      setRenderChildren(true);
    });
  }, []);

  function setPersonalInfo(
    newFirstName,
    newLastName,
    newEmail,
    newHomeAddress
  ) {
    setFirstName(newFirstName);
    setLastName(newLastName);
    setEmail(newEmail);
    setHomeAddress(newHomeAddress);

    alert("Personal Information Updated!");
  }

  function getUserDetails() {
    return {
      email: email,
      firstName: firstName,
      lastName: lastName,
      homeAddress: homeAddress,
    };
  }

  return (
    <React.Fragment>
      <Container style={{ paddingTop: "20px" }}>
        {renderChildren ? (
          <React.Fragment>
            <EditPersonalInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              homeAddress={homeAddress}
              onNewPersonalInfo={setPersonalInfo}
            />
            <EditShippingAddresses email={email} />
            <EditCreditCard email={email} />
          </React.Fragment>
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Container>
    </React.Fragment>
  );
}

export default EditProfile;
