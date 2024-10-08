import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import MyHeader from "@/components/Header/MyHeader";
import MyFooter from "@/components/Footer/MyFooter";
import ico from "@/app/favicon.ico";
import Head from "next/head";
import MyFooterMobile from "@/components/Footer/MyFooterMobile";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Северяночка",
  description: "Продуктовый магазин Северяночка",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#FBF8EC] h-fit"}>
        {" "}
        <MyHeader />
        <main className="body__without__footer">{children}</main>
        <MyFooter />
        <div className="hidden max-[900px]:block max-[900px]:max-w-full ">
         <MyFooterMobile /> 
        </div>
        
      </body>
    </html>
  );
}
