import React, { useContext, useEffect, useState } from "react";
import Nav from "../components/Nav";
import useTitle from "../hooks/useTitle";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  useTitle("Home");
  let { t, i18n } = useTranslation("home");
  let [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    setNavbarHeight(document.getElementById("navbar").offsetHeight);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 grid lg:grid-cols-2 items-center justify-items-center dark:bg-nav-bg -z-10">
        <div className="grid lg:gap-32 lg:grid-rows-2 grid-cols-1 col-start-1 row-start-1 w-5/6 md:w-3/4">
          <div
            className="lg:mr-8 lg:self-start lg:static flex flex-col justify-center items-start gap-4"
            style={{
              maxHeight: `calc(100vh - ${navbarHeight}px)`,
            }}
          >
            <h1 className="font-fira-code font-bold text-4xl xl:text-5xl drop-shadow-lg text-nav-bg dark:text-light-yellow">
              {t("header")}
            </h1>
            <p className="font-noto-sans font-semibold text-dark-gray dark:text-light-gray text-lg mb-4">
              {t("subheader")}
            </p>
            <img
              className="lg:hidden w-full border-2 border-black rounded self-end"
              src={import.meta.env.BASE_URL + "/images/editor.png"}
              alt="clothing editor"
            />
            <button className="lg:hidden bg-nav-bg w-full py-4 w-fit text-light-yellow font-semibold font-fira-code text-xl mt-6">
              {t("button")}
            </button>
          </div>

          <button className="hidden lg:inline mt-20 bg-nav-bg px-16 py-4 w-fit h-24 text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
            {t("button")}
          </button>
        </div>

        <img
          className="hidden lg:inline-block col-start-2 row-start-1 justify-self-start w-3/4 border-black border-2 rounded"
          src={import.meta.env.BASE_URL + "/images/editor.png"}
          alt="Clothes editor"
        />

        <img
          src={import.meta.env.BASE_URL + "/images/wave.png"}
          alt="wave"
          className="hidden lg:inline-block w-screen h-3/5 relative -z-10 col-span-full col-start-1 row-start-1 self-end"
        />
        <img
          src={import.meta.env.BASE_URL + "/images/mobile-wave.png"}
          alt="wave"
          className="lg:hidden w-screen h-3/5 relative -z-10 col-span-full col-start-1 row-start-1 self-end"
        />
      </div>
    </div>
  );
};

export default HomePage;
