import { Link } from 'react-router-dom'

const Hero3 = () => {
    return (
        <div className='bg-[#FFDA79] items-center text-black font-serif w-full px-2 flex lg:flex-row space-y-3 flex-col justify-around lg:py-10 py-4'>
            <h1 className='lg:text-4xl text-xl font-bold lg:w-1/3 w-full'>GOLDEN CITIZEN MEMBERSHIP</h1>
            <p>Plus 5% Rewards and Free Shipping</p>
            <Link
                to="/shop"
                className="inline-block px-9 py-2 bg-black hover:border-yellow-700 text-white rounded-[30px] transition duration-300"
            >
                JOIN TODAY
            </Link>
        </div>
    )
}

export default Hero3