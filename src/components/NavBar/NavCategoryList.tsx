"use client"
import { useCategory } from "@/hooks";
import { IRootState } from "@/store";
import { setCategories } from "@/store/categorySlice";
import {
    initialState as initialProductState,
    setProductFilter,
} from "@/store/productSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICategory } from "../../types";

export default function NavCategoryList({
    showCategories,
    setShowCategories,
}: {
    showCategories: boolean
    setShowCategories: (flag: boolean) => void
}) {
    const router = useRouter()
    const dispatch = useDispatch();
    const { categories } = useSelector((state: IRootState) => state.category);
 
    /**
     * Redirects the user to the products page for the given category.
     *
     * @param category - The category object containing the slug to use in the URL.
     */
    const redirectCategoryProduct = (category: ICategory) => {
        dispatch(setProductFilter(initialProductState));
        router.push(`/${category.slug}/products`);
    };

    if (!categories || categories.length == 0) {
        return null;
    }

    // absolute opacity-0 hover-categories-hover:opacity-100 invisible hover-categories-hover:visible transition   w-auto left-4 right-4 top-full bg-white shadow-lg p-4 border-2 rounded divide-gray-300 divide-dashed duration-500 grid grid-flow-row grid-cols-4 lg:grid-cols-6 gap-3
    return <>
        <div className={`
        ${showCategories ? ' opacity-100 visible' : ' opacity-0 invisible'}
        z-50 absolute transition w-auto left-4 right-4 top-full bg-white shadow-lg p-4 border-2 rounded divide-gray-300 divide-dashed duration-500 grid grid-flow-row grid-cols-4 lg:grid-cols-6 gap-3
        `}
            onMouseLeave={() => setShowCategories(false)}
        >
            {categories?.map((category: ICategory, id: number) => (
                <button key={category.id}
                    type="button"
                    onClick={() => redirectCategoryProduct(category)}
                    className="w-full flex gap-x-3 items-center p-2 hover:bg-red-300 text-gray-600 hover:text-primary transition duration-300 hover:shadow-lg rounded"
                >
                    <Image
                        width={1000}
                        height={1000}
                        src={category.thumbnail}
                        alt={category?.name || `category-${id}`}
                        className="object-contain w-auto h-12 rounded-md bg-transparent"
                    />
                    <span className="w-full text-sm text-left font-bold capitalize">
                        {category?.name?.replace("-", " ")}
                    </span>
                </button>
            ))}
        </div>
    </>
}