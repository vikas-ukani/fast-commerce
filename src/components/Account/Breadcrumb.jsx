"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
 
export default function Breadcrumb() {
  const pathname = usePathname()

  return (
    <div className="container py-4 flex items-center gap-3">
      <button
        type="button"
        onClick={() => useRouter().push("/")}
        className="text-primary text-base"
      >
        <i className="fa-solid fa-house"></i>
      </button>
      <span className="text-sm text-gray-400">
        <i className="fa-solid fa-chevron-right"></i>
      </span>
      <p className="text-gray-600 font-bold capitalize">{pathname.split("/").pop()}</p>
    </div>
  );
}
