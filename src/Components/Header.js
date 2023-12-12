import React from 'react';
import { Badge, Button, Dropdown, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../Contexts/Context';
import { IoMdClose } from "react-icons/io";

function Header() {

const {
  state: { cart },
  dispatch,
  productDispatch
} = CartState();

  return (
    <>
    <Navbar expand="lg" className = "bg-blue">
      <Container>
          <Navbar.Brand>
            <Link to = "/" className = "branded fs-2" >MidMod</Link>
          </Navbar.Brand>
          <Link to = "/shop" className = "text-white text-decoration-none branded blk-outline" >Shop</Link>
          <Navbar.Text className = 'search'>
            <FormControl 
                 
                placeholder = "Seach"
                className = "m-auto"
                onChange = {(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
            />
          </Navbar.Text>
        <Nav className = "bg-orange rounded drop-down-nav">
            <Dropdown className = "bg-orange" align="end">
                <Dropdown.Toggle className = "bg-orange" id="dropdown-basic">
                <FaShoppingCart color="white" className = "cart-icon"/>
                <span>{cart.length}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className = "dropdown-tab">
                  { cart.length>0? (
                    <>
                    {cart.map((prod)=> (
                      <span className ="cart-item" key={prod.id}>
                        <img
                          src = {prod.image}
                          className = "cart-item-img"
                          alt = {prod.name}
                        />
                        <div className = "cart-item-detail">
                          <span>{prod.name}</span>
                          <span>${prod.price}</span>
                        </div>
                        <IoMdClose
                          fontSize="20px"
                          style ={{ cursor: "pointer "}}
                          onClick={()=>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload:prod,
                            })}
                        />
                      </span>
                    ))}
                    <Link to = "/cart">
                      <Button style = {{width:"95%", margin: "0 10px"}} className= "bg-orange">
                        Go to Cart
                      </Button>
                    </Link>
                    </>
                  ):(<Dropdown.Item>Cart is Empty!</Dropdown.Item>)}
                    
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header