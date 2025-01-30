import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/Slice/wishlistSlice'
import { addToCart } from '../redux/Slice/cartSlice'



const Wishlist = () => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
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
  const handleRemove = (id) =>{
    dispatch(removeFromWishlist(id))

  }
  return (
    <div>
      <Header/>
      <div style={{paddingTop:"100px"}} className='px-5'>
        {
          userWishlist?.length>0?
          <>
          <h1 className='text-4xl font-bold text-red-600'>My WishList</h1>
  
          <div className='grid grid-cols-4 gap-4'>
            {
              userWishlist?.map(product=>(
                <div key={product.id} className=' rounded border p-2 shadow'>
                <img src={product.thumbnail} alt="" />
                <div className='text-center'>
                  <h3 className='text-xl font-bold'>{product.title}</h3>
                   <div className='flex justify-evenly mt-3'>
                    <button onClick={()=>handleRemove(product.id)} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i> </button>
                    <button onClick={()=>handleCart(product)} className='text-xl'> <i className='fa-solid fa-cart-plus text-green-600'></i> </button>
                     
                   </div>
    
                </div>
    
              </div>

              ))
            }
           
  
          </div>
          </>
          :
          <div className='flex flex-col justify-center items-center'>
            <img width={'600px'} src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
            <h1 className='text-red-600'>Wishlist Empty</h1>
          </div>

        }
     

      </div>
    </div>
  )
}

export default Wishlist