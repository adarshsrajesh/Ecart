import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state,actionFromView)=>{
            state.push(actionFromView.payload)
        },
        removeFromWishlist:(state,actionFromWishlist)=>{
            return state.filter(product=>product.id!=actionFromWishlist.payload)
        }
    }
})
export const{addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer