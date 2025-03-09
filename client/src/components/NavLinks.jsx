import { IoIosStats } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    path: "/",
    name: "Add Todo",
    icon: <IoIosStats />,
  },
  {
    path: "/all-todos",
    name: "All Todos",
    icon: <IoIosStats />,
  },

  {
    path: "/complited-todos",
    name: "Complited Todos",
    icon: <IoIosStats />,
  },
  {
    path: "/important-todos",
    name: "Important Todos",
    icon: <IoIosStats />,
  },
  {
    path: "/due-dates",
    name: "Due Dates",
    icon: <IoIosStats />,
  },
  {
    path: "/stats",
    name: "Stats",
    icon: <IoIosStats />,
  },
  //   {
  //     path: "/test",
  //     name: "Add Todo",
  //     icon: <IoIosStats />,
  //   },
];

const NavLinks = () => {
  return (
    <div className="nav-links">
      {navlinks.map((link) => {
        const { path, name, icon } = link;
        return (
          <NavLink className="nav-link" key={name} to={path} end>
            <span className="icon">{icon}</span>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
