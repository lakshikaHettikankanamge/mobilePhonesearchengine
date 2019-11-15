import React, { Component } from 'react'
import {Row,Container,Col} from 'reactstrap'

class PhoneScreen extends Component {
  render() {
    return (
      <div className='PhoneScreen'>
        <div className='bg-light'>
            <div className='inner'>
                <Container className='product'>
                    <Row>
                    <Col xs="6" sm="4">
                        <img src={require('../img/samsung-galaxy-j2-duos-2017.jpg')} alt="samsung-galaxy-j2-duos-2017"></img>
                    </Col>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col sm="4">.col-sm-4</Col>
                    </Row>
                </Container>
            </div>
        </div>
      </div>
    )
  }
}

export default PhoneScreen
