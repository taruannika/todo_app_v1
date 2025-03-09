import { useHomeContext } from "../pages/Home";
import Wrapper from "../Wrappers/SmallSidebar";
import { IoCloseCircleOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "container show-sidebar" : "container"}>
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <IoCloseCircleOutline />
          </button>
          <header>
            <h2>Todo App</h2>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
