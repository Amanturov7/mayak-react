import React from "react";
import Gallery from "./sections/Gallery";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

const GalleryPage = () => {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Gallery />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default GalleryPage;
