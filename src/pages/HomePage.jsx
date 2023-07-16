import React, { useContext } from "react";
import Nav from "../components/Nav";
import useTitle from "../hooks/useTitle";

let strings = {
  en: {
    main: "Design your own fashion",
    yourOwn: "Be your own designer",
    print: "High quality print",
    material: "High quality material",
    love: "Made with love",
    startNow: "Start designing now",
  },
  de: {
    main: "Designe deine eigene Mode",
    yourOwn: "Sei dein eigener Designer",
    print: "Hochwertiger Druck",
    material: "Hochwertiges Material",
    love: "Mit Liebe gemacht",
    startNow: "Jetzt mit dem Entwerfen beginnen",
  },
  ka: {
    main: "შექმენი შენი დიზაინი",
    yourOwn: "იყავი შენი დიზაინერი",
    print: "მაღალი ხარისხის ბეჭდვა",
    material: "მაღალი ხარისხის ნაჭერი",
    love: "შექმნილია სიყვარულით",
    startNow: "დაიწყე შენი დიზაინის შექმნა",
  },
};

const HomePage = () => {
  useTitle("Home");
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 grid lg:grid-cols-2 items-center justify-items-center">
        <div className="grid lg:gap-32 lg:grid-rows-2 grid-cols-1 col-start-1 row-start-1 w-5/6 md:w-3/4">
          <div
            className="lg:mr-8 lg:self-start lg:static flex flex-col justify-center items-start gap-4"
            style={{
              maxHeight: `calc(100vh - ${
                document.getElementById("navbar").offsetHeight
              }px)`,
            }}
          >
            <h1 className="font-fira-code font-bold text-4xl xl:text-5xl drop-shadow-lg">
              Be your own Designer
            </h1>
            <p className="font-noto-sans font-semibold text-gray-500 text-lg mb-4">
              Start designing with our easy to use editor and create the fashion
              you always wanted.
            </p>
            <img
              className="lg:hidden w-full border-2 border-black rounded self-end"
              src={import.meta.env.BASE_URL + "/images/editor.png"}
              alt="clothing editor"
            />
            <button className="lg:hidden bg-nav-bg w-full py-4 w-fit text-light-yellow font-semibold font-fira-code text-xl mt-6">
              Start Designing
            </button>
          </div>

          <button className="hidden lg:inline mt-20 bg-nav-bg px-16 py-4 w-fit h-24 text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
            Start Designing
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
