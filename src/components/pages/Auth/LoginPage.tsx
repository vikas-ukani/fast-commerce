"use client"

import LoginCard from "@/components/UI/Card/LoginCard";
import { useCart } from "@/hooks";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { token } = useAuth();
  const { getCartItems } = useCart()

  useEffect(() => {
    async function fetchingCartItems() {
      await getCartItems();
    }

    if (token) {
      fetchingCartItems()
      router.push("/");
    }
  }, [token]);

  return (
    <div className="contain py-16">
      <LoginCard />
    </div>
  );
}
