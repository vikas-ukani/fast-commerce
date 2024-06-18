import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import Footer from "../Footer";
import Header from "../Header";
import NavBar from "../NavBar";
import ModelContainer from "../Popup/ModelContainer";
import LoginCard from "../UI/Card/LoginCard";

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
