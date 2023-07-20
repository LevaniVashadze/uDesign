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
    <div>
      {/* Landing Page */}
      <section className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1 grid lg:grid-cols-2 items-center justify-items-center dark:bg-dark-blue -z-10">
          <div className="grid lg:gap-32 lg:grid-rows-2 grid-cols-1 col-start-1 row-start-1 w-5/6 md:w-3/4">
            <div
              className="lg:mr-8 lg:self-start lg:static flex flex-col justify-center items-start gap-4"
              style={{
                maxHeight: `calc(100vh - ${navbarHeight}px)`,
              }}
            >
              <h1 className="font-fira-code font-bold text-4xl xl:text-5xl drop-shadow-lg text-dark-blue dark:text-light-yellow">
                {t("header")}
              </h1>
              <p className="font-noto-sans font-semibold text-dark-gray dark:text-light-gray text-lg mb-4">
                {t("subheader")}
              </p>
              <img
                className="lg:hidden w-full border-2 border-dark-blue rounded self-end"
                src={import.meta.env.BASE_URL + "/images/editor.png"}
                alt="clothing editor"
              />
              <button className="lg:hidden bg-dark-blue w-full py-4 w-fit text-light-yellow font-semibold font-fira-code text-xl mt-6">
                {t("button")}
              </button>
            </div>

            <button className="hidden lg:inline h-fit mt-20 bg-dark-blue px-16 py-4 w-fit text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
              {t("button")}
            </button>
          </div>

          <img
            className="hidden lg:inline-block col-start-2 row-start-1 justify-self-start w-3/4 border-dark-blue border-2 rounded"
            src={import.meta.env.BASE_URL + "/images/editor.png"}
            alt="Clothes editor"
          />

          {/* Wave background */}
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
      </section>
      {/* Second Page */}
      <section className="min-h-screen -z-10 relative dark:bg-dark-blue">
        <div className="grid grid-cols-1 grid-rows-1">
          <div className="row-start-1 col-start-1 grid justify-items-center items-end gap-y-2 grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 min-h-screen w-screen">
            <div className="bg-white order-1 lg:order-none px-10 border-solid border-2 rounded border-dark-blue w-3/4 lg:w-3/5">
              <img
                className="mx-auto"
                src={
                  import.meta.env.BASE_URL + "/images/tshirt_front_no_bg.png"
                }
                alt="Tshirt"
              />
            </div>
            <div className="bg-white order-3 lg:order-none px-10 border-solid border-2 rounded border-dark-blue w-3/4 lg:w-3/5">
              <img
                className="mx-auto"
                src={
                  import.meta.env.BASE_URL + "/images/hoodie_front_no_bg.png"
                }
                alt="hoodie"
              />
            </div>
            <div className="bg-white order-5 lg:order-none  px-10 border-solid border-2 rounded border-dark-blue w-3/4 lg:w-3/5">
              <img
                className="mx-auto"
                src={
                  import.meta.env.BASE_URL + "/images/tote_bag_front_no_bg.png"
                }
                alt="tote bag"
              />
            </div>

            <div className="order-2 lg:order-none w-3/4 lg:w-3/5 text-center self-start">
              <p className="font-semibold text-2xl text-dark-blue font-noto-sans">
                T-Shirts
              </p>
            </div>
            <div className="order-4 lg:order-none w-3/4 lg:w-3/5 text-center self-start">
              <p className="font-semibold text-2xl text-dark-blue font-noto-sans">
                Hoodies
              </p>
              {/* Desktop Button */}
              <button className="hidden mix-blend-hard-light lg:inline h-fit mt-20 bg-dark-blue py-4 w-full text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
                {t("button")}
              </button>
            </div>
            <div className="order-6 lg:order-none w-3/4 lg:w-3/5 text-center self-start">
              <p className="font-semibold text-2xl ml-4 text-dark-blue font-noto-sans">
                and more...
              </p>
            </div>
            {/* Mobile Button */}
            <button className="order-7 my-8 lg:hidden h-fit bg-dark-blue py-4 w-3/4 lg:w-3/5 text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
              {t("button")}
            </button>
          </div>

          {/* Wave background */}
          <img
            src={import.meta.env.BASE_URL + "/images/wave.png"}
            className="hidden lg:inline-block row-start-1 col-start-1 rotate-180 h-screen w-screen relative -z-10"
            alt="wave"
          />
          <img
            src={import.meta.env.BASE_URL + "/images/mobile-wave.png"}
            className="lg:hidden row-start-1 col-start-1 rotate-180 h-full w-screen relative -z-10"
            alt="wave"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
