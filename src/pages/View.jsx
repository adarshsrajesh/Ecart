import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/Slice/wishlistSlice'
import { addToCart } from '../redux/Slice/cartSlice'

const View = () => {
  const {id} = useParams()
  console.log(id);
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const[product,setProduct]=useState({})

  useEffect(()=>{
    if(sessionStorage.getItem('allProducts')){
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'))
      console.log(allProducts.find(product=>product.id==id));
      setProduct(allProducts.find(product=>product.id==id))
      


    }

  },[])

  const handleCart = (product)=>{
    dispatch(addToCart(product))
    const existingProduct=userCart?.find(p=>p.id==product.id)
    if(existingProduct){
      alert('total amount incremented')
    }
    else{
      alert('item added to cart')
    }

  }

  const handleWishlist = () =>{
    const existingProduct=userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product already in wishlist")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2  gap-4 items-center h-screen'>

         <div >
              <img className='ms-40' width={'350px'} height={'250px'} src={product.thumbnail} alt="" />
              <div className='flex justify-between mt-5'>
                <button onClick={handleWishlist} className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
                <button onClick={()=>handleCart(product)} className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
  
              </div>
         </div >

            <div >
              
                <h3 className='font-bold'>{product?.id}</h3>
                <h1 className='text-5xl font-bold'>{product?.title}</h1>
                <h4 className='font-bold text-red-600 text-2xl'>{product?.price}</h4>
                <h4>{product?.brand}</h4>
                <h4>{product?.category}</h4>
                <p>  <span className=' font-bold'>Description</span>: {product?.description}
                </p>
  
              
              
              
            </div>


        


        </div>






      </div>
    </>
  )
}

export default View