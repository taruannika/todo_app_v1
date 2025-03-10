import { IoIosStats } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { BsFillCollectionFill, BsCalendar2CheckFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { MdNotificationImportant } from "react-icons/md";
import { useHomeContext } from "../pages/Home";

const navlinks = [
  {
    path: "/",
    name: "Add Todo",
    icon: <IoMdAdd />,
  },
  {
    path: "/all-todos",
    name: "All Todos",
    icon: <BsFillCollectionFill />,
  },

  {
    path: "/complited-todos",
    name: "Complited Todos",
    icon: <MdDone />,
  },
  {
    path: "/important-todos",
    name: "Important Todos",
    icon: <MdNotificationImportant />,
  },
  {
    path: "/due-dates",
    name: "Due Dates",
    icon: <BsCalendar2CheckFill />,
  },
  {
    path: "/stats",
    name: "Stats",
    icon: <IoIosStats />,
  },
];

const NavLinks = ({ isSmallScreen }) => {
  const { toggleSidebar } = useHomeContext();
  const handleClick = () => {
    if (isSmallScreen) {
      toggleSidebar();
    }
  };
  return (
    <div className="nav-links">
      {navlinks.map((link) => {
        const { path, name, icon } = link;
        return (
          <NavLink
            onClick={handleClick}
            className="nav-link"
            key={name}
            to={path}
            end
          >
            <span className="icon">{icon}</span>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
