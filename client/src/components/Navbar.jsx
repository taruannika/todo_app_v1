import Wrapper from "../Wrappers/Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { GoSun, GoMoon } from "react-icons/go";
import { useHomeContext } from "../pages/Home";

const Navbar = () => {
  const { isDarkMode, toggleTheme, toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div className="content">
        <button onClick={toggleSidebar} className="toggle-btn">
          <BiMenuAltLeft className="icon" />
        </button>

        <header>
          <h2 className="logo">Todo App</h2>
        </header>

        <button onClick={toggleTheme} className="theme-btn">
          {isDarkMode ? (
            <div className="toggle-theme">
              <GoSun />
              <p>Light</p>
            </div>
          ) : (
            <div className="toggle-theme">
              <GoMoon />
              <p>Dark</p>
            </div>
          )}

          {/* {isDarkMode ? <GoSun className="theme-icon" /> : <GoMoon />} */}
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
