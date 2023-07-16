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

import bgImage from "assets/images/bg-coworking.jpeg";

function HeaderOne() {
  const iconStyle = {
    width: "200px", // Укажите желаемую ширину
    height: "200px", // Укажите желаемую высоту
  };
  const newsStyle = {
    maxWidth: "800px",
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
    <div style={newsStyle}>
      <img src={bgImage} style={iconStyle} />
      <p style={paragraphStyle}>
        На первой стадии алкоголизма люди могут выпивать по выходным или по вечерам в будни.
        <br />
        Мечта о выпивке в выходные или после работы в будни является первым признаком
        <br />
        развивающегося алкоголизма, сообщила агентству Ura.ru
        <br />
        главврач наркологической клиники Спасение Кира Устюгова.
        <br />
        Она пояснила, что люди на первой стадии алкоголизма могут выпивать
        <br />
        по выходным или по вечерам в будни.
        <br />
        Человек начинает мотивировать себя, что он заедет в магазин после работы
        <br />
        или дождется выходных, чтобы выпить. Он испытывает эйфорию от предстоящего процесса,
        <br />
        - отметила нарколог.
        <br />
        Со временем количество и крепость употребляемого алкоголя начинают расти.
        <br />В этом случае необходимо обратиться за помощью к специалисту.
      </p>
    </div>
  );
}

export default HeaderOne;
