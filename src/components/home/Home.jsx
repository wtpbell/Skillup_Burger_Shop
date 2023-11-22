// Write all the code here
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className='home'>
        <div>
          <h1>burger shop</h1>
          <p>Give yourself a tastey burger</p>
        </div>   
        <Link to='/menu'>
          Explore Menu
        </Link>   
      </div>
    </>
  )
}

export default Home


