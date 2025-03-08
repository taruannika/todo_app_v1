import { Outlet } from "react-router-dom";
import Wrapper from "../Wrappers/Home";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useEffect, useState } from "react";

const checkTheme = () => {
  const isDarkTheme = localStorage.getItem("theme") === "true";
  if (isDarkTheme) {
    document.body.classList.add("dark-mode");
  }
  return isDarkTheme;
};

const homeContext = createContext();

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(checkTheme());

  useEffect(() => {
    setIsDarkMode(checkTheme());
  }, []);

  const toggleTheme = () => {
    const theme = !isDarkMode;
    setIsDarkMode(theme);
    document.body.classList.toggle("dark-mode", theme);
    localStorage.setItem("theme", theme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <homeContext.Provider
      value={{ isDarkMode, toggleTheme, isSidebarOpen, toggleSidebar }}
    >
      <Wrapper>
        <main className="home">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </homeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHomeContext = () => useContext(homeContext);
export default Home;
