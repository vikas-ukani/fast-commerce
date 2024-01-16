import Footer from "../Footer"
import Header from "../Header"
import NavBar from "../NavBar"



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