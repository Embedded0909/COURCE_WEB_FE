import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const publicRoutes = [
  { path: "/:id", Component: Home },
  // <Route path="*" element={<NotFound />} />,
];

export { publicRoutes };
