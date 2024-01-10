import React from 'react'
import { motion } from 'framer-motion'

const Section01 = () => {
    return (
        <section id='section01' className='react__item'>
            <div className="num">01. animate</div>
            <motion.div
                className="circle"
                animate={{
                    x: 300,
                    y: 300,
                    scale: 0.4,
                    borderRadius: "10px"
                }}
            >
            </motion.div>
        </section>
    )
}

export default Section01
