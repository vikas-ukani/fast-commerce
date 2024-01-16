import { useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";

export default function ProductListView({ product }) {
    const { products } = useSelector(state => state.product)

    return (
        <div className='space-y-6 '>
            {products.length > 0 && products?.map((product, idx) => (
                <div key={idx} className="flex h-80 font-sans w-full bg-gray-100 shadow-md rounded-xl hover:shadow-lg hover:scale-100 border hover:border-primary duration-300">
                    <div className="flex-none w-80 relative">
                        <img src={product.thumbnail} alt={product.title} className="absolute inset-0 w-full h-full object-cover rounded-l-xl" loading="lazy" />
                    </div>
                    <div className="flex-auto p-6 ">
                        <div className="flex flex-wrap">
                            <h1 className="flex-auto text-primary text-2xl font-semibold text-slate-900 capitalize">
                                {product.title}
                            </h1>
                            <div className="text-lg font-semibold text-slate-500">
                                <p className="text-xl text-primary font-semibold">${product.price}</p>
                                <p className="text-sm text-gray-400 line-through">${product.price}</p>
                            </div>
                        </div>
                        <div className='w-full flex-none text-sm font-medium text-slate-700 my-2'>
                            {product.description}
                        </div>
                        {/* <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            In stock
                        </div> */}
                        <div className="flex items-center mt-2">
                            <div className="flex gap-1 text-sm text-primary">
                                <ReactStars
                                    value={parseFloat(product.rating)}
                                    isHalf={true}
                                    edit={false}
                                    size={24}
                                />
                            </div>
                            <div className="text-base font-semibold text-gray-500 ml-3">{product.rating}</div>
                        </div>
                        {/* <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="space-x-2 flex text-sm">
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xs" checked />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XS
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="s" />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        S
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="m" />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        M
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="l" />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        L
                                    </div>
                                </label>
                                <label>
                                    <input className="sr-only peer" name="size" type="radio" value="xl" />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        XL
                                    </div>
                                </label>
                            </div>
                        </div> */}
                        <div className="flex space-x-4 mt-4 my-6 text-sm font-medium">
                            <div className="flex-auto flex space-x-4">
                                <button href="#"
                                    className="block px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition capitalize">
                                    Buy now
                                </button>
                                <button className="h-10 px-6 font-semibold rounded-md border border-secondary text-black capitalize" type="button">
                                    Add to cart
                                </button>
                            </div>
                            <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-primary border border-primary" type="button" aria-label="Like">
                                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-sm text-slate-700">
                            Free shipping on all continental US orders.
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}
