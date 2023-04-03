import React from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const {theme} = state;


  return (
    <footer className={`${theme}`}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
