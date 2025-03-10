import { useHomeContext } from "../pages/Home";
import Wrapper from "../Wrappers/BigSidebar";
import NavLinks from "./NavLinks";

const BigSidebar = ({ isSmallScreen }) => {
  const { isSidebarOpen } = useHomeContext();
  return (
    <Wrapper>
      <div
        className={!isSidebarOpen ? " show-sidebar container" : " container"}
      >
        <div className="content">
          <header>
            <h2>Todo App</h2>
          </header>
          <NavLinks isSmallScreen={isSmallScreen} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
