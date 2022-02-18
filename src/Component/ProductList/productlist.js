import React, { useState, useEffect, useRef   } from 'react';
import './productlist.scss';

const ProductList = ({ Products=[] }) => {
  const oProduct = Products;
  const futureDate = new Date();
  futureDate.setSeconds(futureDate.getSeconds() + (Math.random()*100));

  const [time,setTime] = useState('00:00');
  const [bDisabled,setDisabled] = useState(' ');
  const savedCallback = useRef();
  
  useEffect(() => {
    savedCallback.current= setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(savedCallback.current);
    };
  }, []);
  
  const tick = () => {
    let actualDate = new Date();
    let timeStamp = new Date(futureDate - actualDate);
    let timer = `${ parseInt(timeStamp/60000).toString().padStart(2, 0) }:${ parseInt((timeStamp/1000)%60).toString().padStart(2, 0)  }`
    if(timeStamp >= 0){
      setTime(timer);
      setDisabled(" ");
    }
    if(parseInt((timeStamp/1000)%60) <= 0)
        setDisabled("not-active");

    
  };
  if(oProduct === undefined){
        return (
        <p>Test</p>
        )
    }
  return (
          <div className="card" key={oProduct.id}>
          <img src={oProduct.image} alt="" />
          <div className="card-body">
            <div className="row">
              <div className="card-title">
                <h4>{oProduct.title}</h4>
              </div>
            </div>
            <div className='row'>
                <h3>${oProduct.price}</h3>
                {time}
              <div className={`view-btn ${bDisabled}`}>
                <a  href={`/product/${oProduct.id}`} >View Details</a>
              </div></div>
            <hr />
            <p>
                {oProduct.description.substring(0,100)}...
            </p>
          </div>
        </div>
  );
}

export default ProductList;