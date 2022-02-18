import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../ProductList/productlist';
import ProductDetail from '../ProductDetail/productdetail';

const Product = ({Products=[]}) => {
    const { id } = useParams();
    console.log(id);
    const isDetail = id !== undefined;
    const olProduct = Products;
    console.log(olProduct);

    if(isDetail){
        console.log(isDetail);
        let oProduct = olProduct.find(element => element.id === parseInt(id));
        console.log(oProduct);
        return (
            <div>
              <ProductDetail Product={oProduct} />
            </div>
          );
    }

    return (
      <div>
      <section className='container'>
          {olProduct.map((oProduct, i) => (
            <ProductList Products={oProduct} key={i}/>
          ))}
      </section>
      </div>
    );
  }
  
  export default Product;