import { SET_PRODUCTS } from "../Constants/actionTypes"


const setProducts=(products)=>{
    return{
        type: SET_PRODUCTS,
        payload: products
    }
}

export {setProducts}