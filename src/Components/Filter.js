import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartState } from '../Contexts/Context';
import Rating from './Rating';


const Filter = () => {

    const [rating, setRating] = useState(2);

    const {productState: { byStock, byFastDelivery, sort, byRating, searchQuery},
         productDispatch} = CartState();

  return (
    <div className = "fitlers mobile-filter rounded mt-4">
        <span className = "title branded-white fs-5">Filter Products</span>

        <label class="radio-container mt-3">Ascending
        <input type="radio" name="group1"
            onChange = {() =>
                productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh"})}
            checked={sort === "lowToHigh"? true: false}/>
        <span class="radio-checkmark"></span>
        </label>

        <label class="radio-container mt-1">Descending
        <input type="radio" name="group1"
            onChange = {() =>
                productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow"})}
            checked={sort === "highToLow"? true: false}/>
        <span class="radio-checkmark"></span>
        </label>

        <label className="check-container check-label mt-2">Include Out of Stock
            <input type="checkbox" 
             onChange ={() => 
                productDispatch({
                    type: "FILTER_BY_STOCK",
                })}
                checked = {byStock}
            />
            <span className="checkmark "></span>
         </label>

         <label className="check-container check-label mt-2">Fast Delivery
            <input type="checkbox" 
                onChange = {() =>
                    productDispatch({
                        type: "FILTER_DELIVERY",
                    })}
            />
            <span className="checkmark "></span>
         </label>

        <span>
            <label style={{paddingRight: 10}}>Rating</label>
            <Rating 
                rating={byRating} 
                onClick={(i)=>
                    productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i+1,
                    })
                }
                stlye ={{ cursor: "pointer"}}
                fontSize={`20px`}/>
        </span>
        <Button 
            className ="bg-orange mt-5 clear-btn"
            onClick = {() => 
            productDispatch({
                type: "CLEAR_FILTERS",
            })
        }>Clear Filters</Button>
    </div>
  )
}

export default Filter