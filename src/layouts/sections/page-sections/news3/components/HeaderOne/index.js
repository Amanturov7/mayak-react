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
    maxWidth: "1000px",
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
        На территории столицы было закрашено и удалено более 400 надписей,
        <br />
        рекламирующих телеграмм-каналы, которые распространяют синтетические наркотики.
        <br />
        Об этом сообщает пресс-служба УВД города Бишкека.
        <br />
        Сотрудники столичной милиции провели профилактические мероприятия
        <br />
        под наименованием Синтетик.
        <br />
        Основная цель проверенных работ - выявление и удаление надписей,
        <br />
        содержащих информацию о распространении синтетических наркотиков.
      </p>
    </div>
  );
}

export default HeaderOne;
