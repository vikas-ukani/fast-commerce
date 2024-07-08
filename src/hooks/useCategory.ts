"use client"

import { categoryService } from "@/service";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../store/categorySlice";
import { ICategory } from "../types";



export default function useCategory() {
    const dispatch = useDispatch()
    const { data, isLoading, isError, refetch } = useQuery({
        queryFn: async () => await categoryService.fetchCategories(),
        queryKey: ["categories"],
        refetchInterval: 60 * 1000,
    });

    return { data, isLoading, isError, refetch }
}