import React from "react";
import { NavBar } from "./navBar/NavBar";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <Main children={children} />
      <Footer />
    </>
  );
};
