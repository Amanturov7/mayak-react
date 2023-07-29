import { useEffect } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NewsPage1 from "layouts/sections/page-sections/news1";
import NewsPage2 from "layouts/sections/page-sections/news2";
import NewsPage3 from "layouts/sections/page-sections/news3";
import NewsPage4 from "layouts/sections/page-sections/news4";
import NewsPage5 from "layouts/sections/page-sections/news5";
import PageHeaders from "layouts/sections/page-sections/page-headers";

// import NewsPage2 from "./pages/Home/sections/components/news2";

// Material Kit 2 React themes

import theme from "assets/theme";
import Home from "layouts/pages/Home";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // Добавляем уникальный ключ к компоненту Route
        return <Route exact path={route.route} element={route.component} key={index} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/layouts/sections/page-sections/news1" element={<NewsPage1 />} />
        <Route path="/layouts/sections/page-sections/news2" element={<NewsPage2 />} />
        <Route path="/layouts/sections/page-sections/news3" element={<NewsPage3 />} />
        <Route path="/layouts/sections/page-sections/news4" element={<NewsPage4 />} />
        <Route path="/layouts/sections/page-sections/news5" element={<NewsPage5 />} />
        <Route path="/layouts/sections/page-sections/page-headers" element={<PageHeaders />} />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </ThemeProvider>
  );
}
