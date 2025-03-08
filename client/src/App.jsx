import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddTodo, AllTodos, Home, Stats, Error } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AddTodo />,
      },
      {
        path: "all-todos",
        element: <AllTodos />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
