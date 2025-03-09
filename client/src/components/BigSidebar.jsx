import { useHomeContext } from "../pages/Home";
import Wrapper from "../Wrappers/BigSidebar";

const BigSidebar = () => {
  const { isSidebarOpen } = useHomeContext();
  return (
    <Wrapper>
      <div
        className={isSidebarOpen ? " show-sidebar" : "container show-sidebar"}
      ></div>
    </Wrapper>
  );
};

export default BigSidebar;
