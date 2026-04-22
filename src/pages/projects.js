import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, LinkArrow } from '@/components/Icons'
import project1 from "../../public/images/projects/fifa-prediction1.png"
import project2 from "../../public/images/projects/nyc-parking.jpeg"
import project3 from "../../public/images/projects/airline.jpeg"
import project4 from "../../public/images/projects/map.png"
import project5 from "../../public/images/projects/mern.jpeg"
import project6 from "../../public/images/projects/war.jpeg"
import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const TechTag = ({ label }) => (
    <span className='text-xs font-semibold px-2.5 py-1 rounded-md
    bg-primary/10 dark:bg-primaryDark/10
    text-primary dark:text-primaryDark
    border border-primary/20 dark:border-primaryDark/20'>
        {label}
    </span>
)

const FeaturedProject = ({ type, title, summary, img, link, github, tags = [] }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-2xl
        border border-dark/10 dark:border-light/10
        bg-light dark:bg-dark
        shadow-lg hover:shadow-xl
        p-10 relative overflow-hidden
        transition-shadow duration-300
        lg:flex-col lg:p-8 xs:p-4'>

            {/* Subtle gradient corner accent */}
            <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px] pointer-events-none' />

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-xl lg:w-full'>
                <FramerImage
                    src={img}
                    alt={title}
                    className='w-full h-auto rounded-xl'
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-8'>
                <span className='text-xs font-bold uppercase tracking-widest text-muted mb-3'>{type}</span>

                <Link href={link} target="_blank" className='group mb-4'>
                    <h2 className='text-3xl font-black leading-tight dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-200 sm:text-2xl'>
                        {title}
                    </h2>
                </Link>

                <p className='font-medium text-dark/70 dark:text-light/65 leading-relaxed mb-5 sm:text-sm'>{summary}</p>

                {tags.length > 0 && (
                    <div className='flex flex-wrap gap-2 mb-6'>
                        {tags.map(t => <TechTag key={t} label={t} />)}
                    </div>
                )}

                <div className='flex items-center gap-4'>
                    <Link href={github} target="_blank" aria-label="GitHub repository"
                        className='w-9 h-9 flex items-center justify-center rounded-lg border border-dark/15 dark:border-light/15
                        hover:border-primary dark:hover:border-primaryDark hover:bg-primary/5 dark:hover:bg-primaryDark/5
                        transition-all duration-200 p-1.5'>
                        <GithubIcon className='text-dark dark:text-light' />
                    </Link>
                    <Link href={link} target="_blank"
                        className='flex items-center gap-2 bg-dark dark:bg-light text-light dark:text-dark
                        px-5 py-2.5 rounded-xl font-semibold text-sm
                        hover:bg-primary dark:hover:bg-primaryDark hover:text-white dark:hover:text-white
                        transition-all duration-200 hover:-translate-y-0.5'
                    >
                        View Project <LinkArrow className="w-3.5" />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github, summary, tags = [] }) => {
    return (
        <article className='w-full flex flex-col rounded-2xl
        border border-dark/10 dark:border-light/10
        bg-light dark:bg-dark
        overflow-hidden
        hover:shadow-lg hover:border-primary/30 dark:hover:border-primaryDark/30
        transition-all duration-300
        group'>

            <Link href={link} target="_blank" className='w-full overflow-hidden block'>
                <div className='overflow-hidden'>
                    <FramerImage
                        src={img}
                        alt={title}
                        className='w-full h-auto'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                </div>
            </Link>

            <div className='flex flex-col items-start p-6 flex-1'>
                <span className='text-xs font-bold uppercase tracking-widest text-muted mb-2'>{type}</span>

                <Link href={link} target="_blank">
                    <h2 className='text-xl font-black mb-3 dark:text-light group-hover:text-primary dark:group-hover:text-primaryDark transition-colors duration-200 lg:text-lg'>
                        {title}
                    </h2>
                </Link>

                {summary && (
                    <p className='text-sm font-medium text-dark/65 dark:text-light/60 leading-relaxed mb-4'>{summary}</p>
                )}

                {tags.length > 0 && (
                    <div className='flex flex-wrap gap-1.5 mb-5 mt-auto pt-4'>
                        {tags.map(t => <TechTag key={t} label={t} />)}
                    </div>
                )}

                <div className='w-full flex items-center justify-between mt-auto pt-3 border-t border-dark/8 dark:border-light/8'>
                    <Link href={link} target="_blank"
                        className='text-sm font-semibold text-primary dark:text-primaryDark flex items-center gap-1.5
                        hover:underline underline-offset-2'>
                        View Project <LinkArrow className="w-3" />
                    </Link>
                    <Link href={github} target="_blank" aria-label="GitHub"
                        className='w-7 text-dark/50 dark:text-light/50 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects — Riad Mohammed | Data Scientist</title>
                <meta name="description" content="Explore Riad Mohammed's data science and machine learning projects, including big data pipelines, ML models, and interactive visualizations." />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    {/* Page heading */}
                    <div className='w-full text-center mb-16 sm:mb-10'>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className='text-sm font-semibold tracking-widest uppercase text-primary dark:text-primaryDark mb-3'
                        >
                            Selected Work
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='text-7xl font-black tracking-tight dark:text-light lg:text-6xl sm:text-5xl xs:text-4xl'
                        >
                            Projects &{' '}
                            <span className='text-gradient'>Case Studies</span>
                        </motion.h1>
                    </div>

                    <div className='grid grid-cols-12 gap-16 gap-y-24 xl:gap-x-12 lg:gap-x-8 md:gap-y-16 sm:gap-x-0'>

                        {/* Featured: FIFA */}
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Machine Learning"
                                title="FIFA World Cup 2022 Prediction Model"
                                summary="Built an ensemble ML model to predict World Cup 2022 match outcomes using historical match data, team ELO ratings, and player statistics. Applied feature engineering and cross-validation to achieve robust predictive accuracy across group stages and knockout rounds."
                                img={project1}
                                link="https://github.com/riad-369/Machine-Learning/blob/main/FIFA_world_cup_prediction.ipynb"
                                github="https://github.com/riad-369/Machine-Learning/blob/main/FIFA_world_cup_prediction.ipynb"
                                tags={["Python", "Scikit-learn", "Pandas", "Feature Engineering", "Jupyter"]}
                            />
                        </div>

                        {/* Featured: fMOW */}
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Deep Learning · Research"
                                title="Functional Map of the World (fMOW) Visualizer"
                                summary="Engineered an interactive web visualization platform for deep learning-based satellite image classification. Analyzed temporal and geographic metadata to surface high-activity patterns, enabling data-driven decision support for geospatial intelligence use cases."
                                img={project4}
                                link="https://fmowbigdata.netlify.app/"
                                github="https://github.com/riad-369/Web-Visualizer-for-Functional-Map-Of-The-World"
                                tags={["Python", "TensorFlow", "React", "D3.js", "Deep Learning", "Computer Vision"]}
                            />
                        </div>

                        {/* NYC Parking */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type="Big Data · Cloud"
                                title="NYC Parking Citation Analysis"
                                summary="Processed 100M+ rows of NYC parking data (2014–2022) using distributed computing on Saturn Cloud with AWS S3 storage, surfacing borough-level citation trends and revenue patterns."
                                img={project2}
                                link="https://github.com/riad-369/Big-Data/blob/main/new_york_parkingdata_analysis.ipynb"
                                github="https://github.com/riad-369/Big-Data/blob/main/new_york_parkingdata_analysis.ipynb"
                                tags={["Python", "Dask", "Pandas", "AWS S3", "Saturn Cloud"]}
                            />
                        </div>

                        {/* AWS Flight DB */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type="Cloud · Database Engineering"
                                title="AWS NoSQL Flight Database"
                                summary="Designed and optimized a serverless NoSQL flight database on AWS, using DynamoDB for high-throughput operations and EC2 for analytical query processing."
                                img={project3}
                                link="https://github.com/riad-369/Database-Work/blob/main/Airline_database_project.ipynb"
                                github="https://github.com/riad-369/Database-Work/blob/main/Airline_database_project.ipynb"
                                tags={["Python", "AWS DynamoDB", "AWS EC2", "NoSQL"]}
                            />
                        </div>

                        {/* Full Stack */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type="Full Stack Web Development"
                                title="Netflix-Style Full Stack App"
                                summary="Built a full-stack MERN application with a Netflix-inspired UI, implementing user authentication, session management, and bcrypt password encryption."
                                img={project5}
                                link="https://github.com/riad-369/Web-Development-Apps/tree/main/cse4234_riadmohammed_finalproject"
                                github="https://github.com/riad-369/Web-Development-Apps/tree/main/cse4234_riadmohammed_finalproject"
                                tags={["Node.js", "React", "MongoDB", "Express", "Authentication"]}
                            />
                        </div>

                        {/* WAR Card Game */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                type="Systems Programming"
                                title="WAR Card Game in C"
                                summary="Implemented the classic War card game in C with efficient memory management, dynamic data structures, and complete game logic including deck shuffling and scoring."
                                img={project6}
                                link="https://github.com/riad-369/Games-made-in-C-/blob/main/war.c"
                                github="https://github.com/riad-369/Games-made-in-C-/blob/main/war.c"
                                tags={["C", "Data Structures", "Memory Management"]}
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
