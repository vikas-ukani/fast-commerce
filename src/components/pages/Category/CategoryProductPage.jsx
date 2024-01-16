import CategorySideFilter from '@/components/Category/CategorySideFilter'
import ProductGrid from '@/components/Category/Products/ProductGrid'
import callAxios from '@/service/callApi'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function CategoryProductPage() {

  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- shop wrapper --> */}
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">

        {/* <!-- drawer component --> */}
        <div id="drawer-example" data-drawer-edge="true" data-drawer-backdrop="false" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-label">
          <h5 id="drawer-label" className="text-2xl inline-flex items-center mb-4 w-full justify-center gap-3 font-semibold text-gray-500 dark:text-gray-400">
            <i className="fa-solid fa-filter "></i>
            Filters
          </h5>
          <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close menu</span>
          </button>
          <CategorySideFilter key={'mobile-category'} />
        </div>

        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
          <CategorySideFilter key={'desktop-category'} />
        </div>
        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <select name="sort" id="sort" 
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
              <option value="">Default sorting</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>

            <div className="flex gap-2 ml-auto">
              <button
                type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                className="block md:hidden border border-primary w-10 h-9 items-center justify-center bg-primary rounded cursor-pointer">
                <i className="fa-solid fa-filter"></i>
              </button>
              <div
                className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <i className="fa-solid fa-grip-vertical"></i>
              </div>
              <div
                className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                <i className="fa-solid fa-list"></i>
              </div>
            </div>
          </div>

          <ProductGrid />
        </div>
      </div >

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </>
  )
}
