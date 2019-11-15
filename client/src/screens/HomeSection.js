import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPhoneForm from './SearchPhoneForm'
import HomeText from '../components/HomeText'

class HomeSection extends Component{
    state = {
        brand:'',
        priceRange:''
    }

    selectBrand=(brand)=>{
        this.setState({brand:brand})
    }

    selectPrice=(priceRange)=>{
        this.setState({priceRange:priceRange})
    }

    render(){
        console.log(this.state.brand)
        return(
            <div className="Home">
                <div className="dark-overlay"> 
                    {/* <AppNavbar></AppNavbar> */}
                    <div className="home-inner">
                        <div className="home-container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-12">
                                    <HomeText></HomeText>
                                </div><br/><br/><br/>
                                <br/><br/><br/>
                                <div className="col-md-12" style={{paddingLeft:'130px'}}>
                                    <SearchPhoneForm   
                                    selectBrand={this.selectBrand}
                                    selectPrice={this.selectPrice}>
                                    </SearchPhoneForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSection;