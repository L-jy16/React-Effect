import React from 'react'
import { motion } from 'framer-motion'

const Section02 = () => {
    return (
        <section id='section02' className='react__item'>
            <div className="num">02. animate</div>
            <motion.div
                className="circle"
                whileHover={{
                    scale: 0.4,
                    borderRadius: "10px",
                    rotate: 180
                }}
                whileTap={{
                    scale: 1.6,
                    rotate: -180,
                    borderRadius: "0px",
                }}
            >
            </motion.div>
        </section>
    )
}

export default Section02
