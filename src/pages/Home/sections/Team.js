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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import mahabat from "assets/images/mahabat.jpg";
import dima from "assets/images/dima.jpg";
import kumysh from "assets/images/kumysh.jpg";
import sherboto from "assets/images/sherboto.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="dark">
              Наши сотрудники
            </MKTypography>
            <MKTypography variant="body2" color="dark" opacity={0.8}>
              Квалифицированные и опытные специалисты
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={sherboto}
                name="Шербото Токомбаев"
                position={{ color: "info", label: "Гештальт терапевт" }}
                description="Специалист лечения зависимости опыт более 25 лет «Гештальт терапевт» РЦ «Маяк Бишкек» показывает хорошие результаты по работе зависимости. Налаженная работа РЦ с группами созависимых (близких и родных) и Анонимных групп для зависимых. Предоставление качественных медицинских и консультационных услуг индивидуально для каждого реабилитанта. Полноценная реабилитация и качественная работа по программе 12 шагов"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={dima}
                name="Дмитрий Самарин"
                position={{ color: "info", label: "Психолог" }}
                description="РЦ «Маяк Бишкек» отлично проводит групповые и индивидуальные консультации для реабилитантов. Что очень хорошо сказывается на выздоровление. Полный анализ (чувств, мыслей и поведений) для дальнейшей работы и пояснения реабилитанту как бороться с зависимостью и как вооружиться в сложных ситуациях. Мотивация реабилитанта, что можно и нужно бороться с зависимостью. Зависимость – это болезнь которая не лечится с помощью краткосрочного курса терапии или медицинскими препаратами. Очень рад, что у нас в Кыргызстане открываются такие центры"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={mahabat}
                name="Махабат Ниязбекова"
                position={{ color: "info", label: "Психолог" }}
                description="В РЦ «Маяк Бишкек» замечательная и дружная группа (реабилитантов). Прекрасные условия пребывания. Хорошая и профессиональная команда консультантов и психологов. Очень гибкий и хорошо налаженный режим дня для группы. Качественные услуги и программы РЦ"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={kumysh}
                name="Байшукурова Кумыш Долгорбековна"
                position={{ color: "info", label: "Нарколог-реабилитолог высшей категории" }}
                description=" РЦ «Маяк Бишкек» имеет хороший опыт работы с химическими и другими видами зависимости. Постоянное прохождение и повышение квалификации команды РЦ. Предоставление психологов разных направлений. Духовника для укрепления веры и надежды на свое светлое будущее"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
