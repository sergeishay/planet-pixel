import { Montserrat_Alternates } from "@next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
// import  StarsCanvas  from "./canvas/Stars";
import { Montserrat } from "@next/font/google";


const montserrat = Montserrat({
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const myfont = Montserrat_Alternates({
  subsets: ["latin-ext"],
  variable: "--font-myfont",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-backgroundHome  text-white bg-cover bg-no-repeat bg-center ${montserrat.variable} ${myfont.variable} font-myfont relative`}
    >

      <Nav />
      <Header />
      {children}
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default Layout;
