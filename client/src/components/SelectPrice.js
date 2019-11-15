import React,{Component} from 'react'
import {Label,FormGroup,Input} from 'reactstrap'

class SelectPrice extends Component{
    state={
        price:''
    }

    handleChange=(event)=> {
        this.setState({price: event.target.value});
        // this.props.SelectPrice(this.state.price);
    }
    render(){
        return(
            <div className='SelectPrice' >
                <FormGroup>
                    <Label for="exampleSelect" >Select price :</Label>
                        <Input type="select" name="select" value={this.state.price} onChange={this.handleChange}>
                            <option value='below 10,000'>below 10,000</option>
                            <option value='10,000 - 20,000'>10,000 - 20,000</option>
                            <option value='20,000 - 30,000'>20,000 - 30,000</option>
                            <option value='30,000 - 40,000'>30,000 - 40,000</option>
                            <option value='40,000 - 50,000'>40,000 - 50,000</option>
                            <option value='50,000 - 100,000'>50,000 - 100,000</option>
                            <option value='above 100,000'>above 100,000</option>
                        </Input>
                </FormGroup>
            </div>
        );
    }
}
export default SelectPrice;