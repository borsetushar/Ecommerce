import { OPEN_CART,CLOSE_CART } from "../Constants/actionTypes"


const openCart=()=>{
    return{
        type: OPEN_CART,
    }
}

const closeCart=()=>{
    return{
        type: CLOSE_CART,
    }
}

export {openCart,closeCart}