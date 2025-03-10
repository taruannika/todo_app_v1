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
        path: "complited-todos",
        element: <div>Complited</div>,
      },
      {
        path: "important-todos",
        element: <div>Important</div>,
      },
      {
        path: "due-dates",
        element: <div>Due Dates</div>,
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
