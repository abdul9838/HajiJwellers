/* eslint-disable react/no-unknown-property */
import Layout from "../../components/Layout"
import Hero from "../../components/home/Hero"
import Hero1 from "../../components/home/Hero1"
import Hero2 from "../../components/home/Hero2"
import Hero3 from "../../components/home/Hero3"

const Home = () => {
    return (
        <Layout>
            <div className="flex justify-center flex-col lg:gap-5 gap-y-3 items-center m-auto lg:w-[70vw] w-full lg:p-0 px-3 text-white mt-6">
                <marquee className="text-4xl lg:block hidden uppercase" behavior="alternate" direction="left" scrollamount="12">Haji Jwellers</marquee>
                <Hero />
                <Hero1 />
                <Hero2 />
                <Hero3 />
            </div>
        </Layout>
    )
}

export default Home