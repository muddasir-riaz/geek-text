import React, {Component} from "react";
import { NavLink } from "react-router-dom";


class MainNav extends Component {
    render() {
        return (
            <div>
            <NavLink style={{ textDecoration: 'none',  color: 'black'}} 
                        to="/Profile"
                        >Profile  </NavLink>
            <NavLink style={{ textDecoration: 'none',  color: 'black'}} 
                        to="/Register"
                        >Register  </NavLink>
        </div>
            );
        }
      }
export default MainNav;
