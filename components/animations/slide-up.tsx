'use client'


import { duration } from 'drizzle-orm/gel-core';
import { motion, stagger } from 'motion/react'
import React, { ReactNode } from 'react'



type Props = {
    children: ReactNode;
    time: number;

}

const SlideUp = ({ children, time }: Props) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                duration: time,
            },
        },


    };
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
        // transition={{ duration: time, ease: "anticipate" }}
        > {children} </motion.div>
    )
}


export default SlideUp;

