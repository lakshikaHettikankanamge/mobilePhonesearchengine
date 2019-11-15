import React ,{Component} from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class AppDropdown extends Component{
    state = {
        theme: null,
        dropdownOpen: false
    };

    toggle=()=>{
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    resetTheme = evt => {
        evt.preventDefault();
        this.setState({ theme: null });
    }

    chooseTheme = (theme, evt) => {
        evt.preventDefault();
        this.setState({ theme });
    }

    render() {

        const { theme, dropdownOpen } = this.state;
        return (
            
            <div className="brandDropdown   justify-content-center  w-100 h-10 align-items-center align-content-center">
                <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle} style={{position:"absolute",left:"300px"}} >
                    <Button id="caret" color="primary" > {theme || 'brand'}</Button>
                    <DropdownToggle caret size="lg" split outline color="primary" id="dropdown-split-basic">
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem onClick = {e => this.chooseTheme('all', e)}>all</DropdownItem>
                        <DropdownItem onClick = {e => this.chooseTheme('Apple', e)}>Apple</DropdownItem>
                        <DropdownItem onClick = {e => this.chooseTheme('Samsung', e)}>Samsung</DropdownItem>
                        <DropdownItem onClick = {e => this.chooseTheme('Xiaomi', e)}>Xiaomi</DropdownItem>  
                        <DropdownItem onClick = {e => this.chooseTheme('Vivo', e)}>Vivo</DropdownItem>
                        <DropdownItem onClick = {e => this.chooseTheme('Oppo', e)}> Oppo</DropdownItem>
                        <DropdownItem onClick = {e => this.chooseTheme('HTC', e)}>HTC</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
            
        );
    }
}

export default AppDropdown;