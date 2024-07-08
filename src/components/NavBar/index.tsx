"use client"


import { usePathname, useRouter } from "next/navigation";

import { IRootState } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks";
import NavCategoryList from "./NavCategoryList";

export default function NavBar() {
  const { token } = useSelector((state: IRootState) => state.auth);
  const { logout } = useAuth()
  const pathName = usePathname()
  const router = useRouter()
  const [showCategories, setShowCategories] = useState<boolean>(false)

  return (
    <>
      <nav className="bg-gray-800 hidden md:flex flex-auto">
        <div className="container flex text-sm relative group ">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer hidden"
            onMouseEnter={() => setShowCategories(true)}
            onClick={() => setShowCategories(!showCategories)}
          >
            <span className="text-white">
              <i className={`fa-solid w-4 ${showCategories ? 'fa-caret-down' : 'fa-bars'} duration-300 `}></i>
            </span>
            <span className="capitalize ml-2 hover-categories text-white ">
              All Categories
            </span>
          </div>
          <NavCategoryList showCategories={showCategories} setShowCategories={setShowCategories} />

          <div className="flex items-center justify-between flex-grow md:pl-12 py-1 ">
            <div className="flex items-center space-x-1 capitalize ">
              <button
                type="button"
                onClick={() => router.push("/")}
                className={`${pathName == "/" ? "bg-primary" : ""
                  } text-gray-200 px-4 py-2 rounded-lg ease-in-out hover:text-white transition`}
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => router.push("/products")}
                className={`${pathName?.startsWith("/product") ||
                  pathName?.endsWith("/products")
                  ? "bg-primary"
                  : ""
                  } text-gray-200 px-4 py-2 rounded-lg ease-in-out  hover:text-white transition`}
              >
                Shop
              </button>
              <a
                href="#"
                className="text-gray-200 hover:text-white px-4 py-2 rounded-lg ease-in-out transition"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white px-4 py-2 rounded-lg ease-in-out transition"
              >
                Contact us
              </a>
            </div>

            <div className="space-x-2 flex gap-2 ">
              {token ? (
                <button
                  type="button"
                  onClick={logout}
                  className="text-primary flex items-center hover:text-white transition"
                >
                  <i className="fa fa-power-off mr-2 pt-0.5"></i>
                  Logout
                </button>
              ) : (
                <>
                  <button
                    className="text-gray-200 hover:text-white transition"
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </button>
                  <div className="border border-r border-primary"></div>
                  <button
                    onClick={() => router.push('/register')}
                    className="text-primary hover:text-white transition"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
