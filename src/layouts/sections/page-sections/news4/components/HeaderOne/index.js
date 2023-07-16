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
    maxWidth: "1300px",
    margin: "0",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    fontSize: "16px",
    color: "#333",
  };
  const paragraphStyle = {
    marginBottom: "15px",
    textAlign: "left",
    maxWidth: "1300px",

  };
  return (
    <div style={newsStyle}>
      <img src={bgImage} style={iconStyle} />
      <p style={paragraphStyle}>
        Ежегодно 26 июня во всем мире отмечается День борьбы со злоупотреблением наркотическими средствами
        <br />
        и их незаконным оборотом с целью активизации действий и сотрудничества в достижении мира,
        <br />
        свободного от злоупотребления наркотиками.
        <br />
        К этому дню Республиканский центр психиатрии и наркологии совместно с Центром по контролю
        <br />
        и профилактике заболеваний (CDC) объявляет национальную кампанию Спасите жизни.
        <br />
        Поделитесь фактами о наркотиках. Об этом сообщает пресс-служба ведомства.
        <br />
        По ее данным, в Кыргызской Республике проблема злоупотребления наркотиками затрагивает тысячи людей.
        <br />
        Обретает популярность аптечная наркомания и употребление новых психоактивных веществ.
        <br />
        Большинство людей, употребляющих наркотики, сталкиваются со стигмой и дискриминацией,
        <br />
        что может еще больше навредить их физическому и психическому здоровью
        <br />
        и помешать им получить необходимую помощь. Цель кампании этого года - повысить осведомленность
        <br />
        о важности уважительного и сочувственного отношения к людям, употребляющим наркотики.
        <br />
        Кампания направлена на борьбу со стигмой и дискриминацией в отношении людей,
        <br />
        употребляющих наркотики, путем продвижения языка и отношения,
        <br />
        которые являются уважительными и неосуждающими.
        <br />
        По данным ООН около 284 млн человек в возрасте от 15 до 64 лет во всем мире употребляли наркотики в 2020 году.
        <br />
        С 2010 года потребление наркотиков увеличилось на 26 процентов. 
        <br />
        Об этом говорится в докладе Управления ООН по наркотикам и преступности (UNODC) на 2022 год.
        <br />
        По состоянию на 1 апреля 2023 года в Кыргызской Республике официально зарегистрировано 
        <br />
        7672 человек с наркотической зависимостью, из них 442 женщины и 7230 мужчин.
        <br />
        26 июня мы призываем всех помочь распространить информацию о проблеме наркотической зависимости,
        <br />
        мерах профилактики и активно пропагандировать в социальных сетях здоровый образ жизни.
        <br />
        В рамках кампании будет проведен ряд профилактических мероприятий, а также QUIZ-night 
        <br />
        Поделитесь фактами о наркотиках. В ходе мероприятия планируется провести экспресс-тестирование на ВИЧ,
        <br />
        рассказать о методах профилактики, в том числе о таких программах, 
        <br />
        как Поддерживающая терапия и Доконтактная профилактика. QUIZ-night пройдет в Бишкеке 26 июня в 18:00 ч.
        <br />
        Зарегистрироваться на квиз-игру может любой желающий по ссылке в шапке профиля @rcpn.kg в инстаграме.
      </p>

    </div>
  );
}

export default HeaderOne;
