import { Inter, Roboto_Mono, VT323 } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Inter({ subsets: ["latin"] });

const vt = VT323({
  weight: "400",
  subsets: ["latin"],
});

const roboto_mono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Satyam's Portfolio",
  description: "Personal Portfolio of Satyam Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>
          <div className="flex flex-col min-h-screen ">{children}</div>
        </PageTransition>

        <footer className=" py-8 bg-[#313B2F]">
          <div className="container mx-auto px-4 text-center text-red-600">
            <p>Made with ❤️ by BlackPanda</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
