import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4
            md:text-sm md:py-1.5 md:px-3
            xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-black text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
                Skills
            </h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full
            bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

                {/* Center hub */}
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                    p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    Data
                </motion.div>

                <Skill name="Python"           x="-20vw"  y="2vw"    />
                <Skill name="SQL"              x="-5vw"   y="-12vw"  />
                <Skill name="R"                x="23.5vw" y="6vw"    />
                <Skill name="Big Data"         x="0vw"    y="12vw"   />
                <Skill name="Machine Learning" x="-17vw"  y="-25vw"  />
                <Skill name="Statistics"       x="15vw"   y="-12vw"  />
                <Skill name="JavaScript"       x="35vw"   y="-5vw"   />
                <Skill name="C / C++"          x="0vw"    y="-18.5vw"/>
                <Skill name="Tableau"          x="-35.5vw" y="2vw"   />
                <Skill name="Data Analysis"    x="-34vw"  y="-14vw"  />
                <Skill name="Data Science"     x="0vw"    y="22.5vw" />
                <Skill name="Data Engineering" x="18vw"   y="-18.5vw"/>
                <Skill name="Data Visualization" x="35vw" y="14vw"   />
                <Skill name="Power BI"         x="19vw"   y="18vw"   />
                <Skill name="AI"               x="-27vw"  y="19vw"   />
                <Skill name="ETL"              x="-10vw"  y="28vw"   />
                <Skill name="T-SQL"            x="28vw"   y="-23vw"  />
                <Skill name="SSRS"             x="-22vw"  y="-12vw"  />
            </div>
        </>
    )
}

export default Skills
