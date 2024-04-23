import { Raleway } from "next/font/google";
import Header from "/src/components/Header/Header.js";
import Footer from "/src/components/Footer/Footer.js";
import "./globals.css";
import ThemeContextProvider from "../context/Theme";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Rachel Ruddy's Site",
  description: "Rachel Ruddy's personal website that hosts their contact information and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}> 
        <ThemeContextProvider>
          <Header/>
            {children}
          <Footer/>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
