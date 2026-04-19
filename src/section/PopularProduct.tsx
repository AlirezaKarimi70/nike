import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../component/PopularProductCard'

function PopularProduct() {
    return (
        <section className='max-container max-sm:mt-12'>
            <div className='flex flex-col justify-start gap-5'>
                <h2 className='text-4xl font-palanquin font-bold'>
                    Ourt <span className='text-coral-red'>Popular</span>
                    Products
                </h2>
                <p className='text-slate-gray'>
                    Experience the pinnacle of athletic performance with our popular products, designed to elevate your game and style. From cutting-edge sneakers to high-performance apparel, our collection combines innovation, comfort, and trendsetting designs. Whether you're a seasoned athlete or a fashion-forward enthusiast, our popular products are crafted to meet your needs and exceed your expectations. Step into the world of top-tier sportswear and discover why our products are loved by athletes and fashionistas alike.
                </p>
            </div>
            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
                {products.map((product) => (
                    <PopularProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

export default PopularProduct