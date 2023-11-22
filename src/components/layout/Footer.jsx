// Write all the code here
import React from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h2>Burger Shop</h2>
          <p>We are trying to give you the best taste possible.</p>
          <p>We give attention to genuine feedback. All rigght received @burgershop</p>
        </div>
        <aside>
          <h4>Follow Us</h4>
          <a href='/'><IoLogoYoutube /></a>
          <a href='/'><IoLogoInstagram /></a>
          <a href='/'><IoLogoGithub /></a>
        </aside>
      </footer>
    </>
  )
}

export default Footer