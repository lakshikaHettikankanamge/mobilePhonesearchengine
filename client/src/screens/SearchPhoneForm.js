import React ,{Component} from 'react';
import SelectBrand from '../components/SelectBrand'
import SelectPrice from '../components/SelectPrice';
import { Link } from 'react-router-dom'
import MyButton from '../components/MyButton'

class SearchPhoneForm extends Component{

    render(){
        return(
            <form  className="search-phone-form">
                <div className="row mb-5" >
                    
                        <div className=" col-15 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0" >
                            <SelectBrand selectBrand = {this.props.selectBrand}></SelectBrand>
                        </div>
                        <div className="col-15 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0"style={{paddingLeft:'55px'}}>
                            <SelectPrice SelectPrice = {this.props.SelectPrice}></SelectPrice>
                        </div> 
                        <div className="col-15 col-sm-10 col-md-8 col-lg-4 mb-4 mb-lg-0"style={{paddingLeft:'55px',paddingRight:'80px'}}>
                            <label/>
                            
                            <Link  to="/explore" ><MyButton title='Go'/></Link>
                            
                            
                        </div> 
                    
                </div>
            </form>
        );
    }
}

export default SearchPhoneForm;

