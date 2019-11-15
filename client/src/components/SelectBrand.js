import React,{Component} from 'react'
import {Label,FormGroup,Input} from 'reactstrap'

class SelectBrand extends Component{
    state = {
        value:'all'
    }

    handleChange=(event)=> {
        this.setState({value: event.target.value});
        // this.props.selectBrand(this.state.value);
    }
    

    render(){
        console.log(this.state.value)
        return(
            <div className='SelectBrand' >
                <FormGroup>
                    <Label for="exampleSelect" >Select brand :</Label>
                        <Input type="select" value={this.state.value} onChange={this.handleChange}>
                            <option value='all'>all</option>
                            <option value='Samsung'>Samsung</option>
                            <option value='Apple'>Apple</option>
                            <option value='Xiaomi'>Xiaomi</option>
                            <option value='HTC'>HTC</option>
                            <option value='Huawei'>Huawei</option>
                        </Input>
                </FormGroup>
            </div>
        );
    }
}
export default SelectBrand;