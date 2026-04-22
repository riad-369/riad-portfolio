import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/thinking.ico" />
        <meta name="theme-color" content="#0a0a0f" />
      </Head>
      <main className={`${inter.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
