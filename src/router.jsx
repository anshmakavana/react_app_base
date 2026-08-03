import { Routes, Route } from "react-router-dom";

// pages
import Auth from "./pages/common/Auth";
import Verification from "./pages/common/Verification";
import NotFound from "./pages/common/NotFound";
import Home from "./pages/user/Home";
import About from "./pages/user/About";

// layouts
import UserLayout from "./layouts/user/UserLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/verification" element={<Verification />} />

      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
