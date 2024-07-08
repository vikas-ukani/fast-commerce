import { setProductFilter } from "@/store/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { IRootState } from "@/store"

export default function CategorySideFilter() {
    const dispatch = useDispatch()
    const { categories } = useSelector((state: IRootState) => state.category)
    const { filter } = useSelector((state: IRootState) => state.product)

    const handleSelectCategoryChange = (checked: boolean, slug: string) => {
        let newCategories = [...filter.categories, slug]
        if (!checked)
            newCategories = newCategories.filter(catSlug => catSlug !== slug)

        console.log('newCategories', newCategories)
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

    const clearAllCategories = () => {
        dispatch(setProductFilter({
            ...filter,
            categories: []
        }))
    }


    return (
        <>
            <div className="divide-y divide-gray-200 space-y-5">
                <>
                    <p className="text-xl text-gray-800 p-2 uppercase font-medium ">
                        Categories
                        {filter.categories?.length > 0 && <small className="text-xs pl-2 text-primary underline cursor-pointer select-none hover:font-bold" onClick={clearAllCategories}>Clear all</small>}
                    </p>
                    <div className="space-y-2">
                        {categories.map((category: any, id: number) => (
                            <div key={id} className="flex items-center">
                                <input type="checkbox" name={`categories`} id={`category-${category.id}`}
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    value={category.name}
                                    checked={filter.categories && filter.categories?.includes(category.slug)}
                                    onChange={e => handleSelectCategoryChange(e.target.checked, category.slug)}
                                />
                                <label htmlFor={`category-${category.id}`} className="text-gray-600 ml-3 text-base cursor-pointer capitalize">
                                    {category.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </>

              
                <div className="pt-4">
                    <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div className="mt-4 flex items-center">
                        <input type="text" name="min" id="min"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="$000" />
                        <span className="mx-3 text-gray-500">-</span>
                        <input type="text" name="max" id="max"
                            className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                            placeholder="$9999" />
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
