import React from 'react';


function RenderProductItem ({product}) {
    return (
        <div className="product-card">
            <div className="product-top">
                <h3>{product.name}</h3>
                <button className="wishlist"><span className="fa fa-heart fa-2x"></span></button>
            </div>
            <div className="product-image">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="product-info">
                <h3>{product.country}</h3>
                <div className="product-info-tab">
                    <div className="product-info-button">
                        <button><span className="fa fa-shopping-cart fa-2x"></span></button>
                    </div>
                    <div className="product-info-text">
                        <h6>{product.price} €</h6>
                        <h6>{product.priceperunit}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProductGrid = (props) => {
    const productslist = props.products.map((product) => {
        return (
            <div>
                <RenderProductItem product={product} />
            </div>
        );
    });
    return (
        <div className="product-bg">
    
            <nav className="product-filter">
    
                <h1>Produces</h1>
    
                <div className="sort">
    
                    <div className="collection-sort">
                        <label>FILTER BY:</label>
                        <select>
                            <option value="/">All Produces</option>
                            <option value="/">Vegies</option>
                            <option value="/">Fruits</option>
                        </select>
                    </div>
    
                    <div className="collection-sort">
                        <label>SORT BY:</label>
                        <select>
                            <option value="/">Featured</option>
                            <option value="/">Lowest Price</option>
                            <option value="/">Highest Price</option>
                        </select>
                    </div>
    
                </div>
    
            </nav>
    
            <section className="products">
    
                {productslist}
            
            </section>
    
        </div>
    
    )
}

export default ProductGrid;
