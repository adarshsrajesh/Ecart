import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts",async ()=>{
    const result = await axios.get("https://dummyjson.com/products")

    sessionStorage.setItem('allProducts',JSON.stringify(result.data.products))
    
    console.log(result.data)
    return result.data.products;
    


})

const productSlice = createSlice({
    name:"products",
    initialState:{
        dummyAllProducts:[],
        allProducts:[],
        loading:false,
        errMsg:""
    },
    reducers:{
        searchProduct: (state,actionByHeader)=>{
            state.allProducts=state.dummyAllProducts.filter(product=>product.title.toLowerCase().includes(actionByHeader.payload))

        }


    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.errMsg=""
        })

        builder.addCase(fetchProducts.pending,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=true
            state.errMsg=""
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.errMsg="err"
        })
    }
})
export const {searchProduct} = productSlice.actions
export default productSlice.reducer