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
      <div className="flex-1 min-h-full grid grid-cols-2 items-center justify-items-center">
        <div className="grid gap-32 grid-rows-2 grid-cols-1 col-start-1 row-start-1 ml-24">
          <div className="mr-8">
            <h1 className="font-fira-code font-bold text-4xl xl:text-5xl drop-shadow-lg">
              Be your own Designer
            </h1>
            <p>
              Start designing with our easy to use editor and create the fashion
              you always wanted.
            </p>
          </div>

          <button className="mt-16 2xl:mt-28 lg:mt-20 bg-nav-bg px-16 py-4 w-fit text-light-yellow font-semibold font-fira-code text-xl xl:text-2xl">
            Start Designing
          </button>
        </div>
        <img
          className="col-start-2 row-start-1 justify-self-start w-3/4 border-black border-2 rounded"
          src={import.meta.env.BASE_URL + "/images/editor.png"}
          alt="Clothes editor"
        />

        <svg
          className="w-screen relative -z-10 col-span-2 col-start-1 row-start-1 self-end"
          viewBox="0 0 1920 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 84.503L35.6 63.3772C71.4 42.2515 142.6 0 213.6 35.2096C284.6 70.4192 355.4 183.09 426.4 221.116C497.4 259.495 568.6 222.877 640 194.709C711.4 166.541 782.6 146.824 853.6 147.176C924.6 147.88 995.4 169.006 1066.4 152.105C1137.4 134.853 1208.6 79.9258 1280 85.2072C1351.4 90.4887 1422.6 155.978 1493.6 187.667C1564.6 219.356 1635.4 217.243 1706.4 180.273C1777.4 143.303 1848.6 71.4755 1884.4 35.9138L1920 0V588H1884.4C1848.6 588 1777.4 588 1706.4 588C1635.4 588 1564.6 588 1493.6 588C1422.6 588 1351.4 588 1280 588C1208.6 588 1137.4 588 1066.4 588C995.4 588 924.6 588 853.6 588C782.6 588 711.4 588 640 588C568.6 588 497.4 588 426.4 588C355.4 588 284.6 588 213.6 588C142.6 588 71.4 588 35.6 588H0V84.503Z"
            fill="#FFF684"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomePage;
