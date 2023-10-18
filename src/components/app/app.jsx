import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Intro } from "../intro/intro";
import { Products } from "../products/products";

export const App = () => {
  return (
    <>
      <div className="container">
        <Header />

        <Intro />
        <Products />
        <Footer />
      </div>
    </>
  );
};
