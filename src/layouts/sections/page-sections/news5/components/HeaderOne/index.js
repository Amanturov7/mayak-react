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
// // import Link from "@mui/material/Link";
// // import Stack from "@mui/material/Stack";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// // import MKButton from "components/MKButton";
// import MKTypography from "components/MKTypography";

import bgImage from "assets/images/photos/Алко.jpg";

function HeaderOne() {
  const iconStyle = {
    width: "600px", // Укажите желаемую ширину
    height: "400px", // Укажите желаемую высоту
  };
  const newsStyle = {
    maxWidth: "1600px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#333",
  };
  const paragraphStyle = {
    marginBottom: "15px",
    textAlign: "left",
  };
  return (
    // prettier-ignore
    <div style={newsStyle}>
      <img src={bgImage} style={iconStyle} />
      <p style={paragraphStyle}>
        На первой стадии алкоголизма люди могут выпивать по выходным или по вечерам в будни.
        Мечта о выпивке в выходные или после работы в будни является первым признаком
        развивающегося алкоголизма, сообщила агентству Ura.ru
        главврач наркологической клиники Спасение Кира Устюгова.
        <br />
        <br />
        Она пояснила, что люди на первой стадии алкоголизма могут выпивать
        по выходным или по вечерам в будни.
        Человек начинает мотивировать себя, что он заедет в магазин после работы
        или дождется выходных, чтобы выпить. Он испытывает эйфорию от предстоящего процесса,
        - отметила нарколог.
        <br />
        <br />
        Со временем количество и крепость употребляемого алкоголя начинают расти.
        В этом случае необходимо обратиться за помощью к специалисту.
      </p>
    </div>
  );
}

export default HeaderOne;
