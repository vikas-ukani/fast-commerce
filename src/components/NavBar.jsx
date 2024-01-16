import callAxios from "@/service/callApi";
import { setToken } from "@/store/authSlice";
import { setCategories } from "@/store/categorySlice";
import { initialState as initialProductState, setProductFilter } from "@/store/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavBar() {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { token } = useSelector(state => state.auth)
    const router = useRouter()

    useEffect(() => {
        // Fetch category only if there is no categories in store.
        if (categories.length == 0) getCategories()
    }, [])

    const getCategories = async () => {
        try {
            let { data } = await callAxios.get('/get-categories')
            dispatch(setCategories(data))
        } catch (error) {
            console.log('error :>> ', error);
            dispatch(setCategories([]))
        }
    }

    const redirectCategoryProduct = (category) => {
        dispatch(setProductFilter(initialProductState))
        router.push(`/${category.title}/products`)
    }

    const handleLogout = () => {
        dispatch(setToken(null))
    }

    return (
        <>
            <nav className="bg-gray-800">
                <div className="container flex">
                    <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                        <span className="text-white">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                        <span className="capitalize ml-2 text-white ">All Categories</span>

                        <div
                            className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 invisible group-hover:opacity-100 transition duration-500 group-hover:visible">
                            {categories.map((category, id) => (
                                <button type="button" onClick={() => redirectCategoryProduct(category)} key={id} className="w-full flex items-center px-4 py-2 hover:bg-red-200 transition">
                                    <img src={category.images[0]} alt="sofa" className="w-12 h-8  rounded-md" />
                                    <span className="ml-4 text-gray-600 text-sm font-bold capitalize">
                                        {category.title.replace('-', ' ')}
                                    </span>
                                </button>
                            ))}
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Bed</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">office</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                            </a>
                            <a href="#" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                                <img src="/assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain" />
                                <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link href={'/'} className="text-gray-200 hover:text-white transition">Home</Link>
                            <Link href={'/products'} className="text-gray-200 hover:text-white transition">Shop</Link>
                            <a href="#" className="text-gray-200 hover:text-white transition">About us</a>
                            <a href="#" className="text-gray-200 hover:text-white transition">Contact us</a>
                        </div>

                        <div className="space-x-2 flex gap-2">
                            {token
                                ? <button type="button" onClick={handleLogout} className="text-primary flex items-center hover:text-white transition">
                                    <i className="fa fa-power-off mr-2 pt-0.5"></i>
                                    Logout
                                </button>
                                : <>
                                    <Link href={'/login'} className="text-gray-200 hover:text-white transition">
                                        Login
                                    </Link>
                                    <div className="border border-r border-primary"></div>
                                    <Link href={'/register'} className="text-primary hover:text-white transition">
                                        Register
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
