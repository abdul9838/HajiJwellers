import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../context/Context';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems } = useContext(ProductContext)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 glass z-10 mb-5">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <NavLink to="/">
                        <div className='flex items-center gap-x-1'>
                            <img className="lg:w-20 lg:h-20 w-14 h-14 rounded-full" src="https://i.pinimg.com/736x/d9/cc/76/d9cc76d5469bc00abb8da31420f2284a.jpg" alt="Company Logo" />
                            <h1 className='lg:text-3xl text-2xl font-bold text-[#F4CC6E]'>Haji Jwellers</h1>
                        </div>
                    </NavLink>
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        } md:translate-x-0 md:flex md:items-center`}
                >
                    <div className="flex flex-col md:flex-row md:mx-6 md:gap-y-0 gap-y-3 dark:text-white gap-x-6">
                        <NavLink to="/" className="hover:text-yellow-300" >Home</NavLink>
                        <NavLink to="/about" className="hover:text-yellow-300" >About Us</NavLink>
                        <NavLink to="/store" className="hover:text-yellow-300" >Store</NavLink>
                        <NavLink to="/earrings" className="hover:text-yellow-300" >Earrings</NavLink>
                        <NavLink to="/rings" className="hover:text-yellow-300" >Rings</NavLink>
                        <NavLink to="/necklace" className="hover:text-yellow-300" >Necklace</NavLink>
                        <NavLink to="/my-account" className="hover:text-yellow-300" >My account</NavLink>
                        <NavLink to="/contact-us" className="hover:text-yellow-300" >Contact Us</NavLink>
                    </div>

                    <div className="flex justify-center md:block">
                        <NavLink
                            className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            to="/cart"
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {cartItems.length > 0 ?
                                <span className="absolute top-[-5px] right-[-5px] w-3 h-3 text-[9px] text-center font-bold text-white bg-blue-500  rounded-full">{cartItems.length}</span>
                                : ""
                            }
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
