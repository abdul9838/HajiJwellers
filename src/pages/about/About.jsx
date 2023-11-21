import Layout from '../../components/Layout'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Layout>
            <div className="flex justify-center flex-col gap-y-3 items-center m-auto lg:w-[70vw] w-full lg:p-0  px-3 text-white mt-6">
                <div className="w-full relative">
                    <img className="w-full" src={about1} alt="" />
                    <div className='absolute lg:top-0 lg:right-0 w-[80%] p-[3vw] left-3 top-3'>
                        <h1 className='font-serif text-[4.5vw]'>A HERITAGE OF FOUR GENERATIONS</h1>
                        <hr className='w-40 border-b-2 lg:mb-3 mb-0 border-yellow-200' />
                        <p className='lg:text-l md:text-[2vw] text-[3vw]'>Elegance and craftsmanship meet at our jewelry shop, offering timeless pieces for every style statement.</p>
                    </div>
                </div>

                <div className="w-full relative">
                    <img className="w-full" src={about2} alt="" />
                    <div className='absolute h-full lg:top-0 md:left-0 text-gray-100 lg:w-[100%] p-[3vw] w-full top-0 left-0'>
                        <p className='font-sarif font-bold text-[2.4vw] lg:mb-2 mb-0'>History</p>
                        <h1 className='font-serif lg:text-6xl text-[4.5vw] lg:mb-3 mb-0'>ESTABLISHED IN 1918</h1>
                        <hr className='w-40 border-b-2 lg:mb-3 mb-0 border-yellow-200' />
                        <p className='lg:text-l md:text-[2.2vw] text-[3vw]'>Established in 1918, our jewelry shop weaves a narrative of timeless sophistication. With a century-long legacy, we blend tradition and contemporary elegance, offering unique pieces that reflect artistry and enduring beauty. Explore our collection, where each creation is a testament to our commitment to craftsmanship, heritage, and the celebration of refined style.</p>
                    </div>
                </div>
                <div className='bg-[#FFDA79] items-center text-black font-serif w-full px-2 flex lg:flex-row space-y-3 flex-col lg:justify-around justify-center lg:py-10 py-4'>
                    <h1 className='lg:text-4xl text-xl font-bold lg:w-1/3 w-full text-center'>GOLDEN CITIZEN MEMBERSHIP</h1>
                    <p>Plus 5% Rewards and Free Shipping</p>
                    <Link
                        to="/shop"
                        className="inline-block px-9 py-2 bg-black hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                    >
                        JOIN TODAY
                    </Link>
                </div>
                <div className=' bg-gray-900 lg:p-20 p-3'>
                    <p className='font-sarif font-bold text-[2.4vw] lg:mb-2 mb-0'>Our Philosophy</p>
                    <h1 className='font-serif lg:text-6xl text-[4.5vw] lg:mb-3 mb-0'>Spectacular Creations That Give You A Distinct Look</h1>
                    <hr className='w-40 border-b-2 my-4 border-yellow-200' />
                    <p className='lg:text-l md:text-[2vw] text-[3vw]'>With a legacy dating back to 1918, our jewelry shop combines a rich history with contemporary elegance, offering timeless pieces that celebrate craftsmanship, tradition, and enduring beauty.</p>
                </div>
            </div>
        </Layout>
    )
}

export default About