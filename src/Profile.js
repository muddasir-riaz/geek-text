import React, { useState } from "react";
import EditProfile from "./profile/EditProfile";
import Navibar from "./components/Navibar";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./utils/Auth";
import PrivateRoute from "./components/PrivateRoute";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  function setUserDetailsHandle(user) {
    setUserDetails(user);
  }

  return (
    <Router>
      <Navibar />
      <PrivateRoute
        path="/editProfile"
        component={() => <EditProfile userEmail={Auth.getProfile().username} />}
      />
    </Router>
  );
}

export default Profile;
