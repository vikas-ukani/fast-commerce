"use client"

import Image from "next/image";
import { useAuth } from "../../../hooks";
import { IUser } from "../../../types";

function AccountSidebar() {
  const { user, logout }: { user: IUser, logout: () => void } = useAuth()

  return (
    <div className="col-span-3">
      <div className="px-4 py-3 border shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            height={1000}
            width={1000}
            src="/assets/images/avatar.png"
            alt="profile "
            className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <p className="text-gray-500">Hello,</p>
          <h4 className="font-bold text-primary">{user.name}</h4>
        </div>
      </div>

      <div className="mt-6 bg-white border shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-2 pl-8">
          <a
            href="#"
            className="relative hover:text-primary block font-bold capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-address-card"></i>
            </span>
            Manage account
          </a>
          <div className="pl-4 space-y-2">
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-user"></i>
              </span>
              Profile information
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-address-book"></i>
              </span>
              Manage addresses
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-unlock-alt"></i>
              </span>
              Change password
            </a>
          </div>
        </div>

        <div className="space-y-2 pl-8 pt-4">
          <a
            href="#"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-box-archive"></i>
            </span>
            My order history
          </a>
          <div className="pl-4 space-y-2">
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-undo"></i>
              </span>
              My returns
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-ban"></i>
              </span>
              My Cancellations
            </a>
            <a
              href="#"
              className="relative hover:text-primary block capitalize transition"
            >
              <span className="absolute -left-8 top-0 text-base">
                <i className="fa-solid fa-star"></i>
              </span>
              My reviews
            </a>
          </div>
        </div>

        <div className="space-y-2 pl-8 pt-4">
          <a
            href="#"
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-regular fa-credit-card"></i>
            </span>
            Payment methods
          </a>
          <a
            href="#"
            className="relative hover:text-primary block capitalize transition"
          >
            voucher
          </a>
        </div>

        <div className="space-y-2 pl-8 pt-4">
          <a
            href="#"
            className="relative text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-regular fa-heart"></i>
            </span>
            My wishlist
          </a>
        </div>

        <div className="space-y-2 pl-8 pt-4">
          <button
            onClick={() => logout()}
            className="relative hover:text-primary block font-medium capitalize transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountSidebar;
