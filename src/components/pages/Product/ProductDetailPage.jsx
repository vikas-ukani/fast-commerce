import RelatedProducts from '@/components/Products/RelatedProducts';
import callAxios from '@/service/callApi'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";

export default function ProductDetailPage() {
    const router = useRouter()
    const [currentImage, setCurrentImage] = useState(null)
    const [product, setProduct] = useState(null)
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        console.log('calling api', router.query.id)
        if (router.query.id) {
            fetchData();
        }
    }, [router.query.id])

    useEffect(() => {
        if (product) {
            fetchRelatedProducts()
        }

    }, [product])


    const fetchData = async () => {
        const { data } = await callAxios.get(`/product/${router.query.id}`)
        console.log('data', data)
        if (data) {
            setProduct(data)
            setCurrentImage(data.images[0])

        } else {
            setProduct(null)
        }
    }

    const fetchRelatedProducts = async () => {
        if (product.category) {
            const { data } = await callAxios.get(`/all-products?category=${product.category}&limit=20&descending=false`)
            if (data) {
                setRelatedProducts(data.products)
                console.log('category related products', data)
            } else {
                setRelatedProducts([])
            }
        }
    }

    if (!product) return <div />

    return (
        <>
            <div className="container py-4 flex items-center gap-3">
                <Link href="/" className="text-primary text-base">
                    <i className="fa-solid fa-house"></i>
                </Link>
                <span className="text-sm text-gray-400">
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Product</p>
            </div>

            <div className="container grid grid-cols-2 gap-10">
                <div>
                    <img src={currentImage} alt="product" className="w-full h-[500px]" />
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 duration-500 transition ease-in-out gap-4 mt-8">
                        {product?.images.map(image => <img src={image} key={image} alt={image}
                            className={`${image == currentImage ? 'border-primary' : ''} w-full h-24 p-1 cursor-pointer border-2 hover:shadow-lg rounded`}
                            onClick={() => setCurrentImage(image)}
                        />)}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-medium capitalize mb-2">{product?.title}</h2>
                    <div className="flex items-center mb-4">
                        <ReactStars classNames={"text-yellow-400"}
                            value={parseFloat(product.rating)}
                            isHalf={true}
                            edit={false}
                            size={24}
                        />
                        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">{product.brand}</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">{product.category}</span>
                        </p>
                        {/* <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">SKU: </span>
                            <span className="text-gray-600">BE45VGRT</span>
                        </p> */}
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">${product.price - product.discountPercentage}</p>
                        <p className="text-base text-gray-400 line-through">${product.price}</p>
                    </div>

                    <p className="mt-4 text-gray-600">
                        {product.description}
                    </p>

                    <div className="pt-4 flex items-center gap-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1 font-bold">Size :</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector font-bold">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label htmlFor="size-xs"
                                    className="text-xs border border-gray-200 rounded-sm h-8 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div className="size-selector font-bold">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label htmlFor="size-sm"
                                    className="text-xs border border-gray-200 rounded-sm h-8 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div className="size-selector font-bold">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label htmlFor="size-m"
                                    className="text-xs border border-gray-200 rounded-sm h-8 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div className="size-selector font-bold">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label htmlFor="size-l"
                                    className="text-xs border border-gray-200 rounded-sm h-8 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div className="size-selector font-bold">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label htmlFor="size-xl"
                                    className="text-xs border border-gray-200 rounded-sm h-8 w-10 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color : </h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden" />
                                <label htmlFor="red"
                                    className="border border-gray-200 rounded-lg h-8 w-16 cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: '#fc3d57' }}></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="black" className="hidden" />
                                <label htmlFor="black"
                                    className="border border-gray-200 rounded-lg h-8 w-16 cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: '#000' }}></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="white" className="hidden" />
                                <label htmlFor="white"
                                    className="border border-gray-200 rounded-lg h-8 w-16 cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fff" }}></label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <a onClick={() => alert("Added to cart")}
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <i className="fa-solid fa-bag-shopping"></i> Add to cart
                        </a>
                        <a onClick={() => alert("Added to Wishlist")}
                            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                            <i className="fa-solid fa-heart"></i> Wishlist
                        </a>
                    </div>

                    {/* <div className="flex gap-3 mt-4">
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div> */}
                </div>
            </div>

            {/* <div className="container py-16">
                <h3 className="border-b text-2xl border-gray-200 font-roboto text-gray-800 pb-3 font-bold">Product Details</h3>
                <div className="w-3/5 pt-6">
                    <div className="text-gray-600">
                        <p>{product.description}</p>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                            dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                            sapiente dolor quisquam, ex ab.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                            blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                            illum dolor totam, ducimus excepturi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia modi ut expedita! Iure molestiae
                            labore cumque nobis quasi fuga, quibusdam rem? Temporibus consectetur corrupti rerum veritatis
                            numquam labore amet.</p> 
                    </div>

                    <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                        <tbody>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                                <th className="py-2 px-4 border border-gray-300 ">Blank, Brown, Red</th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
                            </tr>
                            <tr>
                                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                                <th className="py-2 px-4 border border-gray-300 ">55kg</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}

            <RelatedProducts relatedProducts={relatedProducts} />
        </>
    )
}
