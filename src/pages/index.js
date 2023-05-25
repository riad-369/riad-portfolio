import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/programmer-transformed.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Riad Mohammed&apos;s Portfolio</title>
        <meta name="description" content="Get to know Riad" />
      </Head>
      <TransitionEffect />
     <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
       <Layout className='pt-0 md:pt-16 sm:pt-8'>
         <div className="flex items-center justify-between.w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
             <Image src={profilePic} alt="Riad" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
             priority
             sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             50vw"
             
             />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Igniting Innovation through Analytical Excellence" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-mediumn md:text-sm sm:text-xs'>
                As an aspiring data scientist, I am deeply passionate about unraveling insights and solving complex problems through 
                data analysis and machine learning. My ultimate goal is to bridge the gap between raw data and meaningful outcomes, 
                leveraging cutting-edge techniques to extract valuable knowledge.
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/riadmohammed_resume5.pdf" target={"_blank"}
                  className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark
                   hover:text-light border-transpartent hover:text-light dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base"
                  // download={true} //downloads Resume as pdf
                  >Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link href="mailto:riadmohammed40@gmail.com" traget={"_blank"}
                  className="ml-4 font-medium capitalize text-dark underline flex items-center bg-light text-dark p-2.5 px-6 rounded-lg hover:bg-dark hover:text-light 
                  border-transpartent hover:text-light dark:bg-dark dark:text-light  dark:hover:bg-light dark:hover:text-dark md:text-base"
                  >Contact</Link>
                </div>
            </div>
         </div>
        
       </Layout>
       <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
        <Image src={lightBulb} alt="Riad" className='w-full h-auto' />
       </div>
     </main>
    </>
  )
}
