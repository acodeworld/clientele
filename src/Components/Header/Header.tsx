import React, {useState} from 'react'
import "./Header.scss"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom'

import { motion } from "framer-motion"



const Header = (props : any) => {

    console.log("header rendered")
  return (
    <div className="container-nav">
        <nav>
            
            <motion.div className="nav-left"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 1.7,
                }}
            
            >
                <MenuIcon 
                    className='burger-icon icon'
                    onClick={props.handleToggle}
                />
            </motion.div>

            <div className="nav-center">
                <Link to="/" style={{ textDecoration: 'none' }}><h1 className='nav-title'>CLIENTELE</h1></Link>
            </div>

            <motion.div 
                className="nav-right"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{duration: 1.7,}}
            >
                <SearchIcon className='icon icon-right'/>
                <div>
                <WorkOutlineIcon className='icon icon-right'/>
                </div>

            </motion.div>
        </nav>
    </div>
  )
}

export default Header