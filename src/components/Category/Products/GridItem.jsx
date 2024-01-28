
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ReactStars from "react-rating-stars-component";

export default function GridItem({ product }) {

    const handleAddToCart = (product) => {
        console.log('product', product)
    }

    return (
        <div className="bg-white h-full shadow border rounded-t-xl overflow-hidden group">
            <div className="relative w-full ">
                <Image src={product.thumbnail} alt={product.title} className="h-72 w-100 object-contain" loading="lazy"  height={300} width={300} />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
                    <Link href={`/products/${product._id}`}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <a href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                </div>
            </div>
            <div className='my-auto flex-col gap-2 justify-between relative'>
                <div className="pt-4 pb-3 px-4 h-full my-auto flex-col gap-2 justify-between">
                    <Link href={`/products/${product._id}`}>
                        <h4 className="capitalize font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            {product.title}
                        </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                        <p className="text-xl text-primary font-semibold">${product.price}</p>
                        <p className="text-sm text-gray-400 line-through">${product.price}</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <ReactStars
                                value={parseFloat(product.rating)}
                                isHalf={true}
                                edit={false}
                                size={24}
                            />
                        </div>
                        <div className="text-base font-semibold text-gray-500 ml-3">{product.rating}</div>
                    </div>
                </div>
                <a role='button'
                    className="justify-end block w-full py-2 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                    onClick={() => handleAddToCart(product)}
                >
                    Add to cart
                </a>
            </div>
        </div>
    )
}
