"use client"

// import "@/app/globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ModelContainer from "@/components/Popup/ModelContainer";
import LoginCard from "@/components/UI/Card/LoginCard";
import { IRootState } from "@/store";
import { setCategories } from "@/store/categorySlice";
import { useRouter } from 'next/navigation';
import { ReactNode, useLayoutEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useCategory } from "../../hooks";
import { ICategory } from "../../types";
import Header from "../Header";
interface DefaultLayoutProps {
  children?: ReactNode;
}

export default function DefaultLayout({
  children,
}: Readonly<DefaultLayoutProps>) {
  const { showLoginPopup } = useSelector((state: IRootState) => state.auth);
  const dispatch = useDispatch()
  const { data } = useCategory()
  const router = useRouter();

  useLayoutEffect(() => {
    if (data && data.length > 0) dispatch(setCategories(data as ICategory[]))
  }, [data])
  return <>
    <Header />
    <ModelContainer isOpen={showLoginPopup}>
      <LoginCard />
    </ModelContainer>
    <NavBar />
    {children}
    <Footer />
  </>
}

