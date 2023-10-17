import { HeaderIntro } from "../header-intro/header-intro";
import { HeaderNav } from "../header-nav/header-nav";
//import headerStyles from "./header.module.css";

export const Header = () => {
  return (
    <header>
        <div className="container">
           <HeaderNav />
           <HeaderIntro />
        </div>
    </header>
    
  )
}
