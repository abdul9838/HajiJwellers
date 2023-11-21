import { Link } from 'react-router-dom';
import hero from '../../assets/Hero.jpeg'
const Hero = () => {
    return (
        <div className="w-full text-white relative">
            <img className="w-full" src={hero} alt="" />
            <div className='absolute lg:top-0 lg:right-0 w-[50%] p-[2.5vw] right-3 top-3'>
                <h1 className='font-serif text-[4.5vw]'>HIM & HER</h1>
                <h2 className='lg:text-3xl text-xl lg:my-4 '>Love Collection</h2>
                <hr className='w-40 border-b-2 lg:mb-3 mb-0 border-yellow-200' />
                <p className='lg:text-xl md:text-[2vw] text-[3vw]'>Exclusive diamond rings for couples and lovers.</p>
                <Link
                    to="/store"
                    className="inline-block lg:mt-3 px-8 mt-3 py-2 border-[1px] border-yellow-500 hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    )
}

export default Hero;