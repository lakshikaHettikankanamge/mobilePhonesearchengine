import React, { Component } from 'react';
import { InputGroup,Input, Popover,InputGroupAddon, Button, PopoverBody } from 'reactstrap';
import { FaSearch } from "react-icons/fa";

class Searchbox extends Component {
    
    state = {
        popoverOpen: false
    };
    

    toggle=()=> {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <div>
                <FaSearch id="PopoverClick"/>
                <Popover  placement="bottom" target="PopoverClick" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverBody>
                        <InputGroup >
                            <Input placeholder="Search" /> 
                            {/* <InputGroupAddon addonType="prepend" toggle={this.toggle}>
                                <Button >x</Button>
                            </InputGroupAddon> */}
                        </InputGroup>
                    </PopoverBody>
                </Popover> 
                
            </div>
        )
    }
}

export default Searchbox
