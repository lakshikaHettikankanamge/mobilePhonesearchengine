import React from 'react'
import {Card,CardImg,CardText,CardDeck,Row,CardLink} from 'reactstrap'

function ProductContainer() {
    return (
        
        <div >
            <Row>
                <CardDeck className='productContainer'>
                    <Card body className="text-center" outline color="primary">
                            <CardImg className ='cardImg' top  src={require('../img/samsung-galaxy-j2-duos-2017.jpg')}></CardImg>
                            <CardLink href="/Phone">samsung-galaxy-j2-duos-2017</CardLink>
                            <CardText><br/>Rs.13,990</CardText>
                    </Card>    
                    <Card body className="text-center" outline color="primary">
                            <CardImg className ='cardImg' top src={require('../img/samsung-galaxy-j2-duos-2017.jpg')}></CardImg>
                            <CardLink href=".">samsung-galaxy-j2-duos-2017</CardLink>
                            <CardText><br/>Rs.13,990</CardText>
                    </Card>
                    <Card body className="text-center" outline color="primary">
                            <CardImg className ='cardImg' top src={require('../img/samsung-galaxy-j2-duos-2017.jpg')}></CardImg>
                            <CardLink href=".">samsung-galaxy-j2-duos-2017</CardLink>
                            <CardText><br/>Rs.13,990</CardText>
                    </Card>
                    <Card body className="text-center" outline color="primary">
                            <CardImg className ='cardImg' top src={require('../img/samsung-galaxy-j2-duos-2017.jpg')}></CardImg>
                            <CardLink href=".">samsung-galaxy-j2-duos-2017</CardLink>
                            <CardText><br/>Rs.13,990</CardText>

                    </Card>
                </CardDeck>
            </Row>
        </div>
    );
}

export default ProductContainer