import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                href="/"
                className='w-14 h-14 bg-dark dark:bg-light text-light dark:text-dark
                flex items-center justify-center rounded-full
                text-sm font-black tracking-widest
                border-2 border-transparent'
                whileHover={{
                    backgroundColor: ["#0a0a0f", "#6366f1", "#818cf8", "#6366f1", "#0a0a0f"],
                    transition: { duration: 1.2, repeat: Infinity },
                }}
                aria-label="Home"
            >
                RM
            </MotionLink>
        </div>
    )
}

export default Logo
