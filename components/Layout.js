import { Montserrat_Alternates } from "@next/font/google";
import localFont from '@next/font/local'
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
// import  StarsCanvas  from "./canvas/Stars";
import { Montserrat } from "@next/font/google";

const pirulen = localFont({
  src: '../public/font/pirulen-rg.woff2',
  variable: '--font-pirulen',
})


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
      className={`page bg-black bg-backgroundDescNew
        text-white bg-cover bg-no-repeat bg-center
         ${montserrat.variable} ${myfont.variable}
          font-myfont ${pirulen.variable}
           relative`}
    >
      <Nav />
      <Header>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, 
          width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Header>
      {children}
      {/* <StarsCanvas /> */}
    </div>
  );
};

export default Layout;
