import React from 'react'
import { motion } from 'framer-motion'

const Section08 = () => {

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <section id='section08' className='react__item'>
            <span className="num">08. svg</span>
            <motion.svg
                xmlns="http://www.w3.org/2000.svg"
                viewBox="0 0 100 100"
                className="circle8"
            >
                <motion.path
                    d="M10 86V19H90V58L80.5 82.5V57L55.5 85V61.5L31.5 85L30.5 56L10 86Z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </section>
    )
}

export default Section08
