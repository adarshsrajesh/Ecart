import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, actionFromComponent) => {

            const existingProduct = state.find(product => product.id == actionFromComponent.payload.id)

            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

                const remainingProducts = state.filter(product => product.id != existingProduct.id)

                state = [...remainingProducts, existingProduct]
            }
            else {
                state.push({ ...actionFromComponent.payload, quantity: 1, totalPrice: actionFromComponent.payload.price })
            }

        },
        incrementQuantity: (state, actionFromCart) => {
            const existingProduct = state.find(product => product.id == actionFromCart.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

            const remainingProducts = state.filter(product => product.id != existingProduct.id)

            state = [...remainingProducts, existingProduct]


        },
        removeCartItem: (state, actionFromCart) => {
            return state.filter(product => product.id != actionFromCart.payload.id)
        },
        decrementQuantity: (state, actionFromCart) => {
            const existingProduct = state.find(product => product.id == actionFromCart.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price

            const remainingProducts = state.filter(product => product.id != existingProduct.id)

            state = [...remainingProducts, existingProduct]

        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})
export default cartSlice.reducer
export const { addToCart, removeCartItem, incrementQuantity,decrementQuantity,emptyCart } = cartSlice.actions
