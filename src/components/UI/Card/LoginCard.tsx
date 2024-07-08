"use client"

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ILogin } from "../../../types";

export default function LoginCard() {
  const router = useRouter();
  const { token, loginProcess } = useAuth();
  const [login, setLogin] = useState<ILogin>({ email: "", password: "", remember: false });
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  useEffect(() => {
    const rememberCred = window.atob(
      localStorage.getItem("login-remember") || ""
    );
    if (rememberCred) {
      setLogin(JSON.parse(rememberCred));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    console.log('login form: ', login)
    await loginProcess(login);
    setLoginLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="max-w-lg mx-auto shadow-lg border px-6 py-7 rounded-xl overflow-hidden">
      <h2 className="text-2xl uppercase  mb-1">Login</h2>
      <p className="text-gray-600 mb-6 text-sm">welcome back,</p>

      <form method="post" autoComplete="off" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <pre>
            <code>
              email: vikasukani5@gmail.com
              <br />
              password: password
            </code>
          </pre>
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
              defaultValue={login.email}
              onChange={handleInputChange}
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
              defaultValue={login.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              checked={login.remember == true}
              onChange={handleInputChange}
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-primary underline">
            Forgot password
          </a>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={loginLoading}
            className="block w-full py-2 text-center bg-primary border-primary hover:bg-primary border rounded hover:text-white transition capitalize   duration-300"
          >
            {loginLoading ? "Signing..." : "Login"}
          </button>
        </div>
      </form>

      {/* <!-- login with --> */}
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or login with
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <div className="mt-4 flex gap-4">
        <a
          href="#"
          className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase text-sm hover:bg-blue-700"
        >
          facebook
        </a>
        <a
          href="#"
          className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase text-sm hover:bg-red-500"
        >
          google
        </a>
      </div>
      {/* <!-- ./login with --> */}

      <p className="mt-4 text-center text-gray-600">
        {"Don't have account?"}
        <Link href="/register" className="text-primary pl-1 underline">
          Register now
        </Link>
      </p>
    </div>
  );
}
