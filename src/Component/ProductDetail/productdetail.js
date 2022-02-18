import React from 'react';

const ProductDetail = ({ Product }) => {
  console.log(Product);
  if(Product === undefined){
      return (
        <p>Cargando información...</p>
      )
  }
  const oProduct = Product;
  return (
    <section className='container'>
        
          <div className="card">
          <img src={oProduct.image} alt="" />
          <div className="card-body">
            <div className="row">
              <div className="card-title">
                <h4>{oProduct.title}</h4>
              </div>
            </div>
            <div className='row'>
                <h3>${oProduct.price}</h3>
                <h3>{oProduct.category}</h3>
            </div>
            <div className='row'>
            </div>
            <hr />
            <p>
                {oProduct.description}
            </p>
          </div>
        </div>
          
    </section>
  );
}

export default ProductDetail;