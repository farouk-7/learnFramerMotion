import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden:{
    opacity:0,
    x:"100vw"
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:"spring", delay:0.5
    }
  },
  exit:{
    x:"-1000vw",
    transition:{
      ease:"easeInOut"
    }
  }
}
const buttonVariants={
  // visible:{
  //   x:[0,-20,20,-20,20,0], keyFrame rep in an array. moves horizontally from initial position to the left then right then left then right then back to initial position
  //   transition:{delay:2}
  // },
    hover:{
      // scale:[1,1.1,1,1.1,1,1.1,1], //keyframe used here too, when we hover, the button scales
      scale:1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:0.3, // controls the duration of the keyframe
        yoyo: Infinity // this is use for repeating keyframes instaed of the array method
      }
    }
 }


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
     variants={containerVariants}
     initial="hidden"
     animate="visible"
     exit={"exit"}
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{
              scale:1.3,
              color:"#f8e112",
              originX:0
            }}
            transition={{type:"spring", stiffness:300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
         variants={buttonVariants}
         whileHover={"hover"}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;