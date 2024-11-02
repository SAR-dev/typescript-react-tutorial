import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import ClassDetails from "./pages/ClassDetails";
import ClassScheduler from "./pages/ClassScheduler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/class/details",
    element: <ClassDetails />,
  },
  {
    path: "/class/scheduler",
    element: <ClassScheduler />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App