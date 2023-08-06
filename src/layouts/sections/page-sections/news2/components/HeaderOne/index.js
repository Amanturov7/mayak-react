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
        История Анны Губаренко именно об этом.
        О зависимости сына она узнала шесть лет назад, когда ему было 14.
        Иногда я находила у сына какие-то таблетки и слышала: Это от головы, не трогай.
        Часто обнаруживала в его комнате пузырьки с глазными каплями,
        одноразовые пластыри — и опять: Тебе какое дело?!
        или Чего ты нос суешь куда не просят!
        Глаза у меня болят, за нотником долго сидел.
        Некоторые вещи не замечала, некоторые не хотела замечать...
        <br />
        <br />
        Это ведь страшно. Ужасно даже думать, что такое может произойти с твоим ребенком,
        — рассказала Губаренко.
        Самые страшные опасения Анны подтвердились шесть лет назад.
        Сын переборщил с дозой, а в его комнате было много наркотиков…
      </p>
    </div>
  );
}

export default HeaderOne;
