import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'300px'}} className='p-5 mt-5 bg-violet-600  '>
      <div className='flex justify-between'>
        {/* intro */}
        <div style={{width:'400px'}}>
          <h5>               <i class="fa-solid fa-music me-3 fs-2"></i>
          Daily Cart  </h5>

          <p>Designed and built with love in the world by luminar team with the help of our contributers</p>
          <p>code liscensed by luminar cc 3.0</p>
          <p>Currently v5.3.2</p>

        </div>
        {/* Links */}
        <div className='flex flex-col'>
          <h5> Links  </h5>
          <Link style={{textDecoration:'none'}} to={'/'}>Landing page</Link>
          <Link style={{textDecoration:'none'}} to={'/home'}>Home page</Link>
          <Link style={{textDecoration:'none'}} to={'/history'}>History page</Link>

  

        </div>  
        {/* Guides */}
        <div className='flex flex-col'>
          <h5> Guides  </h5>
          <a style={{textDecoration:'none'}} href="https://react.dev/">React</a>
          <a style={{textDecoration:'none'}} href="https://react-bootstrap.netlify.app/">React Bootsrap</a>
          <a style={{textDecoration:'none'}} href="https://reactrouter.com/">React Router </a>

  

        </div>
        {/* CONTACTS */}
        <div className='flex flex-col '>

          <div className='flex flex-row'>
            <input type="text" className='form-control me-2' placeholder='Enter Your Email' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div> 
          <div className='flex flex-row justify-between mt-2'>
            <a href="https://fontawesome.com/search?q=right%20arrow&o=r"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://fontawesome.com/search?q=right%20arrow&o=r"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://fontawesome.com/search?q=right%20arrow&o=r"><i class="fa-brands fa-github"></i></a>
            <a href="https://fontawesome.com/search?q=right%20arrow&o=r"><i class="fa-solid fa-phone"></i></a>
            <a href="https://fontawesome.com/search?q=right%20arrow&o=r"><i class="fa-brands fa-linkedin"></i></a>


          </div>

        </div>


      



      </div>

    </div>
  )
}

export default Footer