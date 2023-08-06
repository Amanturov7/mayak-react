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

import bgImage from "assets/images/photos/Школьники.jpg";

function HeaderOne() {
  const iconStyle = {
    width: "700px", // Укажите желаемую ширину
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
        В Бишкеке задержали учеников престижной школы с наркотиками на 11,8 млн сомов.
        Кроме двоих школьников, в другом месте задержали еще одного — 18-летнего парня.
        В Бишкеке задержали двоих учеников одной из престижных школ при попытке
        закладки наркотиков в Ботсаду на Ахунбаева — 7 Апреля, сообщила пресс-служба ГКНБ.
        <br />
        <br />
        Одному 18 лет, другому — 15. Они учатся в 11-м и 9-м классах соответственно.
        По информации госкомитета, у них нашли почти килограмм синтетических наркотиков
        Альфа PVP — 921 грамм были в поясной сумке, а также 69 свертков по 0,4 грамма.
        ГКНБ поясняет, что на черном рынке одну дозу в свертке продают от 5 тысяч сомов.
        Изъятый 921 грамм наркотиков можно поделить на 2 302 дозы.
        <br />
        <br />
        Спецслужба отмечает, что общая стоимость достигнет 11,8 миллиона сомов.
        В пресс-службе сообщили о задержании еще одного члена группировки на пересечении
        улицы Жукеева-Пудовкина и Южной магистрали. Ему 18 лет. Ищут и других причастных.
        <br />
        <br />
        В ГКНБ рассказали, что появляется все больше наркотиков синтетического происхождения и
        посредством соцсетей и мессенджеров для распространения и сбыта привлекают студентов и
        детей школьного возраста, обещая им плату.
        <br />
        <br />
        ГКНБ призывает родителей быть бдительными, беседовать с детьми,
        контролировать их времяпрепровождение, узнавать об окружении.
        За подобного рода преступления к уголовной ответственности
        можно привлекать с 14 лет,
        преступникам светит от 12 до 15 лет лишения свободы с конфискацией имущества,
        предупреждает госкомитет.
      </p>
    </div>
  );
}

export default HeaderOne;
