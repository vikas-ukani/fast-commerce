import { setProductFilter } from "@/store/productSlice"
import { useDispatch, useSelector } from "react-redux"


export default function CategorySideFilter() {
    const dispatch = useDispatch()
    const { categories } = useSelector(state => state.category)
    const { filter } = useSelector(state => state.product)

    const handleSelectCategoryChange = (checked, title) => {
        let newCategories = [...filter.categories, title]
        if (!checked)
            newCategories = newCategories.filter(catTitle => catTitle !== title)
        dispatch(setProductFilter({
            ...filter,
            categories: newCategories
        }))
    }

    const handleSelectBrandChange = (checked, title) => {
        let newBrands = [...filter.brands, title]

        if (!checked)
            newBrands = newBrands.filter(brandTitle => brandTitle !== title)
        dispatch(setProductFilter({
            ...filter,
            brands: newBrands
        }))
    }


    return (
        <>
            <div className="divide-y divide-gray-200 space-y-5">
                <div>
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    <div className="space-y-2">
                        {categories.map((category, id) => (
                            <div key={id} className="flex items-center">
                                <input type="checkbox" name={`categories`} id={`category-${category._id}`}
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    defaultChecked={filter.categories && filter.categories?.includes(category.title)}
                                    onChange={e => handleSelectCategoryChange(e.target.checked, category.title)}
                                />
                                <label htmlFor={`category-${category._id}`} className="text-gray-600 ml-3 cursor-pointer capitalize">
                                    {category.title}
                                </label>
                            </div>
                        ))}
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-1" id="cat-1"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                            <div className="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-2" id="cat-2"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-2" className="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                            <div className="ml-auto text-gray-600 text-sm">(9)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-3" id="cat-3"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-3" className="text-gray-600 ml-3 cusror-pointer">Office</label>
                            <div className="ml-auto text-gray-600 text-sm">(21)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="cat-4" id="cat-4"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="cat-4" className="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                            <div className="ml-auto text-gray-600 text-sm">(10)</div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <input type="checkbox" name="brand-1" id="brand-1"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="brand-1" className="text-gray-600 ml-3 cusror-pointer">Cooking Color</label>
                            <div className="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="brand-2" id="brand-2"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="brand-2" className="text-gray-600 ml-3 cusror-pointer">Magniflex</label>
                            <div className="ml-auto text-gray-600 text-sm">(9)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="brand-3" id="brand-3"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="brand-3" className="text-gray-600 ml-3 cusror-pointer">Ashley</label>
                            <div className="ml-auto text-gray-600 text-sm">(21)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="brand-4" id="brand-4"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="brand-4" className="text-gray-600 ml-3 cusror-pointer">M&D</label>
                            <div className="ml-auto text-gray-600 text-sm">(10)</div>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="brand-5" id="brand-5"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="brand-5" className="text-gray-600 ml-3 cusror-pointer">Olympic</label>
                            <div className="ml-auto text-gray-600 text-sm">(10)</div>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="min" />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="max" />
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                    <div className="flex items-center gap-2">
                        <div className="size-selector">
                            <input type="radio" name="size" id="size-xs" className="hidden" />
                            <label htmlFor="size-xs"
                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                        </div>
                        <div className="size-selector">
                            <input type="radio" name="size" id="size-sm" className="hidden" />
                            <label htmlFor="size-sm"
                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                        </div>
                        <div className="size-selector">
                            <input type="radio" name="size" id="size-m" className="hidden" />
                            <label htmlFor="size-m"
                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                        </div>
                        <div className="size-selector">
                            <input type="radio" name="size" id="size-l" className="hidden" />
                            <label htmlFor="size-l"
                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                        </div>
                        <div className="size-selector">
                            <input type="radio" name="size" id="size-xl" className="hidden" />
                            <label htmlFor="size-xl"
                                className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                    <div className="flex items-center gap-2">
                        <div className="color-selector">
                            <input type="radio" name="color" id="red" className="hidden" />
                            <label htmlFor="red"
                                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{ backgroundColor: "#fc3d57" }}></label>
                        </div>
                        <div className="color-selector">
                            <input type="radio" name="color" id="black" className="hidden" />
                            <label htmlFor="black"
                                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{ backgroundColor: "#000" }}></label>
                        </div>
                        <div className="color-selector">
                            <input type="radio" name="color" id="white" className="hidden" />
                            <label htmlFor="white"
                                className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                style={{ backgroundColor: "#fff" }}></label>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
