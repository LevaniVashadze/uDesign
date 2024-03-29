import React, { lazy, Suspense, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ThemeContext from "../context/ThemeContext";
import PrivateRoutes from "../utils/PrivateRoutes";
import AuthContext, { AuthProvider } from "../context/AuthContext";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Editor = lazy(() => import("../pages/EditorPage"));

const App = () => {
  const [theme, setTheme] = React.useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    if ("theme" in localStorage) setTheme(window.localStorage.getItem("theme"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="p-0 m-o">
      <ThemeContext.Provider value={[theme, setTheme]}>
        <AuthProvider>
          <Suspense fallback={<div>Loading ...</div>}>
            <BrowserRouter basename="/uDesign/">
              <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<PrivateRoutes />}></Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </AuthProvider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
