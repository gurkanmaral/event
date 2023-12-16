"use client"
import React, { useState } from 'react'
import {motion} from "framer-motion"
import ToggleButton from './ToggleButton'
import Links from './Links'
const Menu = () => {
    const [open, setOpen] = useState(false)
   
    const variants = {
        open: {
          clipPath:"circle(1200px at 50px 50px)",
          transition:{
            type:"spring",
            stiffness:20
          }
        },
        closed:{
          clipPath:"circle(0px at 10px 10px)",
          transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
          }
        }
      }
      
  return (
    <motion.div className="flex flex-col items-center justify-center bg-white text-black"
    animate={open ? "open" : "closed"}
    >
       <motion.div className="fixed top-0 left-0 bottom-0 w-[400px] flex items-center justify-center bg-red-300 z-[999]"
      variants={variants}
      > 
      asdasdasda
      </motion.div> 
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Menu