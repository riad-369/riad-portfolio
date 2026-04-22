import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon } from './Icons'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="w-full border-t border-dark/8 dark:border-light/8 dark:text-light">
            <Layout className='py-10 flex items-center justify-between lg:flex-col lg:gap-6 lg:py-8'>

                {/* Copyright */}
                <span className='text-sm text-muted'>
                    &copy; {new Date().getFullYear()} Riad Mohammed. All rights reserved.
                </span>

                {/* Nav links */}
                <nav className='flex items-center gap-6'>
                    <Link href="/" className='text-sm font-medium text-dark/60 dark:text-light/60 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'>
                        Home
                    </Link>
                    <Link href="/about" className='text-sm font-medium text-dark/60 dark:text-light/60 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'>
                        About
                    </Link>
                    <Link href="/projects" className='text-sm font-medium text-dark/60 dark:text-light/60 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'>
                        Projects
                    </Link>
                    <a
                        href="mailto:riadmohammed40@gmail.com"
                        className='text-sm font-medium text-dark/60 dark:text-light/60 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'
                    >
                        Contact
                    </a>
                </nav>

                {/* Social icons */}
                <div className='flex items-center gap-4'>
                    <motion.a
                        href="https://github.com/riad-369"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        aria-label="GitHub"
                        className='w-5 text-dark/50 dark:text-light/50 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/riad-mohammed-25311a221/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        aria-label="LinkedIn"
                        className='w-5'
                    >
                        <LinkedInIcon />
                    </motion.a>
                </div>

            </Layout>
        </footer>
    )
}

export default Footer
