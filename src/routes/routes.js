import Home from "../pages/Home/Home";
import MyCourses from "../pages/Mycources/Mycources";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/cources", Component: MyCourses },
  // <Route path="*" element={<NotFound />} />,
];

export { publicRoutes };
