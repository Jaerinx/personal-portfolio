import {motion} from 'framer-motion'
import { contentVariants } from "../../Framer-Variants/variants";
import { ReactNode } from 'react';


export default function AnimationContainer({children,delay=0}:{children:ReactNode, delay?:number}){
    return(
        <motion.div
      className="flex justify-center items-center z-0"
      variants={contentVariants}
      initial="initial"
      animate="animate" 
      transition={{delay:delay}}
      exit={{ opacity: 0 }}
    >   
        {children}
    </motion.div>
    )
}