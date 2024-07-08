"use client"

import { IRootState } from "@/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { authService } from "../service";
import { setShowLoginPopup, setToken, setUser } from "../store/authSlice";
import { setCartItems } from "../store/cartSlice";
import { ILogin } from "../types";

export default function useAuth() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store: IRootState) => store.auth);

  const { data: userData } = useQuery({
    enabled: !!token,
    queryKey: ["auth/me"],
    queryFn: () => authService.getUser(token).then((res: any) => res.data),
  });

  useEffect(() => {
    if (userData && userData.id) dispatch(setUser(userData))
  }, [userData])

  const { mutate: loginMutate } = useMutation({
    mutationFn: async (login: ILogin) => await authService.login(login),
  });

  const loginProcess = async (login: ILogin) => {
    try {
      let rememberedData = "";
      if (login.remember === true) {
        rememberedData = JSON.stringify(login);
      }
      await loginMutate(login, {
        onSuccess: ({ data }: any) => {
          if (data.success) {
            localStorage.setItem("login-remember", window.btoa(rememberedData));
            dispatch(setToken(data.token));
            dispatch(setShowLoginPopup(false));
          }
        },
        onError: (err: any) => {
          toast.error(err?.response?.data?.detail);
          throw new Error(err.message);
        }
      })

    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.detail);
    }
  };

  const logout = () => {
    dispatch(setToken(null));
    dispatch(setCartItems([]));
  };


  return { token, user, loginProcess, logout };
}
