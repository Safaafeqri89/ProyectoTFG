import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



// Componente Layout que define la estructura principal de nuestra pagina

export default function Layout() {

     return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
