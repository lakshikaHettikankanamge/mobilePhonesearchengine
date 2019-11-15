import React, { Component } from 'react'
import AppTitle from'../components/AppTitle'
import ProductContainer from '../components/ProductContainer';

class ExploreContainer extends Component {

    render() {
        const title='Mobile Phones under Rs.10,000'
        return (
            <div>
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ">
						<AppTitle title={title}></AppTitle>
                    </div>
                </div>
                
                <div className='explore-container'>
                        <ProductContainer></ProductContainer><br/>
                        <ProductContainer></ProductContainer>
                </div>
            </div>
        )
    }
}

export default ExploreContainer
