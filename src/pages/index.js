import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/programmer-transformed.png"
import Link from 'next/link'
import { LinkArrow, GithubIcon, LinkedInIcon } from '@/components/Icons'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

const StatBadge = ({ value, label }) => (
    <div className='flex flex-col items-center px-6 py-3 rounded-xl border border-dark/10 dark:border-light/10 bg-light/60 dark:bg-dark/60 backdrop-blur-sm'>
        <span className='text-2xl font-black text-primary dark:text-primaryDark'>{value}</span>
        <span className='text-xs font-medium text-muted uppercase tracking-wider mt-0.5'>{label}</span>
    </div>
)

export default function Home() {
    return (
        <>
            <Head>
                <title>Riad Mohammed — Data Scientist & ML Engineer</title>
                <meta name="description" content="Riad Mohammed is a data scientist and machine learning engineer who builds systems that turn complex data into clear, actionable business intelligence." />
                <meta property="og:title" content="Riad Mohammed — Data Scientist & ML Engineer" />
                <meta property="og:description" content="Portfolio of Riad Mohammed, specializing in ML engineering, big data pipelines, and predictive analytics." />
                <meta property="og:type" content="website" />
            </Head>
            <TransitionEffect />

            <main className='flex items-center text-dark w-full min-h-[calc(100vh-5rem)] dark:text-light'>
                <Layout className='pt-0 md:pt-16 sm:pt-8'>
                    <div className='flex items-center justify-between w-full lg:flex-col lg:gap-16'>

                        {/* Left column — text */}
                        <div className='w-1/2 flex flex-col items-start justify-center lg:w-full lg:items-center lg:text-center'>

                            {/* Role badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className='inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
                                border border-primary/30 dark:border-primaryDark/30
                                bg-primary/5 dark:bg-primaryDark/10 text-sm font-medium text-primary dark:text-primaryDark'
                            >
                                <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
                                Available for opportunities
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className='text-6xl font-black leading-[1.1] tracking-tight mb-6
                                xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl'
                            >
                                Turning{' '}
                                <span className='text-gradient'>Data</span>
                                {' '}Into Decisions That Drive{' '}
                                <span className='text-gradient'>Impact</span>
                            </motion.h1>

                            {/* Bio */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                                className='text-base leading-relaxed text-dark/75 dark:text-light/70 mb-8 max-w-lg lg:mx-auto md:text-sm'
                            >
                                I build data-driven systems that transform messy, complex datasets into clear insights and
                                actionable strategies. Specializing in ML engineering, big data pipelines, and predictive
                                analytics — bridging the gap between raw data and business outcomes.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.55 }}
                                className='flex items-center gap-4 mb-10 lg:justify-center flex-wrap'
                            >
                                <Link
                                    href="/riadmohammed_resume5.pdf"
                                    target="_blank"
                                    className='flex items-center gap-2 bg-primary hover:bg-primary/90 text-white
                                    px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                                    hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0'
                                >
                                    View Resume <LinkArrow className="w-4" />
                                </Link>
                                <Link
                                    href="mailto:riadmohammed40@gmail.com"
                                    className='flex items-center gap-2 border border-dark/20 dark:border-light/20
                                    hover:border-primary dark:hover:border-primaryDark
                                    px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                                    hover:bg-primary/5 dark:hover:bg-primaryDark/5 hover:-translate-y-0.5 active:translate-y-0'
                                >
                                    Get in Touch
                                </Link>
                            </motion.div>

                            {/* Social links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.65 }}
                                className='flex items-center gap-5 lg:justify-center'
                            >
                                <a
                                    href="https://github.com/riad-369"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-5 text-dark/50 dark:text-light/50 hover:text-primary dark:hover:text-primaryDark transition-colors duration-200'
                                    aria-label="GitHub"
                                >
                                    <GithubIcon />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/riad-mohammed-25311a221/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-5'
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right column — image + stats */}
                        <div className='w-5/12 flex flex-col items-center gap-8 lg:w-full lg:max-w-sm lg:mx-auto'>

                            {/* Profile image with gradient ring */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className='relative w-full'
                            >
                                {/* Gradient glow behind image */}
                                <div className='absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primaryDark/10 blur-2xl -z-10' />
                                <div className='rounded-3xl overflow-hidden border border-dark/10 dark:border-light/8 shadow-2xl'>
                                    <Image
                                        src={profilePic}
                                        alt="Riad Mohammed"
                                        className='w-full h-auto'
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                    />
                                </div>
                            </motion.div>

                            {/* Stats row */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='grid grid-cols-3 gap-3 w-full'
                            >
                                <StatBadge value="10+" label="Projects" />
                                <StatBadge value="5+" label="Years Exp." />
                                <StatBadge value="100M+" label="Rows Processed" />
                            </motion.div>
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}
