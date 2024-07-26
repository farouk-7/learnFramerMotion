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
const nextVariants = {
  hidden:{
    x:"-100vw"
  },
  visible:{
    x:0,
    transition:{
      type:"spring", stiffness:120
    }
  },
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

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
    // initial={{x:"100vw"}}
    // animate={{x:0}}
    variants={containerVariants}
    initial="hidden"
    animate={"visible"}
    exit={"exit"}
    // transition={{type:"spring", delay:0.5}}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{
              scale:1.3,
              color:"#f8e112",
              originX:0
            }}
            transition={{type:"spring", stiffness:300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariants}
        // initial={"hidden"} this would be inherited from the parents as long as its the same name 
        // animate={"visible"} this would be inherited from the parents as long as its the same name 
        // initial={{x: "-100vw"}}
        // animate={{x:0}}
        // transition={{type:"spring", stiffness:120}}
        >
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
            whileHover={"hover"}
             >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;