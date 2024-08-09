import { Rubik } from "next/font/google";
import "./globals.css";
import BackgroundPattern from "@/components/global/BackgroundPattern";
import Wrapper from "@/components/global/Wrapper";
import Header from "@/components/global/Header";
import { Toaster } from "sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Quiz App",
  description: "This is a frontend quiz app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-veryLightBlue w-full min-h-screen relative transition-all duration-300 ${rubik.className}`}
      >
        <Wrapper className={"relative z-10 w-full h-auto flex flex-col overflow-hidden "}>
          <Header />
          {children}
        </Wrapper>
        <BackgroundPattern />
        <Toaster />
      </body>
    </html>
  );
}
