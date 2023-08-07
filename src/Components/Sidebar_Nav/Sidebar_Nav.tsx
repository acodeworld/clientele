import React from 'react'

import "./Sidebar_Nav.scss"
import { motion, AnimatePresence } from "framer-motion"
import {Link}  from 'react-router-dom'

const Sidebar_Nav = ({isToggleOpen, handleToggle} : any) => {


console.log("sidebar rendered")

  return (

    
    <motion.div 
          className='sidebar-container'
          initial={{x: -350}}
          animate={{...isToggleOpen ? {x: 0} : null}}
          transition={{
            duration: 0.8,
          }}
        >   
            <div className='btn-container'>
              <button onClick={() => handleToggle()}>Close</button>
            </div>

            <div className='department mens'>
              <Link to="/mens"><h3>Mens</h3></Link> 
            </div>
            <div className='department womens'>
              <h3>Women</h3>
            </div>
            <div className='department children'>
              <h3>Children</h3>
            </div>
           
        </motion.div>
  )
}


    // <AnimatePresence>
    //   {isToggleOpen && (
    //     <motion.div 
    //       className='sidebar-container'
    //       initial={{ x: -700 }}
    //       animate={{ x: 0 }}
    //       transition={{
    //         duration: 0.8,
    //       }}
    //     >
    //         <h3>Mens</h3>
    //         <h3>Women</h3>
    //     </motion.div>

    //   )}
    // </AnimatePresence>
export default Sidebar_Nav