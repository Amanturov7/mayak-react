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
function HeaderOne() {
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
      <p style={paragraphStyle}>
        В ГКНБ напомнили об уголовной ответственности, но обещают защиту и помощь за
        <br />
        сотрудничество со следствием.
        <br />
        ГКНБ просит сообщать о фактах вовлечения людей в незаконный оборот
        <br />
        наркотиков, сообщили в пресс-службе ведомства.
        <br />
        Номера телефонов дежурной части: (0312) 66-04-75, (0312) 62-65-04.
        <br />
        Анонимность гарантируется.
        <br />
        Кроме того, при добровольном признании и сотрудничестве со следствием
        <br />
        ввязавшихся в незаконную деятельность лиц органы нацбезопасности
        <br />
        предоставят максимально допустимые в рамках закона защиту и помощь,
        <br />
        сказали в госкомитете.
        <br />
        В ГКНБ рассказали, что появляется все больше наркотиков синтетического
        <br />
        происхождения и посредством соцсетей и мессенджеров для их распространения
        <br />
        и сбыта привлекают студентов и школьников.
        <br />
        Спецслужба призывает родителей быть бдительными, беседовать с детьми,
        <br />
        контролировать их времяпрепровождение, узнавать об окружении.
        <br />
        За подобного рода преступления к уголовной ответственности можно привлекать
        <br />
        с 14 лет, преступникам светит от 12 до 15 лет лишения свободы с конфискацией
        <br />
        имущества, предупреждает госкомитет.
      </p>
    </div>
  );
}

export default HeaderOne;
