import { Link } from 'react-router-dom'
import pic3 from '../../assets/2.1.jpeg'
import pic4 from '../../assets/2.2.jpeg'
const Hero2 = () => {
    return (
        <div className='flex md:flex-row flex-col w-[100%] lg:gap-6 gap-3 md:h-[32vw]'>
            <div className='lg:w-2/3 w-full relative'>
                <img className="w-full h-full " src={pic3} alt="" />
                <div className='absolute top-[50%] left-0 w-[65%] p-[2vw] translate-y-[-50%]'>
                    <h1 className='font-serif lg:text-[3vw] md:text-[4vw] text-[5vw]'>
                        FOR HIM</h1>
                    <p className='lg:text-[1vw] mb-4 md:text-[3vw] text-[3.7vw]'>Exclusive diamond rings for gold loving men</p>
                    <Link
                        to="/rings"
                        className="inline-block md:px-9 py-2 px-5 border-[1px] border-yellow-500 hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                    >
                        SHOP NOW
                    </Link>
                </div>
            </div>
            <div className='lg:w-1/3 w-full relative'>
                <img className="w-full h-full " src={pic4} alt="" />
                <div className='absolute bottom-24  w-full p-2 left-[50%] translate-x-[-50%] text-center'>
                    <h1 className='font-serif lg:text-[1.5vw] md:text-[4vw] text-[5vw]'>Everything You Need For The Best Look You Wish</h1>

                    <Link
                        to="/store"
                        className="inline-block px-9 py-2 border-[1px] border-yellow-500 hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero2