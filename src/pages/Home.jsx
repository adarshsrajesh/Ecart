import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../redux/Slice/prouductSlice'

const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())},[])


    const navigateToPreviousPage = ()=>{
      if(currentPage!=1){
        setCurrentPage(currentPage-1)
      }
    }

    const navigateToNextPage = ()=>{
      if(currentPage!=totalPages){
        setCurrentPage(currentPage+1)
      }
    }


    const{allProducts,loading,errMsg}= useSelector(state=>state.productReducer)
    console.log(allProducts,loading,errMsg);
    
    const [currentPage,setCurrentPage]=useState(1)
    const productsPerPage=8
    const totalPages = Math.ceil(allProducts?.length/productsPerPage)
    const currentPageLastIndex = currentPage*productsPerPage
    const currentPageFirstIndex = currentPageLastIndex-productsPerPage
    const visibleAllProducts = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)


    
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          loading?
          <div className='flex flex-col justify-center items-center my-5 text lg'>

            <img width={'200px'} height ={'200px'} src="https://cssbud.com/wp-content/uploads/2022/05/pendulum.gif" alt="" />

            Loading

          </div>
            :
          <>
           <div className='grid grid-cols-4 gap-4'>
          {
            visibleAllProducts?.length>0?visibleAllProducts.map(products=>(
              
           
            <div className=' rounded border p-2 shadow'>
              <img src={products.thumbnail} alt="" />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>{products.title}</h3>
                <Link to={`${products.id}/View`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
  
              </div>
  
            </div>
  
        

            )):
            <div>No Products</div>
            
          }
            </div>
          </>
          
        
        }
        
      </div>
      <div className='text-center my-5'>
        <span className='ms-2' onClick={navigateToPreviousPage}><i class="fa-solid fa-arrow-left"></i></span>
        <span className='mx-4'>{currentPage}of{totalPages}</span>


        <span className='me-2' onClick={navigateToNextPage}><i class="fa-solid fa-arrow-right"></i></span>



      </div>
    </>
  )
}

export default Home