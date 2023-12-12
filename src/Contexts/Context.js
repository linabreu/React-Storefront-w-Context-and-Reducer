import React, { useReducer } from 'react';
import { createContext, useContext } from 'react';
import { cartReducer, productReducer } from './Reducer';


const Cart = createContext()
//0,3,5,7


const products = [

    {
        id: 1,
        name: 'Abigail',
        price: 1299.99,
        image: require('../Images/Abigail.jpg'),
        //image: 'dining_table.jpg',
        inStock: 3,
        fastDelivery: false,
        rating: 4,
        category: 'sofa'
      },
      {
        id: 2,
        name: 'Bartholomew',
        price: 1499.99,
        image: require('../Images/Bartholomew.jpg'),
        inStock: 5,
        fastDelivery: false,
        rating: 3,
        category: 'sofa'
      },
      {
        id: 3,
        name: 'Clementine',
        price: 1099.99,
        image: require('../Images/Clementine.png'),
        inStock: 5,
        fastDelivery: false,
        rating: 5,
        category: 'sofa'
      },
      {
        id: 4,
        name: 'Digby',
        price: 1029.99,
        image: require('../Images/Digby.png'),
        inStock: 3,
        fastDelivery: false,
        rating: 4,
        category: 'sofa'
      },
      {
        id: 5,
        name: 'Eleanor',
        price: 1199.99,
        image: require('../Images/Eleanor.png'),
        inStock: 0,
        fastDelivery: false,
        rating: 3,
        category: 'sofa'
      },
      {
        id: 6,
        name: 'Ferdinand',
        price: 1699.99,
        image: require('../Images/Ferdinand.png'),
        inStock: 0,
        fastDelivery: true,
        rating: 4.5,
        category: 'sofa'
      },
      {
        id: 7,
        name: 'Gertrude',
        price: 1399.99,
        image: require('../Images/Gertrude.png'),
        inStock: 3,
        fastDelivery: false,
        rating: 5,
        category: 'sofa'
      },
      {
        id: 8,
        name: 'Harold',
        price: 799.99,
        image: require('../Images/Harold.png'),
        inStock: 0,
        fastDelivery: false,
        rating: 3,
        category: 'chair'
      },
      {
        id: 9,
        name: 'Imogene',
        price: 599.99,
        image: require('../Images/Imogene.png'),
        inStock: 3,
        fastDelivery: true,
        rating: 4.5,
        category: 'chair'
      },
      {
        id: 10,
        name: 'Jasper',
        price: 599.99,
        image: require('../Images/Jasper.png'),
        inStock: 5,
        fastDelivery: false,
        rating: 3,
        category: 'chair'
      },
      {
        id: 11,
        name: 'Matilda',
        price: 899.99,
        image: require('../Images/Matilda.png'),
        inStock: 5,
        fastDelivery: false,
        rating: 5,
        category: 'chair'
      },
      {
        id: 12,
        name: 'Nathaniel',
        price: 1499.99,
        image: require('../Images/Nathaniel.png'),
        inStock: 3,
        fastDelivery: true,
        rating: 3,
        category: 'cabinet'
      },
      {
        id: 13,
        name: 'Octavia',
        price: 899.99,
        image: require('../Images/Octavia.png'),
        inStock: 5,
        fastDelivery: false,
        rating: 2,
        category: 'cabinet'
      },
      {
        id: 14,
        name: 'Percival',
        price: 1129.99,
        image: require('../Images/Percival.png'),
        inStock: 9,
        fastDelivery: true,
        rating: 4,
        category: 'cabinet'
      },
      {
        id: 15,
        name: 'Prudence',
        price: 1189.99,
        image: require('../Images/Prudence.png'),
        inStock: 0,
        fastDelivery: false,
        rating: 5,
        category: 'socabinetfa'
      },
      {
        id: 16,
        name: 'Quentin',
        price: 699.99,
        image: require('../Images/Quentin.png'),
        inStock: 7,
        fastDelivery: false,
        rating: 5,
        category: 'cabinet'
      },
      {
        id: 17,
        name: 'Rosalind',
        price: 799.99,
        image: require('../Images/Rosalind.png'),
        inStock: 9,
        fastDelivery: false,
        rating: 5,
        category: 'cabinet'
      },
      {
        id: 18,
        name: 'Silas',
        price: 799.99,
        image: require('../Images/Silas.png'),
        inStock: 0,
        fastDelivery: false,
        rating: 5,
        category: 'floor lamp'
      },
      {
        id: 19,
        name: 'Tabitha',
        price: 449.99,
        image: require('../Images/Tabitha.png'),
        inStock: 0,
        fastDelivery: true,
        rating: 4,
        category: 'floor lamp'
      },
      {
        id: 20,
        name: 'Tobias',
        price: 599.99,
        image: require('../Images/Tobias.png'),
        inStock: 3,
        fastDelivery: false,
        rating: 5,
        category: 'floor lamp'
      },
      {
      id: 21,
      name: 'Ursula',
      price: 599.99,
      image: require('../Images/Ursula.png'),
      inStock: 3,
      fastDelivery: false,
      rating: 3,
      category: 'floor lamp'
    },
    {
      id: 22,
      name: 'Virgil',
      price: 899.99,
      image: require('../Images/Virgil.png'),
      inStock: 5,
      fastDelivery: false,
      rating: 3,
      category: 'floor lamp'
    },
    {
      id: 23,
      name: 'Winifred',
      price: 499.99,
      image: require('../Images/Winifred.png'),
      inStock: 5,
      fastDelivery: false,
      rating: 5,
      category: 'table lamp'
    },
    {
      id: 24,
      name: 'Zebulon',
      price: 459.99,
      image: require('../Images/Zebulon.png'),
      inStock: 0,
      fastDelivery: false,
      rating: 5,
      category: 'table lamp'
    },
    {
      id: 25,
      name: 'Ada',
      price: 449.99,
      image: require('../Images/Ada.png'),
      inStock: 5,
      fastDelivery: true,
      rating: 3,
      category: 'table lamp'
    },
    {
      id: 26,
      name: 'Archibald',
      price: 499.99,
      image: require('../Images/Archibald.png'),
      inStock: 3,
      fastDelivery: true,
      rating: 2,
      category: 'table lamp'
    },
    {
      id: 27,
      name: 'Beatrice',
      price: 699.99,
      image: require('../Images/Beatrice.png'),
      inStock: 7,
      fastDelivery: false,
      rating: 5,
      category: 'sofa'
    },
    {
      id: 28,
      name: 'Clarence',
      price: 1379.99,
      image: require('../Images/Clarence.png'),
      inStock: 9,
      fastDelivery: true,
      rating: 3,
      category: 'rug'
    },
    {
      id: 29,
      name: 'Dorothy',
      price: 1179.99,
      image: require('../Images/Dorothy.png'),
      inStock: 0,
      fastDelivery: false,
      rating: 5,
      category: 'rug'
    },
    {
      id: 30,
      name: 'Ezekiel',
      price: 1299.99,
      image: require('../Images/Ezekiel.png'),
      inStock: 5,
      fastDelivery: false,
      rating: 5,
      category: 'rug'
    },
    {
      id: 31,
      name: 'Millicent',
      price: 1249.99,
      image: require('../Images/Millicent.png'),
      inStock: 3,
      fastDelivery: false,
      rating: 5,
      category: 'rug'
    },
    {
      id: 32,
      name: 'Eudora',
      price: 1249.99,
      image: require('../Images/Eudora.png'),
      inStock: 5,
      fastDelivery: true,
      rating: 4,
      category: 'rug'
    },
    {
      id: 33,
      name: 'Ambrose',
      price: 449.99,
      image: require('../Images/Ambrose.png'),
      inStock: 6,
      fastDelivery: false,
      rating: 4,
      category: 'pendant light'
    },
    {
      id: 34,
      name: 'Thaddeus',
      price: 249.99,
      image: require('../Images/Thaddeus.png'),
      inStock: 0,
      fastDelivery: false,
      rating: 5,
      category: 'pendant light'
    },
    {
      id: 35,
      name: 'Winona',
      price: 339.99,
      image: require('../Images/Winona.png'),
      inStock: 7,
      fastDelivery: false,
      rating: 5,
      category: 'pendant light'
    },
    {
      id: 36,
      name: 'Montgomery',
      price: 449.99,
      image: require('../Images/Montgomery.png'),
      inStock: 3,
      fastDelivery: false,
      rating: 4,
      category: 'pendant light'
    },
    {
      id: 37,
      name: 'Mabel',
      price: 249.99,
      image: require('../Images/Mabel.png'),
      inStock: 9,
      fastDelivery: true,
      rating: 5,
      category: 'pendant light'
    },
    {
      id: 38,
      name: 'Adelaide',
      price: 249.99,
      image: require('../Images/Adelaide.png'),
      inStock: 5,
      fastDelivery: true,
      rating: 4,
      category: 'table'
    },
    {
      id: 39,
      name: 'James',
      price: 449.99,
      image: require('../Images/James.png'),
      inStock: 0,
      fastDelivery: false,
      rating: 5,
      category: 'table'
    }, 
    {
      id: 40,
      name: 'Viola',
      price: 559.99,
      image: require('../Images/Viola.png'),
      inStock: 5,
      fastDelivery: false,
      rating: 5,
      category: 'table'
    }, 
    {
      id: 41,
      name: 'Horatio',
      price: 449.99,
      image: require('../Images/Horatio.png'),
      inStock: 3,
      fastDelivery: true,
      rating: 4,
      category: 'table'
    }, 
    {
      id: 42,
      name: 'Salvator',
      price: 349.99,
      image: require('../Images/Salvator.png'),
      inStock: 5,
      fastDelivery: false,
      rating: 4,
      category: 'table'
    }
]

const Context = ({ children }) => {

 const [state, dispatch] = useReducer(cartReducer, {
    products:products,
    cart:[]
 });

 const [productState, productDispatch] = useReducer(productReducer, {
  byStock:false,
  byFastDelivery: false,
  byRating:0,
  searchQuery: "",
 })

  return (
    <div>
        <Cart.Provider value = {{state, dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    </div>
  )
}

export default Context
export  const CartState = () => {
    return useContext(Cart)
}
