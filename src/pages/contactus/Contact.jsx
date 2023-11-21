
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const Contact = () => {
    return (
        <Layout>
            <div className="flex justify-center flex-col lg:gap-y-4 gap-y-2  items-center m-auto lg:w-[70vw] w-full lg:px-0 px-3  text-white mt-6">
                <div className="w-full relative">
                    <img className="w-full" src={about1} alt="" />
                    <div className='absolute lg:top-0 lg:right-0 w-[80%] p-[3vw] left-3 top-3'>
                        <h1 className='font-serif lg:text-2xl text-[10px] lg:text-inherit lg:text-yellow-200 text-yellow-200'>CONTACT US</h1>
                        <h2 className='font-serif text-[4.5vw]'>Get in Touch with Us for Any Custom Jewellery Design</h2>
                        <hr className='w-40 border-b-2 lg:mb-3 mb-0 border-yellow-200' />
                        <p className='lg:text-l md:mt-2 md:text-[2vw] text-[3vw]'>Elegance and craftsmanship meet at our jewelry shop, offering timeless pieces for every style statement.</p>
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
                <div className="w-full relative">
                    <img className="w-full" src={about2} alt="" />
                    <div className='absolute h-full lg:top-0 md:left-0 text-gray-100 lg:w-[100%] p-[3vw] w-full top-0 left-0'>
                        <p className='font-sarif font-bold text-[2.4vw] lg:mb-2 mb-0'>History</p>
                        <h1 className='font-serif lg:text-6xl text-[4.5vw] lg:mb-3 mb-0'>ESTABLISHED IN 1918</h1>
                        <hr className='w-40 border-b-2 lg:mb-3 mb-0 border-yellow-200' />
                        <p className='lg:text-l md:text-[2.2vw] text-[3vw]'>Established in 1918, our jewelry shop weaves a narrative of timeless sophistication. With a century-long legacy, we blend tradition and contemporary elegance, offering unique pieces that reflect artistry and enduring beauty. Explore our collection, where each creation is a testament to our commitment to craftsmanship, heritage, and the celebration of refined style.</p>
                    </div>
                </div>

                <div className=' bg-gray-900 lg:py-20 py-4 w-full text-center text-yellow-200'>
                    <h1 className='lg:text-4xl text-2xl font-bold lg:mb-5 mb-2'>+1 800 123 456</h1>
                    <p className='lg:text-l text-sm'>12 W Broadway, New York 10007, USA</p>
                    <div className='flex justify-center space-x-3 mt-5' >
                        <Link
                            to="/shop"
                            className="inline-block hover:border-yellow-700 rounded-[30px] transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" fill="#FFDA79">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                        </Link>
                        <Link
                            to="/shop"
                            className="inline-block hover:border-yellow-700 rounded-[30px] transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" fill="#FFDA79">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>

                        </Link>
                        <Link
                            to="/shop"
                            className="inline-block hover:border-yellow-700 rounded-[30px] transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" fill="#FFDA79" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </Link>
                        <Link
                            to="/shop"
                            className="inline-block hover:border-yellow-700 rounded-[30px] transition duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512" fill='#FFDA79'><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Contact