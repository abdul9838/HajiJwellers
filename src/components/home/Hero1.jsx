
import { Link } from 'react-router-dom'
import pic1 from '../../assets/1.1.png'
import pic2 from '../../assets/1.2.png'
const Hero1 = () => {
    return (
        <div className='flex lg:flex-row flex-col w-[100%] lg:gap-6 gap-3 lg:h-[32vw] h-auto'>
            <div className='lg:w-1/3 w-full relative'>
                <img className="w-full h-full " src={pic1} alt="" />
                <div className='absolute lg:top-10 top-24  w-full p-2 left-[50%] translate-x-[-50%] text-center'>
                    <h1 className='font-serif lg:text-[1.5vw] md:text-[4vw] text-[5vw]'>Necklace With Diamond Pendant</h1>
                    <p className='lg:text-[1vw] mb-4 md:text-[3.2vw] text-[4vw]'>Exclusive diamond rings for lovers.</p>
                    <Link
                        to="/necklace"
                        className="inline-block px-4 py-2 border-[1px] border-yellow-500 hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                    >
                        $200 - Buy Now
                    </Link>
                </div>
            </div>
            <div className='lg:w-2/3 w-full relative'>
                <img className="w-full h-full " src={pic2} alt="" />
                <div className='absolute top-[50%] right-0 w-[65%] p-[2vw] translate-y-[-50%] '>
                    <h1 className='font-serif lg:text-[3vw] md:text-[4vw] text-[5vw]'>
                        GIVE HER THE BEST THING SHE DESERVES</h1>
                    <Link
                        to="/earrings"
                        className="inline-block px-9 py-2 border-[1px] border-yellow-500 hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero1