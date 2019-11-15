import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import MyDropdown from "./MyDropdown";
import Searchbox from "./SearchBox";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm">
          <Container>
            <NavbarBrand
              href="/"
              style={{ fontFamily: "KaushanScript-Regular" }}
            >
              Phonefinity
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
                <NavItem>
                  <NavLink href=".">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="." style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <MyDropdown />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href=".">Add Store</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href=".">Contact us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            {""}
            {""}
            {""}
            {""}
            {""}
          </Container>
          <Searchbox style={{ paddingLeft: "35px" }} />
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
