import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardDeck} from 'reactstrap';


function RenderProductItem ({product}) {
    return (
        <CardDeck>
            <Card className="">
                <CardTitle>{product.name}</CardTitle>
                <CardImg src={product.image} alt={product.name} />
                <CardText>{product.country}</CardText>
                <CardText>{product.price}</CardText>
                <CardText>{product.priceperunit}</CardText>
            </Card>
        </CardDeck>
    );
}

const Product = (props) => {
    const productslist = props.products.map((product) => {
        return (
            <div className="col-12 col-md-3 m-2">

                    <RenderProductItem product={product} />

            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                {productslist}
            </div>

        </div>
    )
}

export default Product;