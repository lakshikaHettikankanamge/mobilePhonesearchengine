import React, { Component } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavDropdown } from 'react-bootstrap';


class MyDropdown extends Component {
  state = {
    dropdownOpen: false
  };

  toggle=() =>{
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className='MyDropdown'>
        {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Accessory
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem value='Power Banks'>Power Banks</DropdownItem>
          <DropdownItem value='Ear phones'>Ear phones</DropdownItem>
          <DropdownItem value='Phone covers'>Phone covers</DropdownItem>
          <DropdownItem value='Chargers'>Chargers</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      <NavDropdown title="Accessories" id="basic-nav-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        
        <NavDropdown.Item href="#action/3.1">Ear Phones</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Phone Cases</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Phone Covers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Chargers</NavDropdown.Item>
      </NavDropdown>
      </div>
    );
  }
}

export default MyDropdown
