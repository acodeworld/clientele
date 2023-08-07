import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-left-container">
        <h2>Join our clientele</h2>
        <input type="text" placeholder='EMAIL ADDRESS' />
      </div>

      <div className="footer-right-container">
        <ul>
          <li>CONTACT</li>
          <li>TERMS</li>
          <li>SHIPPING</li>
          <li>SOCIAL</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer
