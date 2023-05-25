import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/fifa-prediction1.png";
import project2 from "../../public/images/projects/nyc-parking.jpeg";
import project3 from "../../public/images/projects/airline.jpeg";
import project4 from "../../public/images/projects/map.png";
import project5 from "../../public/images/projects/mern.jpeg";
import project6 from "../../public/images/projects/war.jpeg";

import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);



const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='w-full flex item items-center justify-between rounded-3xl border border-solid border-dark bg-light
        shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] 
            xs:w-full xs:rounded-[1.5rem]' />
          <Link href={link} target="_blank"
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
          >
            
            <FramerImage src={img} alt={title} className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            
            />
          </Link>

          <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
          <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank"className='w-10'> <GithubIcon /> </Link>
            <Link href={link} target="_blank" 
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
            > Visit Project</Link> 
          </div>
          </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl 
         border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 
            md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
          className='w-full cursor-pointer overflow-hidden rounded-lg'
          >
            
            <FramerImage src={img} alt={title} className='w-full h-auto' 
             whileHover={{scale:1.05}}
             transition={{duration:0.2}}
            
            />
          </Link>

          <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
          </Link>
          
          <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" 
            className='text-lg font-semibold underline md:text-base'
            > Visit</Link> 
            <Link href={github} target="_blank"className='w-8 md:w-6'> <GithubIcon /> </Link>
            
          </div>
          </div>
        </article>

    )
}

const projects = () => {
    return (
        <>
          <Head>
            <title> Riad | Projects Page</title>
            <meta name="description" content="any description" />
          </Head>
          <TransitionEffect />
          <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!" 
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />

                 <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0' >
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="FIFA World Cup Prediction"
                        img={project1}
                        summary="An unique machine learning model that attempts to predict the FIFA World Cup 2022"
                        link="https://github.com/riad-369/Machine-Learning/blob/main/FIFA_world_cup_prediction.ipynb"
                        github="https://github.com/riad-369/Machine-Learning/blob/main/FIFA_world_cup_prediction.ipynb"
                        type="Featured Project"
                        
                        
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="NYC Parking Citation Analysis"
                        img={project2}
                        summary="Utilized data science tools and techniques including Python, Pandas, Dask, Saturn Cloud, and AWS S3 buckets to conduct a
                        comprehensive data processing workflow on 100 million rows of NYC parking citation data from 2014 to 2022."
                        link="https://github.com/riad-369/Big-Data/blob/main/new_york_parkingdata_analysis.ipynb"
                        github="https://github.com/riad-369/Big-Data/blob/main/new_york_parkingdata_analysis.ipynb"
                        type="Featured Project"
                        
                        
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="AWS Flight Database"
                        img={project3}
                        summary="Designed and Optimized a NoSQL flight database through AWS services such as DynamoDB and EC2"
                        link="https://github.com/riad-369/Database-Work/blob/main/Airline_database_project.ipynb"
                        github="https://github.com/riad-369/Database-Work/blob/main/Airline_database_project.ipynb"
                        type="Featured Project"
                        
                        
                        />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                        title="Functional Map Of The World (fMOW) Visualizer"
                        img={project4}
                        summary="Data plays a crucial role in enabling businesses around the world to make well informed decisions to benefit their company 
                        and help them achieve their goals. Data Analysts are employed by these companies to dissect tons of data as well as perform trend analysis. 
                        Traditionally, data is collected through surveys, interviews, web scraping and observation, but images are also a useful form of data. 
                        By classifying images with the use of deep learning models, as well as analyzing the metadata associated with these images such as date, 
                        time and location, substantial information can be extracted from huge datasets consisting of images to guide businesses in making decisions. 
                        Within this research, we will use the functional map of the world (FMOW) dataset that is publicly available and investigate and model which regions 
                        have high activity based on metadata and temporal data. An interactive web visualization will also be built based on the data analysis and model."
                        link="https://fmowbigdata.netlify.app/"
                        github="https://github.com/riad-369/Web-Visualizer-for-Functional-Map-Of-The-World"
                        type="Featured Project"
                        
                        
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Full Stack App"
                        img={project5}
                        summary="Developed a full-stack app to simulate a Netflix-movie layout with user log in and password encryption"
                        link="https://github.com/riad-369/Web-Development-Apps/tree/main/cse4234_riadmohammed_finalproject"
                        github="https://github.com/riad-369/Web-Development-Apps/tree/main/cse4234_riadmohammed_finalproject"
                        type="Featured Project"
                        
                        
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="WAR Card Game in C"
                        img={project6}
                        summary="Developed the famous War-Card game in the C programming language"
                        link="https://github.com/riad-369/Games-made-in-C-/blob/main/war.c"
                        github="https://github.com/riad-369/Games-made-in-C-/blob/main/war.c"
                        type="Featured Project"
                        
                        
                        />
                    </div>


                 </div>


            </Layout>
          </main>
        
        </>
    )
}

export default projects

