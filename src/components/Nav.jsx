import React, { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initFlowbite } from "flowbite";
import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // hide the wrong toggles and show the right ones and add the theme class to the root element
    if (theme === "dark") {
      let dark_mode_toggles = document.getElementsByClassName("dark-mode");
      for (let i = 0; i < dark_mode_toggles.length; i++) {
        dark_mode_toggles[i].classList.add("hidden");
      }
      let light_mode_toggles = document.getElementsByClassName("light-mode");
      for (let i = 0; i < light_mode_toggles.length; i++) {
        light_mode_toggles[i].classList.remove("hidden");
      }
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      let dark_mode_toggles = document.getElementsByClassName("dark-mode");
      for (let i = 0; i < dark_mode_toggles.length; i++) {
        dark_mode_toggles[i].classList.remove("hidden");
      }
      let light_mode_toggles = document.getElementsByClassName("light-mode");
      for (let i = 0; i < light_mode_toggles.length; i++) {
        light_mode_toggles[i].classList.add("hidden");
      }
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // refresh the flowbite components
    window.initFlowbite();
  }, []);

  const navigationbars = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
  };

  const path = useLocation().pathname;

  return (
    <div>
      <nav className="dark:bg-dark-blue" id="navbar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center p-4 lg:p-0">
            <span className="font-bold font-montserrat text-2xl whitespace-nowrap text-dark-blue dark:text-light-yellow font-bold">
              uDesign
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            {/* Desktop stuff */}
            <div className="hidden lg:block">
              <svg
                className="dark-mode w-8"
                onClick={() => setTheme("dark")}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  className="dark:stroke-light-gray stroke-1 stroke-dark-gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
                />
              </svg>
              <svg
                className="light-mode w-9 hidden"
                onClick={() => setTheme("light")}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  className="dark:stroke-light-gray stroke-1 stroke-dark-gray"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>
            </div>
            <Link className="hidden lg:block ml-3">
              <svg
                className="w-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  className="dark:stroke-light-gray stroke-dark-gray stroke-1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                />
              </svg>
            </Link>
            <div className="hidden lg:block ml-3">
              <UserDropdown />
            </div>
            <div className="hidden lg:block ml-3">
              <LanguageDropdown />
            </div>

            {/* Hamburger Button */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-light-gray lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-8 fill-light-gray dark:fill-dark-gray"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col !mt-0 lg:px-4 lg:flex-row lg:space-x-8 text-2xl lg:text-2xl">
              {Object.keys(navigationbars).map((key) => (
                <li className="text-center" key={key}>
                  <Link
                    to={navigationbars[key]}
                    className={
                      // check if the current path is the same as the link href, if it is makes it blue and underlines it
                      navigationbars[key] === path
                        ? "font-semibold hover:decoration-0 hover:no-underline hover:text-dark-gray dark:hover:text-light-gray font-noto-sans block py-1.5 px-4 dark:text-dark-blue bg-light-yellow cursor-pointer lg:bg-transparent dark:lg:text-light-yellow lg:text-dark-blue lg:pt-3 lg:pb-4 lg:border-t-[0.25rem] dark:border-light-yellow border-dark-blue"
                        : "font-semibold hover:decoration-0 hover:no-underline hover:text-dark-blue dark:hover:text-light-yellow font-noto-sans block py-1.5 px-4 dark:text-light-gray text-dark-gray cursor-pointer lg:pt-3 lg:pb-4 lg:border-t-[0.25rem] border-transparent"
                    }
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
              <li className="lg:hidden flex justify-center py-1.5">
                {/* Mobile Stuff*/}
                <Link className=" hover:text-yellow-270 mx-1.5">
                  <svg
                    className="dark-mode w-8"
                    onClick={() => setTheme("dark")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      className="dark:stroke-light-gray stroke-1 stroke-dark-gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
                    />
                  </svg>
                  <svg
                    className="light-mode w-9 hidden"
                    onClick={() => setTheme("light")}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      className="dark:stroke-light-gray stroke-1 stroke-dark-gray"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    />
                  </svg>
                </Link>

                <div className="mx-1.5">
                  <UserDropdown />
                </div>

                <Link className="mx-1">
                  <svg
                    className="w-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      className="dark:stroke-light-gray stroke-dark-gray stroke-1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
                    />
                  </svg>
                </Link>
              </li>
              <li className="lg:hidden flex justify-center py-1.5 ml-4">
                <LanguageDropdown className="basis-1/1" />
              </li>
              <li className="lg:hidden">
                <hr className="border-solid border-2 border-light-yellow" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
