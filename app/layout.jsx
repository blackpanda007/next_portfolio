import "./globals.css";

//components
import Header from "@/components/header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import { inter, caveat, vt, roboto_mono } from "@/components/fonts";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Satyam's Portfolio",
  description: "Personal Portfolio of Satyam Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PreloaderWrapper>
          <ViewTransitions>
            <PageTransition>
              <Header />
              {/* <StairTransition /> */}

              <div className="flex flex-col min-h-screen ">{children}</div>

              <footer className=" py-8 bg-[#313B2F]">
                <div className="container mx-auto px-4 text-center text-red-600">
                  <p>Made with ❤️ by BlackPanda</p>
                </div>
              </footer>
            </PageTransition>
          </ViewTransitions>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
