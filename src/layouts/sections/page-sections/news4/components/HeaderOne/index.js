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

import bgImage from "assets/images/photos/Спасите жизнь.jpg";

function HeaderOne() {
  const iconStyle = {
    width: "700px", // Укажите желаемую ширину
    height: "500px", // Укажите желаемую высоту
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
    // prettier-ignore
    <div style={newsStyle}>
      <img src={bgImage} style={iconStyle} />
      <p style={paragraphStyle}>
        Ежегодно 26 июня во всем мире отмечается День борьбы со злоупотреблением наркотическими
        средствами и их незаконным оборотом с целью активизации действий и
        сотрудничества в достижении мира, свободного от злоупотребления наркотиками.
        К этому дню Республиканский центр психиатрии и наркологии совместно с Центром по контролю
        и профилактике заболеваний (CDC) объявляет национальную кампанию Спасите жизни.
        <br />
        <br />
        Поделитесь фактами о наркотиках. Об этом сообщает пресс-служба ведомства.
        По ее данным, в Кыргызской Республике проблема злоупотребления наркотиками
        затрагивает тысячи людей. Обретает популярность аптечная наркомания
        и употребление новых психоактивных веществ.
        <br />
        <br />
        Большинство людей, употребляющих наркотики, сталкиваются со стигмой и дискриминацией,
        что может еще больше навредить их физическому и психическому здоровью
        и помешать им получить необходимую помощь.
        <br />
        <br />
        Цель кампании этого года - повысить осведомленность
        о важности уважительного и сочувственного отношения к людям, употребляющим наркотики.
        Кампания направлена на борьбу со стигмой и дискриминацией в отношении людей,
        употребляющих наркотики, путем продвижения языка и отношения,
        которые являются уважительными и неосуждающими.
        <br />
        <br />
        По данным ООН около 284 млн человек в возрасте от 15 до 64 лет
        во всем мире употребляли наркотики в 2020 году.
        С 2010 года потребление наркотиков увеличилось на 26 процентов.       
         <br />
        <br />
        Об этом говорится в докладе Управления ООН по наркотикам и преступности (UNODC) на 2022 год.
        По состоянию на 1 апреля 2023 года в Кыргызской Республике официально зарегистрировано
        7672 человек с наркотической зависимостью, из них 442 женщины и 7230 мужчин.
        26 июня мы призываем всех помочь распространить информацию о проблеме
        наркотической зависимости,
        мерах профилактики и активно пропагандировать в социальных сетях здоровый образ жизни.
        В рамках кампании будет проведен ряд профилактических мероприятий, а также QUIZ-night
        Поделитесь фактами о наркотиках. В ходе мероприятия планируется
        провести экспресс-тестирование на ВИЧ,
        рассказать о методах профилактики, в том числе о таких программах,
        как Поддерживающая терапия и Доконтактная профилактика.
        QUIZ-night пройдет в Бишкеке 26 июня в 18:00 ч.
        Зарегистрироваться на квиз-игру может любой желающий
        по ссылке в шапке профиля @rcpn.kg в инстаграме.
      </p>
    </div>
  );
}

export default HeaderOne;
