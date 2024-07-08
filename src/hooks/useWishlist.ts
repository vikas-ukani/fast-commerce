"use client"

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "../service/api";
import wishlistService from "../service/wishlistService";
import { setShowLoginPopup } from "../store/authSlice";
import { setWishlists } from "../store/wishlistSlice";
import useAuth from "./useAuth";

export default function useWishlist() {
  const { token } = useAuth();
  const dispatch = useDispatch()

  const { data: wishlists, refetch: refetchWishlist } = useQuery({
    enabled: token !== null,
    queryKey: ["wishlists"],
    queryFn: () => wishlistService.getAll(token),
  })

  useEffect(() => {
    dispatch(setWishlists(wishlists))
  }, [wishlists])

  const addWishlist = async (product_id: string) => {
    if (!token) {
      toast.error("Please login to add item to wishlist");
      dispatch(setShowLoginPopup(true));
    };
    const res = await api.post(
      `/wishlist`,
      { product_id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Product added to your wishlist.");
    await refetchWishlist();
  };

  const removeWishlist = async (wishlistId: string) => {
    if (!token) return;
    await api.delete(`/wishlist/${wishlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Product removed from wishlist");
    await refetchWishlist();
  };

  useEffect(() => {
    refetchWishlist();
  }, [token]);

  return { wishlists, refetchWishlist, addWishlist, removeWishlist };
}
