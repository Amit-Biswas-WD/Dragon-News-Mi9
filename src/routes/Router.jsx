import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  // {
  // path: "/",
  // element: <Main />,
  // children: [
  {
    path: "/",
    element: <HomeLayout />,
  },
  //   ],
  // },
]);
