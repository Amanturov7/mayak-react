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
      <iframe
        width="560" // Ширина видео
        height="315" // Высота видео
        src="https://www.youtube.com/embed/c0zM6gnz_M0" // Замените ВАШ_ИДЕНТИФИКАТОР_ВИДЕО на идентификатор вашего видео на YouTube
        title="YouTube video player"
        frameBorder="0" // Use frameBorder instead of frameborder
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen // Use allowFullScreen instead of allowfullscreen
      />
      <p style={paragraphStyle}>
        Что такое солевые наркотики, как они уничтожают человека и как часто приводят к смерти…
        <br />
        История Анны Губаренко именно об этом.
        <br />
        О зависимости сына она узнала шесть лет назад, когда ему было 14.
        <br />
        Иногда я находила у сына какие-то таблетки и слышала: Это от головы, не трогай.
        <br />
        Часто обнаруживала в его комнате пузырьки с глазными каплями,
        <br />
        одноразовые пластыри — и опять: Тебе какое дело?!
        <br />
        или Чего ты нос суешь куда не просят!
        <br />
        Глаза у меня болят, за нотником долго сидел.
        <br />
        Некоторые вещи не замечала, некоторые не хотела замечать...
        <br />
        Это ведь страшно. Ужасно даже думать, что такое может произойти с твоим ребенком,
        <br />
        — рассказала Губаренко.
        <br />
        Самые страшные опасения Анны подтвердились шесть лет назад.
        <br />
        Сын переборщил с дозой, а в его комнате было много наркотиков…
      </p>
    </div>
  );
}

export default HeaderOne;
