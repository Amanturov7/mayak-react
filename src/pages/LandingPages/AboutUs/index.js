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
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/AboutUs/sections/Information";

// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import MapWithMarker from "./sections/Map";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function AboutUs() {
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
      <MKBox
        minHeight="15vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      ></MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        {/* <Team /> */}
        {/* <Featuring />
        <Newsletter /> */}
        <MapWithMarker lat={42.850444} lng={74.629377} name="Кара-дарьинская №52, Маяк Бишкек" />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
