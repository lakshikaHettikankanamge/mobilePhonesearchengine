import React, { Component, Fragment } from "react";
import { logout } from "../../action/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <div>
          <NavLink onClick={this.props.logout} href="#">
            Logout
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
