// import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { AnimatePresence } from 'framer-motion'; // use to animate something out of a component or a page


const containerVariants = {
  hidden:{
    opacity: 0,
    x: "100vw"
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type: "spring",
      mass: 0.4,
      damping:8,
      when: "beforeChildren",
      staggerChildren: 0.5 
    }
  },
  exit:{
    x:"-1000vw",
    transition:{
      ease:"easeInOut"
    }
  }
}
const childVariant={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}



const Order = ({ pizza, setShowModal }) => {
  // const [showTitle, setShowTitle] = useState(true);
  // setTimeout(()=>{
  //   setShowTitle(false)
  // },4000) // callback function, the function runs after 4secs

  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    }, 5000) 
  },[setShowModal])
  return (
    <motion.div className="container order" 
    variants={containerVariants}
    initial="hidden"
    animate={"visible"}
    exit="exit"
    > 
    {/* <AnimatePresence>
      {showTitle && ( // if showTitle = true say the below 
      <motion.h2
       exit={{y:-1000}}
      >
        Thank you for your order :)
      </motion.h2> 
    )} 
    </AnimatePresence> */}
        <h2>Thank you for your order :)</h2>
      <motion.p
       variants={childVariant}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
     <motion.div
       variants={childVariant}
      //  initial="hidden"
      //  animate="visible"

     >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)
     }</motion.div> 
    </motion.div>
  )
}

export default Order;