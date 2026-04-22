import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group font-medium text-sm tracking-wide`}>
            {title}
            <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 rounded-full
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button className={`${className} relative group text-light dark:text-dark my-3 text-lg font-medium`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 rounded-full
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-5 font-medium flex items-center justify-between
        sticky top-0 z-50
        bg-light/80 dark:bg-dark/80 text-dark dark:text-light
        backdrop-blur-md
        border-b border-dark/5 dark:border-light/5
        transition-colors duration-300
        lg:px-16 md:px-12 sm:px-8'>

            {/* Mobile hamburger */}
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick} aria-label="Toggle menu">
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            {/* Desktop nav */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='flex items-center gap-1'>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                </nav>

                <nav className="flex items-center gap-2">
                    <motion.a
                        href="https://github.com/riad-369"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-5 mx-2 text-dark dark:text-light hover:text-primary dark:hover:text-primaryDark transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/riad-mohammed-25311a221/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-5 mx-2"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        aria-label="Toggle theme"
                        className={`ml-2 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                        hover:scale-110`}
                    >
                        {mode === "dark" ? <SunIcon className="fill-dark w-4 h-4" /> : <MoonIcon className="fill-dark w-4 h-4" />}
                    </button>
                </nav>
            </div>

            {/* Mobile overlay menu */}
            {isOpen && (
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2
                    -translate-y-1/2 bg-dark/95 dark:bg-light/90 rounded-2xl backdrop-blur-xl py-32 shadow-2xl'
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                    </nav>

                    <nav className="flex items-center justify-center gap-4 mt-4">
                        <motion.a
                            href="https://github.com/riad-369"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-6 bg-light rounded-full dark:bg-dark"
                            aria-label="GitHub"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/riad-mohammed-25311a221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-6"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon />
                        </motion.a>

                        <button
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            aria-label="Toggle theme"
                            className={`w-8 h-8 flex items-center justify-center rounded-full
                            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        >
                            {mode === "dark" ? <SunIcon className="fill-dark w-4 h-4" /> : <MoonIcon className="fill-dark w-4 h-4" />}
                        </button>
                    </nav>
                </motion.div>
            )}

            {/* Centered logo */}
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
