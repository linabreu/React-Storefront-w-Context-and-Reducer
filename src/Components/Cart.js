import React, { useEffect } from 'react';
import { useState } from 'react';
import { CartState } from '../Contexts/Context';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {

const {
  state: { cart },
  dispatch,
} = CartState();

const [total, setTotal] = useState();

useEffect(() => {
  setTotal(cart.reduce((acc, current) => acc + (current.price) * current.qty, 0));
}, [cart]);

  return (
    <div className = "home">
      <div className = "productContainer">
        <ListGroup className = "w-100">
          {cart.map((prod) => 
            <ListGroup.Item key = {prod.id}>
              <Row>
                <Col>
                  <Image rounded src = {prod.image} alt={prod.name} style = {{ width: "100px" }} className = "mb-2"/>
                </Col>
                <Col>
                  <span className = "branded-blk">{prod.name}</span>
                </Col>
                <Col>
                 ${prod.price}
                </Col>
                <Col>
                  <Form.Control 
                    className = "form-select" as= "select" 
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  
                  
                  >
                    {[...Array(prod.inStock).keys()].map((x)=> (
                      <option key={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                <Button className = "bg-orange m-auto">
                <IoMdClose
                          fontSize="20px"
                          style ={{ cursor: "pointer "}}
                          onClick={()=>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload:prod,
                            })}
                        />
                </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
      <div className = "fitlers summary mt-4 rounded">
          <span className = "branded-white fs-5 mt-3 mb-3 text-center">Subtotal: ( {cart.length} ) item(s)</span>
          <span style = {{fontWeight: 700, fontSize: 20}} className = "mb-3">Total: ${total}</span>
          <Button type ="button" disabled={cart.length === 0} className = "bg-orange clear-btn">
          <Link to = "/checkout" className = "text-white text-decoration-none" >Proceed to Checkout</Link>

          </Button>
      </div>
    
    </div>
  )
}

export default Cart