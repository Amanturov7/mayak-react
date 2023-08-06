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

import bgImage from "assets/images/photos/Краска.jpg";

function HeaderOne() {
  const iconStyle = {
    width: "500px", // Укажите желаемую ширину
    height: "500px", // Укажите желаемую высоту
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
        На территории столицы было закрашено и удалено более 400 надписей,
        рекламирующих телеграмм-каналы, которые распространяют синтетические наркотики.
        Об этом сообщает пресс-служба УВД города Бишкека.
        <br />
        <br />
        Сотрудники столичной милиции провели профилактические мероприятия
        под наименованием Синтетик.
        Основная цель проверенных работ - выявление и удаление надписей,
        содержащих информацию о распространении синтетических наркотиков.
      </p>
    </div>
  );
}

export default HeaderOne;
