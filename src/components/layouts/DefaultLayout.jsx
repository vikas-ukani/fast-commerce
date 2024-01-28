import Footer from "../Footer"
import Header from "../Header"
import NavBar from "../NavBar"
import 'react-multi-carousel/lib/styles.css';



function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default DefaultLayout