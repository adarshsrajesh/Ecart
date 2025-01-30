import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/Slice/prouductSlice'


const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const handleSearch=(searchKey)=>{
   
    dispatch(searchProduct(searchKey.toLowerCase()))

  }
  return (
    <nav className='flex bg-violet-600 justify-between items-center fixed w-full p-5 text-white'>
    <Link className='text-2x1 font-bold' to={'/'} >
    <i className='fa-solid fa-truck-fast me-2'> </i> Daily Cart
    
    </Link>
    <ul>
      { 
      insideHome&&<li className='list-none inline-block px-5'><input onChange={e=>handleSearch(e.target.value)} style={{width:"300px"}}  className='rounded p-2 text-red-600' type='text'
      placeholder='search product here!!!'/> </li>

      }
        
        <Link to={'/Wishlist'}>
          <li className='list-none inline-block px-5'> <i className='fa-solid fa-heart text-red-600'></i>Wishlist <span className='bg-black
          text-white rounded p-1'>{userWishlist?.length}</span>   </li>
        </Link>
        <Link to={'/Cart'}>
           <li className='list-none inline-block px-5'> <i className='fa-solid fa-cart-plus text-green-600'></i>Cart <span className='bg-black
          text-white rounded p-1'>{userCart?.length}</span>   </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header