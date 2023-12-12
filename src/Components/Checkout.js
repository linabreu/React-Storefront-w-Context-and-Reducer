import React, { useEffect } from 'react';
import { useState } from 'react';
import { CartState } from '../Contexts/Context';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'; 
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

function Checkout() {

    const {
        state: { cart },
        dispatch,
      } = CartState();

      useEffect(() => {
        setTotal(cart.reduce((acc, current) => acc + (current.price) * current.qty, 0));
      }, [cart]);
      
      const [total, setTotal] = useState();
      const [shippingPrice, SetShippingPrice] = useState(45.00);
      const [tax, setTax] = useState(0.00);



    const [name, setName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [stateName, setStateName] = useState("");
    const [zip, setZip] = useState("");

    const [billName, setBillName] = useState("");
    const [billAddress1, setBillAddress1] = useState("");
    const [billAddress2, setBillAddress2] = useState("");
    const [billCity, setBillCity] = useState("");
    const [billStateName, setBillStateName] = useState("");
    const [billZip, setBillZip] = useState("");

    const autoFillForm = () => {
        setBillName(name);
        setBillAddress1(address1);
        setBillAddress2(address2);
        setBillCity(city);
        setBillStateName(stateName);
        setBillZip(zip);
    }

  return (
    <Container fluid>
<Row>
    <Col lg = {8}>
        <Form className = "border mt-5 mb-5 bg-white checkout-form rounded">
            <h3 className = "text-center mt-2 text-secondary">Shipping Address</h3>
            <Row className="mt-3 mobile-row ">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                    <Form.Group controlId="ship-name" className = "input-field" onChange={(e) => setName(e.target.value)}>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                <Form.Group controlId="ship-add1" onChange={(e) => setAddress1(e.target.value)}>
                    <Form.Control placeholder="Address Line 1" />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                <Form.Group controlId="ship-add2" onChange={(e) => setAddress2(e.target.value)}>
                    <Form.Control placeholder="Address Line 2" />
                </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={5}>
                    <Form.Group controlId="formGridCity" onChange={(e) => setCity(e.target.value)}>
                        <Form.Control placeholder="City"/>
                    </Form.Group>
                </Col>
            <Col lg ={3}>
            <Form.Group controlId="ship-state" onChange={(e) => setStateName(e.target.value)} >
                <Form.Select defaultValue="Choose..." className = "mobile-margin" >
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Form.Select>
            </Form.Group>
            </Col>
            <Col lg ={2} >
            <Form.Group controlId="ship-zip" onChange={(e) => setZip(e.target.value)} > 
                <Form.Control placeholder = "Zip Code" className = "mobile-margin"/>
            </Form.Group>
            </Col>
            <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mb-5 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                    <Form.Group controlId="ship-email" className = "input-field">
                        <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            </Form>

            <ListGroup className = "mb-5">

        <ListGroup.Item>
            <Row>
            <h4 className = "text-center mt-2 text-secondary">Shipping Method</h4>
            <p className = "ship-small text-center text-secondary">Order by 2pm EST to receive by estimated dates below</p>
                <Col lg ={10}>
                    <label className="radio-container mt-1 ship-label">Standard
                        <p className = "ship-small">Typically arrives in 12-15 business days</p>
                        <input type="radio" name="group1"
                        onChange = {() => {SetShippingPrice(45.00); setTax((total*0.10).toFixed(2))}} />
                        <span className="radio-checkmark"></span>
                    </label>
                </Col>
                <Col lg ={1}>
                    <p className = "mt-3 ship-label extra-left-margin">$45.00</p>
                </Col>
            </Row>
        </ListGroup.Item>
        <ListGroup.Item>
            <Row>
                <Col lg ={10}>
                    <label className="radio-container mt-1 ship-label">Expedited
                        <p className = "ship-small">Typically arrives in 5-7 business days</p>
                        <input type="radio" name="group1"
                        onChange = {() => {SetShippingPrice(90.00); setTax((total*0.10).toFixed(2))}}/>
                        <span className="radio-checkmark"></span>
                    </label>
                </Col>
                <Col lg ={1}>
                    <p className = "mt-3 ship-label extra-left-margin">$90.00</p>
                </Col>
            </Row>
        </ListGroup.Item>
        <ListGroup.Item>
            <Row>
                <Col lg ={10}>
                    <label className="radio-container mt-1 ship-label">Overnight
                    <p className = "ship-small">Arrives next business day</p>
                        <input type="radio" name="group1"
                        onChange = {() => {SetShippingPrice(145.00);setTax((total*0.10).toFixed(2)) }}/>
                        <span className="radio-checkmark"></span>
                    </label>
                </Col>
                <Col lg ={1}>
                    <p className = "mt-3 ship-label extra-left-margin">$145.00</p>
                </Col>
            </Row>
        </ListGroup.Item>
    </ListGroup>

    <Form className = "border mt-5 mb-5 bg-white checkout-form rounded">
            <h3 className = "text-center mt-2 text-secondary">Payment Method</h3>
            <Row className="mt-3 mobile-row ">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                    <Form.Group controlId="card-number" className = "input-field">
                        <Form.Control type="text" placeholder="Card Number" />
                    </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={5}>
                    <Form.Group controlId="card-exp">
                        <Form.Control placeholder="Expiration (MM/YY)"/>
                    </Form.Group>
                </Col>
            <Col lg ={5} >
            <Form.Group controlId="card-ccv"> 
                <Form.Control placeholder = "CCV" className = "mobile-margin"/>
            </Form.Group>
            </Col>
            <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mb-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                    <Form.Group controlId="ship-email" className = "input-field">
                        <Form.Control type="text" placeholder="Phone Number" />
                        <p className = "ship-small text-secondary">In case there's a billing issue</p>
                    </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>

            <h3 className = "text-center text-secondary mt-2">Billing Address</h3>
            <Row>
            <Col lg ={1}></Col>
            <Col>
                <label className="check-container check-label text-secondary mobile-left-margin">Same as Shipping Address
                <input type="checkbox" onClick={autoFillForm}/>
                <span className="checkmark "></span>
                </label>
            </Col>
            <Col lg ={1}></Col>
            </Row>

            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                    <Form.Group controlId="checkout-name" className = "input-field">
                        <Form.Control type="text" placeholder="Name" onChange={(e) => setBillName(e.target.value)} value= {billName} />
                    </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                <Form.Group controlId="checkout-add1">
                    <Form.Control placeholder="Address Line 1" onChange={(e) => setBillAddress1(e.target.value)} value= {billAddress1} />
                </Form.Group>
                </Col>
            </Row>
            <Row className="mt-3 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={10}>
                <Form.Group controlId="checkout-add2">
                    <Form.Control placeholder="Address Line 2" onChange={(e) => setBillAddress2(e.target.value)} value= {billAddress2}/>
                </Form.Group>
                </Col>
                <Col lg ={1}></Col>
            </Row>
            <Row className="mt-3 mb-5 mobile-row">
                <Col lg ={1}></Col>
                <Col lg ={5}>
                    <Form.Group controlId="checkout-city">
                        <Form.Control placeholder="City" onChange={(e) => setBillCity(e.target.value)} value= {billCity}/>
                    </Form.Group>
                </Col>
            <Col lg ={3}>
            <Form.Group controlId="checkout-state">
                <Form.Select  onChange={(e) => setBillStateName(e.target.value)} value = {billStateName} className = "mobile-margin">
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </Form.Select>
            </Form.Group>
            </Col>
            <Col lg ={2}>
            <Form.Group controlId="checkout-zip">
                <Form.Control placeholder = "Zip Code" className = "mobile-margin" onChange={(e) => setBillZip(e.target.value)} value= {billZip}/>
            </Form.Group>
            </Col>
            <Col lg ={1}></Col>
            </Row>
            <Row className = "d-flex flex-column align-items-center justify-content-center">
            <Button type ="button" className = "bg-orange mb-4 home-button">Place Order</Button>
            </Row>
        </Form>




        </Col>
        <Col lg = {4}>
            <div className = "total-col mt-5 rounded mb-3">
                <h3 className = "text-center branded-white pt-3 pb-2">Total</h3>
                <p className = "mb-3 text-white text-center" style = {{fontWeight: 700, fontSize: 20}}>Item Subtotal: ${total}</p>
                <p className = "mb-3 text-white text-center" style = {{fontWeight: 700, fontSize: 20}}>Item Tax: ${tax}</p>
                <p className = "mb-3 text-white text-center" style = {{fontWeight: 700, fontSize: 20}}>Shipping: ${shippingPrice}</p>
                <hr className = "w-50 text-white m-auto"></hr>
                <p className = "mb-3 text-white text-center mt-3 pb-3" style = {{fontWeight: 700, fontSize: 30}}>${Number(total + shippingPrice)}</p>
        </div>
        </Col>
    </Row>
    </Container>
  )
}

export default Checkout