import * as actionTypes from './shopping-types';

const initialState = {
    products : [
      {
        "id": 1,
        "category": "Tequeños",
        "name": "Tequeño de queso",
        "image":"imagen",
        "price":2000,
    },
    {
        "id": 2,
        "category": "Tequeños",
        "name": "Tequeño de queso y bocadillo",
        "image":"imagen",
        "price":2500,
    },
    {
        "id": 3,
        "category": "Tequeños",
        "name": "Tequeño de queso y tomates secos",
        "image":"imagen",

        "price":2500,
    },
    {
        "id": 4,
        "category": "Empanadas",
        "name": "Empanada de queso",
        "image":"imagen",
        "price":2500,
    },
    {
        "id": 5,
        "category": "Empanadas",
        "name": "Empanada de carne desmechada",
        "image":"imagen",
        "price":3000,
    },
    {
        "id": 6,
        "category": "Empanadas",
        "name": "Empanada de pollo",
        "image":"imagen",

        "price":2500,
    },
    {
        "id": 7,
        "category": "Empanadas",
        "name": "Empanada de pabellon",
        "image":"imagen",
        "price":4000,
    },
    {
        "id": 8,
        "category": "Pasteles",
        "name": "Pastel de yuca",
        "image":"imagen",
        "price":3000,
    },
    {
        "id": 9,
        "category": "Pasteles",
        "name": "Pastel de napolitano",
        "image":"imagen",
        "price":2000,
    },
    {
        "id": 10,
        "category": "Pasteles",
        "name": "Pastel de carne",
        "image":"imagen",
        "price":2000,
    },
    {
        "id": 11,
        "category": "Pasteles",
        "name": "Pastel de pollo",
        "image":"imagen",
        "price":2000,
    },
    {
        "id": 12,
        "category": "Bebidas frias",
        "name": "Jugo de guayaba",
        "image":"imagen",
        "price":1500,
    },
    {
        "id": 13,
        "category": "Bebidas frias",
        "name": "Jugo de piña",
        "image":"imagen",
        "price":1500,
    },
    {
        "id": 14,
        "category": "Bebidas frias",
        "name": "Jugo de guanabana",
        "image":"imagen",
        "price":1500,
    },
    {
        "id": 15,
        "category": "Bebidas frias",
        "name": "Coca-cola",
        "image":"imagen",
        "price":1500,
    },
    {
        "id": 16,
        "category": "Merengadas",
        "name": "Jugo de mora",
        "image":"imagen",
        "price":4000,
    },
    {
        "id": 17,
        "category": "Merengadas",
        "name": "Jugo de maracuyá",
        "image":"imagen",
        "price":4000,
    },
    {
        "id": 18,
        "category": "Merengadas",
        "name": "Jugo de lulo",
        "image":"imagen",
        "price":4000,
    },
    {
        "id": 19,
        "category": "Bebidas calientes",
        "name": "Café",
        "image":"imagen",
        "price":2000,
    },
    {
        "id": 20,
        "category": "Bebidas calientes",
        "name": "Chocolate",
        "image":"imagen",
        "price":2500,
    },
    {
        "id": 21,
        "category": "Bebidas calientes",
        "name": "Tinto",
        "image":"imagen",
        "price":1300,
    },
    {
        "id": 22,
        "category": "Bebidas calientes",
        "name": "Aromática",
        "image":"imagen",
        "price":1300,
    },
    ],

    cart : [
    ],
      }
      
      const shopReducer = (state = initialState, action) => {
      
        switch (action.type) {
          case actionTypes.ADD_TO_CART:
            
          //Get the items data from the products array
            const item = state.products.find(prod => prod.id === action.payload.id);
            //Check if item is in cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
              ...state,
              cart: inCart ? state.cart.map(
                item => item.id === action.payload.id ?
                  { ...item, qty: item.qty + 1 } : item)
                : [...state.cart, { ...item, qty: 1 }],
            };
          case actionTypes.REMOVE_FROM_CART:
            return {
              ...state,
              cart: state.cart.filter(item => item.id !== action.payload.id)
            };
          case actionTypes.ADJUST_ITEM_QTY:
            return {
              ...state,
              cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: +action.payload.qty } : item)
            };
          default:
            return state;
        }
      }
      export default shopReducer;
      