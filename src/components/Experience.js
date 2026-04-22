import { motion, useScroll } from "framer-motion"
import React, { useRef } from 'react'
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
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
                <h3 className='font-black text-xl dark:text-light sm:text-lg xs:text-base'>
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-primary dark:text-primaryDark hover:underline underline-offset-2'
                    >
                        @ {company}
                    </a>
                </h3>
                <span className='text-sm font-medium text-muted mt-1 block xs:text-xs'>
                    {time} &nbsp;·&nbsp; {address}
                </span>
                <p className='font-medium text-dark/75 dark:text-light/70 mt-3 leading-relaxed md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <section className='my-32 md:my-20'>
            <div className='w-full text-center mb-16 md:mb-10'>
                <p className='text-xs font-bold uppercase tracking-widest text-muted mb-2'>Career History</p>
                <h2 className='font-black text-6xl dark:text-light md:text-5xl xs:text-4xl'>
                    Work <span className='text-gradient'>Experience</span>
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
                        position="Data Scientist"
                        company="Caribbean Airlines Ltd"
                        companyLink="https://www.caribbean-airlines.com/"
                        time="Nov 2023 – Present"
                        address="Tunapuna-Piarco, Trinidad"
                        work="Spearhead end-to-end data science projects — from data collection and preprocessing through statistical analysis, ML modeling (regression & classification), and stakeholder reporting. Engineer robust ETL pipelines in Python and SQL feeding a central data warehouse, significantly improving data accessibility and consistency. Deploy real-time Power BI and SSRS dashboards delivering KPIs to executive stakeholders. Apply advanced T-SQL and data wrangling to drive insights supporting critical business functions. Visualize findings with Python (Matplotlib, Seaborn) and PowerBI for clear, impactful communication."
                    />
                    <Details
                        position="Information Technology Intern"
                        company="Caribbean Airlines Ltd"
                        companyLink="https://www.caribbean-airlines.com/"
                        time="Jul 2023 – Nov 2023"
                        address="Tunapuna-Piarco, Trinidad"
                        work="Automated operational tasks to improve efficiency and reduce manual intervention. Implemented data wrangling and modeling techniques to ensure accuracy and reliability across analytical workflows."
                    />
                    <Details
                        position="Project Developer"
                        company="Florida Institute of Technology"
                        companyLink="https://www.fit.edu/"
                        time="Jan 2023 – May 2023"
                        address="Melbourne, FL"
                        work="Collaborated with PhD professors to develop an innovative code-to-requirements conversion model, streamlining the software documentation process and enabling direct translation from code to structured requirements — a novel approach within the field."
                    />
                    <Details
                        position="Faculty Supervisor"
                        company="Florida Institute of Technology"
                        companyLink="https://www.fit.edu/"
                        time="Oct 2021 – May 2023"
                        address="Melbourne, FL"
                        work="Managed and coordinated a diverse team of 50 individuals, achieving a 20% increase in productivity and a 15% improvement in satisfaction scores. Maintained a 95% customer satisfaction rate across daily high-volume interactions while driving a 110% increase in revenue through consultative upselling."
                    />
                    <Details
                        position="Mathematics Teacher"
                        company="Hillview College"
                        companyLink="http://hillviewcollege.edu.tt/"
                        time="Jun 2018 – Dec 2018"
                        address="El Dorado, Trinidad"
                        work="Delivered structured mathematics instruction to hundreds of students, collaborating with faculty to design learning programs that measurably improved problem-solving proficiency and academic outcomes."
                    />
                    <Details
                        position="Data Entry Clerk"
                        company="Swissport International"
                        companyLink="https://www.swissport.com/en"
                        time="Jul 2016 – Aug 2016"
                        address="Piarco, Trinidad"
                        work="Gained hands-on data management experience at a $2.8B global cargo company, developing an appreciation for data quality and operational data pipelines — a formative experience that sparked my interest in the data field."
                    />
                </ul>
            </div>
        </section>
    )
}

export default Experience
