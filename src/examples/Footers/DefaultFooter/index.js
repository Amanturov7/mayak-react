import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5} sx={{ mb: 2, flexBasis: { xs: "30%", md: "25%" } }}>
            <MKBox ml={5}>
              <Link to={brand.route}>
                <MKBox
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="15rem"
                  mb={2}
                  ml="5%"
                />
              </Link>
              <MKTypography
                // prettier-ignore
                sx={{ fontSize: "13px" }}
                variant="h6"
              >
                {brand.name}
              </MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={2} ml={3}>
              {socials.map(({ icon, link }, index) => (
                <MKTypography
                  key={index}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={1.0} // Adjust the right margin as needed
                  sx={{ width: "2.5rem" }} // Adjust the width as needed
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={1.7} sx={{ mb: 3, ml: "10%", flexBasis: "25%" }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="none"
                mb={1}
                sx={{ fontSize: 17 }} // Set the font size here
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="none"
                        sx={{ fontSize: 17 }} // Set the font size here
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="none"
                        sx={{ fontSize: 17 }} // Set the font size here
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
