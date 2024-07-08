"use client"

import { setToken } from "@/store/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../../service/api";
import { IRootState } from "../@/store";

export default function RegisterPage() {
  const router = useRouter();
  const { token } = useSelector((store: IRootState) => store.auth);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({});

  useEffect(() => {
    if (token) router.push("/");
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({});
    try {
      const { data: res } = await api.post("/register", form);
      console.log("res :>> ", res);
      if (res.success) {
        dispatch(setToken(res.token));
      }
    } catch (err) {
      setError(err.response.data);
      console.log("err :>> ", err.response.data);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">
          Create an account
        </h2>
        <p className="text-gray-600 mb-6 text-sm">Register for new customer</p>
        {error.detail && (
          <p className="text-primary mb-6 text-base">{error.detail}</p>
        )}
        <form method="post" autoComplete="off" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <div>
              <label htmlFor="name" className="text-gray-600 mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="john doe"
                onClick={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
                onClick={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                onClick={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="confirm_password"
                className="text-gray-600 mb-2 block"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                onClick={handleChange}
              />
            </div>
          </div>
          {/* <div className="mt-6">
                        <div className="flex items-center">
                            <input type="checkbox" name="aggrement" id="aggrement"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                            <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" className="text-primary">terms & conditions</a></label>
                        </div>
                    </div> */}
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase "
            >
              create account
            </button>
          </div>
        </form>

        {/* <!-- login with --> */}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <div className="mt-4 flex gap-4">
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase  text-sm hover:bg-blue-700"
          >
            facebook
          </a>
          <a
            href="#"
            className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase  text-sm hover:bg-red-500"
          >
            google
          </a>
        </div>
        {/* <!-- ./login with --> */}

        <p className="mt-4 text-center text-gray-600">
          Already have account?
          <Link href="/login" className="text-primary pl-2">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}
