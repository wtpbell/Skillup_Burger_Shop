// Write all the code here
import React from 'react';
import { FaSearch } from "react-icons/fa";
import me from "../../assets/skj.jpg";

const About = () => {
  return (
    <>
      <div className='about'>
        <main>
          <h1>about us</h1>
          <article>
            <h4>burger shop</h4>
            <p>This is a Burger Shop. The place for most tasty burgers on the enitre earth.</p>
            <p>Explore the various type of food and burgers. Click below to see the menu.</p>
            <a><FaSearch style={{color: 'white'}}/></a>
          </article>
          <div>
            <h2>FOUNDER</h2>
            <article>
              <div>
                <img src={me}/>
                <h3>Nelson</h3>
              </div>
              <p>I am Nelson, the founder of Burger Shop. Affiliated to God Taste.</p>
            </article>
          </div>
        </main>
      </div>
    </>
  )
}

export default About