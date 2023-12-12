import React from 'react';
import { CartState } from '../Contexts/Context';
import { createContext, useContext } from 'react';
import SingleProduct from './SingleProduct';
import Filter from './Filter';

function Home() {

   //const { state } = CartState();
   //console.log(state)
   const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery},
 } = CartState();

 const transformedProducts = () => {
    let sortedProducts = products;
    if (sort) {
        sortedProducts = sortedProducts.sort((a,b) =>
            sort === "lowToHigh" ? a.price -b.price : b.price - a.price
        );
    }
    if(!byStock) {
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery){
        sortedProducts = sortedProducts.filter((prod)=>prod.fastDelivery)
    }
    if (byRating) {
        sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating)
    }
    if (searchQuery) {
        sortedProducts = sortedProducts.filter((prod) => prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts
 }

  return (
    <div className = "home">
        <Filter/>
        <div className = "productContainer">
            {
                transformedProducts().map((prod) => {
                    return<SingleProduct prod = {prod} key ={prod.id}/>
                })
            }
        </div>

    </div>
  )
}

export default Home