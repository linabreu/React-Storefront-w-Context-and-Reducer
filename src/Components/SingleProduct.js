import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { HiXCircle } from "react-icons/hi";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import Rating from './Rating';
import { CartState } from '../Contexts/Context';


const SingleProduct = ({ prod }) => {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  return (
    <div>
    <Card style={{ width: '18rem' }} className = "mb-3 shadowed prod-card">
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title className = "branded-blk text-center">{prod.name}</Card.Title>
        <Card.Text className = "text-center">
          ${prod.price}
        </Card.Text>
        <Card.Subtitle >
          {prod.fastDelivery ? (<div className = "text-center" ><BsLightningChargeFill />Fast Delivery</div>):(<div> </div>)}
          {prod.rating === 5 ? (<div className = "text-center" ><FaHeart/> Customer Favorite</div>):(<div> </div>)}
          <div className = "w-25 mt-2 centered ">
            <Rating rating = {prod.rating} fontSize={`12px`}/>
          </div>
        </Card.Subtitle>
        {!prod.inStock? 
            (
              <Button variant="danger" className = "bg-red centered mt-3">
              <HiXCircle color="white" className = "cart-icon"/> Out of Stock
              </Button>
            )
            :(
              <Button 
                variant="primary" 
                className = "bg-orange centered mt-3"
                onClick= {() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod
                })
                }}
              >
              <FaShoppingCart color="white" className = "cart-icon"/> Add to Cart
              </Button>)}

      </Card.Body>
    </Card>

    </div>
  )
}

export default SingleProduct