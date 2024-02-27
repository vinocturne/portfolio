import { Outlet } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <Header />
      {/*<section className={"max-w-[1140px] px-[12px] py-[10px] mx-auto font-noto"}>*/}

      <Outlet />
      {/*</section>*/}
      <Footer />
    </>
  )
}
