"use client"

import { NextComponentType, NextPageContext } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading } from "@/components";
import { useAuth } from "@/hooks";

export default function withAuth(Component: NextComponentType<NextPageContext, any, {}>) {
  return function WithAuth(props: any) {
    const { token } = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        if (token === null) {
          router.push("/login");
        } else {
          setIsAuthenticated(true);
        }
        setIsLoading(false);
      };

      checkAuth();
    }, [token, router]);

    if (isLoading) {
      return <Loading />
    }

    if (!isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  }
};


