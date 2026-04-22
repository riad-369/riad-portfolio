import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/riad.jpg"
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const StatCard = ({ value, suffix = "", label }) => (
    <div className='flex flex-col items-center text-center px-6 py-5 rounded-2xl
    border border-dark/10 dark:border-light/10
    bg-light dark:bg-dark
    hover:border-primary/40 dark:hover:border-primaryDark/40
    transition-colors duration-300'>
        <span className='inline-block text-5xl font-black text-dark dark:text-light md:text-4xl sm:text-3xl'>
            <AnimatedNumbers value={parseInt(value)} />{suffix}
        </span>
        <span className='text-sm font-medium text-muted uppercase tracking-wider mt-1'>{label}</span>
    </div>
)

const about = () => {
    return (
        <>
            <Head>
                <title>About — Riad Mohammed | Data Scientist</title>
                <meta name="description" content="Learn about Riad Mohammed, a data scientist and ML engineer with expertise in big data, machine learning, and statistical analysis." />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>

                    {/* Page heading */}
                    <div className='w-full text-center mb-16 sm:mb-10'>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className='text-sm font-semibold tracking-widest uppercase text-primary dark:text-primaryDark mb-3'
                        >
                            About Me
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='text-7xl font-black tracking-tight dark:text-light lg:text-6xl sm:text-5xl xs:text-4xl'
                        >
                            Passion Fuels <span className='text-gradient'>Purpose</span>
                        </motion.h1>
                    </div>

                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                        {/* Bio */}
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-xs font-bold uppercase tracking-widest text-muted'>Biography</h2>
                            <p className='font-medium leading-relaxed text-dark/85 dark:text-light/80'>
                                I&apos;m Riad Mohammed, a data scientist and machine learning engineer driven by a deep
                                conviction that data, applied correctly, changes outcomes. I build systems that
                                transform messy, high-volume datasets into clear insights and strategic decisions.
                            </p>
                            <p className='my-5 font-medium leading-relaxed text-dark/85 dark:text-light/80'>
                                My core expertise spans machine learning, statistical modeling, big data engineering,
                                and AI &mdash; with a strong focus on delivering production-ready solutions that bridge the
                                gap between research and real-world business value. I&apos;m equally comfortable working
                                with 100M-row datasets on distributed cloud infrastructure as I am designing
                                interpretable models for executive stakeholders.
                            </p>
                            <p className='font-medium leading-relaxed text-dark/85 dark:text-light/80'>
                                Outside of work I recharge through hiking, football, and the gym &mdash; activities that keep
                                my problem-solving sharp and my perspective grounded. I&apos;m actively seeking roles where
                                I can apply data-driven thinking to hard, meaningful problems.
                            </p>
                        </div>

                        {/* Photo */}
                        <div className='col-span-3 relative h-max rounded-2xl xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primaryDark/10 blur-xl -z-10' />
                            <div className='rounded-2xl overflow-hidden border border-dark/10 dark:border-light/8 shadow-xl'>
                                <Image
                                    src={profilePic}
                                    alt="Riad Mohammed"
                                    className='w-full h-auto'
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className='col-span-2 flex flex-col items-stretch justify-center gap-4 xl:col-span-8 xl:flex-row xl:gap-6 md:order-3'>
                            <StatCard value={10} suffix="+" label="Projects Completed" />
                            <StatCard value={5} suffix="+" label="Years of Experience" />
                            <StatCard value={100} suffix="M+" label="Data Rows Processed" />
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
