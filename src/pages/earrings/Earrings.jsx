
import { useContext } from 'react'
import Layout from '../../components/Layout'
import { ProductContext } from '../../context/Context'
import Product from '../../components/product/Product'

const Earrings = () => {
    const { products } = useContext(ProductContext)
    const earrings = products.filter((product) => product.category == "Earring")

    return (
        <Layout>
            <div className="m-auto w-full md:w-[74vw] mb-10 mt-6  lg:p-0 px-3">
                <div className='flex flex-wrap justify-between md:p-3'>
                    {earrings.map((product) => (
                        <section key={product.id} className='mb-3'>
                            <Product product={product} />
                        </section>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Earrings