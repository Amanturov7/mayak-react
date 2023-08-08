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
import bgImage from "assets/images/photos/Нарко.webp";
function HeaderOne() {
  const iconStyle = {
    width: "350px", // Укажите желаемую ширину
    height: "500px",
    marginLeft: "150px", // Укажите желаемую высоту
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
        В ГКНБ напомнили об уголовной ответственности, но обещают защиту и помощь за
        сотрудничество со следствием.
        ГКНБ просит сообщать о фактах вовлечения людей в незаконный оборот
        наркотиков, сообщили в пресс-службе ведомства.
        <br />
        <br />
        Номера телефонов дежурной части: 
        <br />
        (0312) 66-04-75, (0312) 62-65-04.
        <br />
        Анонимность гарантируется.
        <br />
        <br />
        Кроме того, при добровольном признании и сотрудничестве со следствием
        ввязавшихся в незаконную деятельность лиц органы нацбезопасности
        предоставят максимально допустимые в рамках закона защиту и помощь,
        сказали в госкомитете.
        <br />
        <br />

        В ГКНБ рассказали, что появляется все больше наркотиков синтетического
        происхождения и посредством соцсетей и мессенджеров для их распространения
        и сбыта привлекают студентов и школьников.
        Спецслужба призывает родителей быть бдительными, беседовать с детьми,
        контролировать их времяпрепровождение, узнавать об окружении.
        За подобного рода преступления к уголовной ответственности можно привлекать
        с 14 лет, преступникам светит от 12 до 15 лет лишения свободы с конфискацией
        имущества, предупреждает госкомитет.
      </p>
    </div>
  );
}

export default HeaderOne;
