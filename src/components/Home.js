import React from 'react';
import { Link } from 'react-router-dom';
import { motion, transform } from 'framer-motion';

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
   const containerVariants={
    hidden: {
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:1.5,
        duration:1.5
      }
    },
    exit:{
      x:"-1000vw",
      transition:{
        ease:"easeInOut"
      }
    }
   }

 
const Home = () => {
  return (
    <motion.div className="home container"
    variants={containerVariants}
    initial={"hidden"}
    animate={"visible"}
    exit={"exit"}
    >
      <h2> Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button 
         variants={buttonVariants}
        //  animate={"visible"}
         whileHover={"hover"}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;