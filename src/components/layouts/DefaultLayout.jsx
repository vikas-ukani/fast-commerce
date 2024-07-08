import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ModelContainer from "@/components/Popup/ModelContainer";
import LoginCard from "@/components/UI/Card/LoginCard";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

function DefaultLayout({ children }) {
  const { showLoginPopup, token } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <ModelContainer isOpen={showLoginPopup}>
        <LoginCard />
      </ModelContainer>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
