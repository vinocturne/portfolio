import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

export default function Layout() {
    return (
        <section className={"font-noto"}>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </section>
    )
}