import { useContext } from 'react'
import Layout from '../../components/Layout'
import { ProductContext } from '../../context/Context'
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, discount, addToCart, totalPrice, removeFromCart, decreaseItem } = useContext(ProductContext);
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        navigate("/checkout");
    };

    return (
        <Layout>
            <section className='bg-gray-500 text-white'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="mx-auto text-center max-w-3xl">
                        <header className="text-center">
                            <h1 className="text-xl font-bold  sm:text-3xl">Your Cart {cartItems.length < 1 && (<span>is empty</span>)}</h1>
                        </header>
                        {cartItems.length > 0 && (<div className="mt-8">
                            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between sm:flex-row items-center">
                                        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
                                            <div className="px-4 py-4">
                                                <span className="font-semibold text-black">{item.name}</span>
                                                <p className="text-lg text-black">${item.price + " * " + item.quantity + " = " + item.price * item.quantity} </p>
                                                <div className='inline-block'>
                                                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>
                                                    <div className="flex items-center h-8 border-2 overflow-hidden border-gray-200 rounded">
                                                        <button onClick={() => decreaseItem(item)}
                                                            type="button"
                                                            className="w-10 font-bold text-gray-500 border-e-2 border-gray-200 text-xl leading-10  transition hover:opacity-75"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="Quantity"
                                                            readOnly
                                                            value={item.quantity}
                                                            className="h-full w-11 text-black border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                        />
                                                        <button onClick={() => addToCart(item)}
                                                            type="button"
                                                            className="w-10 leading-10 font-bold text-gray-500 text-xl border-s-2 border-gray-200 transition hover:opacity-75"
                                                        >+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(item)} className='text-black px-5 py-2 rounded-md flex items-center  hover:border-red-500 border-2 hover:border-2 hover:transition-colors duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill='#7C6E7F'>
                                                <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                                            </svg>
                                        </button>

                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                                <div className="w-screen max-w-lg space-y-4">
                                    <dl className="space-y-0.5 text-sm ">
                                        <div className="flex justify-between">
                                            <dt>Subtotal</dt>
                                            <dd>
                                                $ {totalPrice}
                                            </dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt>Discount</dt>
                                            <dd> ${totalPrice * discount / 100}</dd>
                                        </div>
                                        <div className="flex justify-between !text-base font-medium">
                                            <dt>Total</dt>
                                            <dd>${totalPrice - totalPrice * discount / 100}</dd>
                                        </div>
                                    </dl>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={handleCheckoutClick}
                                            className="block rounded bg-green-400 px-6 py-3 text-black transition hover:bg-green-500"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)}

                        {cartItems.length === 0 && (
                            <>
                                <div className="p-6 py-12 mt-6 bg-violet-400 text-gray-900">
                                    <div className="container mx-auto">
                                        <div className="flex flex-col lg:flex-row items-center justify-between">
                                            <Link
                                                to="/store"
                                                className="inline-block px-5 py-3 text-sm font-medium  bg-white rounded hover:bg-gray-200 focus:outline-none focus:ring"
                                            >
                                                RETURN TO SHOP
                                            </Link>
                                            <h2 className="text-center text-3xl font-bold">
                                                Your cart is currently empty.
                                            </h2>

                                        </div>
                                    </div>
                                </div>


                            </>
                        )}

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Cart