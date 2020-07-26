import React, { useState } from "react";
import CreditCardsList from "./CreditCard";

function EditCreditCard(props) {
  const [userEmail, setUserEmail] = useState(props.email);

  return (
    <div className="card">
      <div className="card-header">
        <b>Edit Credit Card </b>
      </div>
      <CreditCardsList email={userEmail} />
    </div>
  );
}

export default EditCreditCard;
