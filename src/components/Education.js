import { motion, useScroll } from "framer-motion"
import React, { useRef } from 'react'
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, placeLink = "#", info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-10 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                viewport={{ once: true, margin: "-60px" }}
                className='pl-8 md:pl-6'
            >
                <h3 className='font-black text-xl dark:text-light sm:text-lg xs:text-base'>{type}</h3>
                <span className='text-sm font-medium text-muted mt-1 block xs:text-xs'>
                    {time} &nbsp;·&nbsp;{' '}
                    <a
                        href={placeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-primary dark:text-primaryDark hover:underline underline-offset-2'
                    >
                        {place}
                    </a>
                </span>
                <p className='font-medium text-dark/75 dark:text-light/70 mt-3 leading-relaxed md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <section className='my-32 md:my-20'>
            <div className='w-full text-center mb-16 md:mb-10'>
                <p className='text-xs font-bold uppercase tracking-widest text-muted mb-2'>Academic Background</p>
                <h2 className='font-black text-6xl dark:text-light md:text-5xl xs:text-4xl'>
                    <span className='text-gradient'>Education</span>
                </h2>
            </div>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[3px] h-full bg-gradient-to-b from-primary via-primaryDark to-primary origin-top rounded-full
                    md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="B.S. Computer Science, Minor in Philosophy"
                        time="2019 – 2023"
                        place="Florida Institute of Technology"
                        placeLink="https://www.fit.edu/"
                        info="GPA 3.93 — Summa Cum Laude. Relevant coursework: Data Structures & Algorithms, Database Systems, Big Data, Probability & Statistics, Machine Learning, and Web Development."
                    />
                    <Details
                        type="High School Diploma"
                        time="2011 – 2018"
                        place="Hillview College"
                        placeLink="http://hillviewcollege.edu.tt/"
                        info="GPA 4.0 — Awarded the highest distinctions (Grade 1) at CAPE and CSEC examinations. Received a national scholarship from the Government of Trinidad and Tobago. Ranked Top 2 in the entire Caribbean in Information Technology."
                    />
                </ul>
            </div>
        </section>
    )
}

export default Education
