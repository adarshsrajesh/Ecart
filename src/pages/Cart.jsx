import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/Slice/cartSlice'

const Cart = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(() => {
    if(userCart.length>0){
      setCartTotal(userCart?.map(product => product.totalPrice)?.reduce((a, b) => a + b))


    }


  }, [userCart])

 const clearCart = (userCart)=>{
  dispatch(emptyCart())
 }
 const checkout = ()=>{
  dispatch(emptyCart())
  alert("order confirmed")
  navigate("/")
 }
  const handleIncrement = (product)=>{
    dispatch(incrementQuantity(product))
    


  }
  const handleDecrement = (product)=>{
    if(product.quantity>1)
    dispatch(decrementQuantity(product))
  else{
    dispatch(removeCartItem(product))
  }
    


  }

  const handleRemove = (product)=>{
    dispatch(removeCartItem(product))
  }
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>

        {
          userCart?.length > 0 ?
            <>
              <h1 className='text-5xl font-bold text-blue-600'>cart summary...</h1>
              <div className='grid grid-cols-3 gap-4 mt-5'>
                <div className='col-span-2 border rounded p-5 shadow'>
                  <table className='table-auto w-full'>
                    <thead>
                      <tr>
                        <td className='font-semibold'>#</td>
                        <td className='font-semibold'>Name</td>
                        <td className='font-semibold'>Image</td>
                        <td className='font-semibold'>Quantity</td>
                        <td className='font-semibold'>Price</td>
                        <td className='font-semibold'>...</td>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      userCart.map((product,index)=>(
                        <tr>
                        <td>{index+1}</td>
                        <td> {product?.title}</td>
                        <td><img src={product?.thumbnail} alt="" /></td>
                        <td>
                          <div className='flex'>
                            <button onClick={()=>handleDecrement(product)}>-</button>

                            <input style={{ width: '40px' }} type="text" className='border rounded p-1 mx-2' value={product?.quantity} />

                                                        <button onClick={()=>handleIncrement(product)}>+</button>

                          </div>
                        </td>
                        <td>{product.price}</td>
                        <td>
                          <button onClick={()=>handleRemove(product)} className='text-red-500'><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                      ))
                     }
                    </tbody>
                  </table>
                  <div className='float-right mt-5'>
                    <button onClick={()=>clearCart(userCart)} className='bg-red-500 rounded p-2 mx-5'>Empty Cart</button>
                    <Link to={'/'}>
                      <button className='bg-blue-500 p-2 rounded'>Shop More</button>

                    </Link>
                  </div>



                </div>
                <div className='col-span-1'>
                  <div className='border rounded shadow p-5'>

                    <h2 className='text-2xl-bold font-bold text-center my-2'>Total Amount: <span className='text-red-600'>{cartTotal}</span></h2>
                    <hr />
                    <button onClick={checkout} className='mt-5 bg-green-600 w-full p-2'>Checkout</button>

                  </div>

                </div>

              </div>
            </> :
            <div className='flex flex-col justify-center items-center'>
              <img width={'600px'} src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
              <h1 className='text-red-600'>cart Empty</h1>
            </div>

        }



      </div>
    </>
  )
}

export default Cart