import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


