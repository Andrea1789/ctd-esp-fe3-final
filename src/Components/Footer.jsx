import React from 'react'
import {BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
      <div className="logoDh">
        <p>Powered by</p>
        <a href="https://www.digitalhouse.com/" target="_blank" rel="noopener noreferrer">
            <img width={200} src="/images/DH.png" alt='DH-logo' />
          </a>
      </div>
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
           <h3> <BsFacebook/> </h3>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <h3>  <BsInstagram/> </h3>
          </a>
          <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
            <h3> <BsTiktok/> </h3>
          </a>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
           <h3> <BsWhatsapp/> </h3>
          </a>
        </div>
    </footer>
  )
}

export default Footer
