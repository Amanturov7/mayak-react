/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import Card from "@mui/material/Card";
// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
// Home page sections
import DesignBlocks from "pages/Home/sections/DesignBlocks";
// import Pages from "pages/Home/sections/Pages";
// import Testimonials from "pages/Home/sections/Testimonials";
// import Download from "pages/Home/sections/Download";
// Home page components
// import BuiltByDevelopers from "pages/Home/components/BuiltByDevelopers";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
// import SignIn from "layouts/pages/authentication/sign-in";

// Images

function News() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   name: "sign in",
        //   route: "/pages/authentication/sign-in",
        //   label: "Войти",
        //   color: "info",
        //   component: <SignIn />,
        // }}
        sticky
      />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <DesignBlocks />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default News;
