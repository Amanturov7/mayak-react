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
import bolot from "assets/images/Мансуров Болот.png";
import esen from "assets/images/Эсенберди Чынгыз.png";
import denisKamil from "assets/images/Бадыков Денис Камильевич.png";
import denisPysh from "assets/images/Денис Пышкин .png";

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
                image={bolot}
                name="Мансуров Болот"
                position={{ color: "info", label: "Директор" }}
                description="Наша основная цель оказывать помощь зависимым людям, которые не могут сами побороть эту болезнь. В данный момент в Кыргызской Республике зависимость охватила большую часть молодого поколения. Мне страшно представить, что произойдет через некоторое время. Так как молодое поколение, это наше будущее. У меня есть дети и внуки, за которых я беспокоюсь. Болезнь не смотрит на возраст и социальный статус, ему подвержены все без исключения. Хочу заметить, что наша команда обращает внимание на возраст и особенности состояния здоровья реабилитанта. Мы придерживаемся лояльного отношения ко всем реабилитантам. Постоянно улучшаем условия РЦ и пополняем новыми методами нашу программу «12 шагов»"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={esen}
                name="Эсенберди уулу Чынгыз"
                position={{ color: "info", label: "Программный руководитель" }}
                description="Наш РЦ «Маяк Бишкек» использует программу «12 шагов» лечения зависимости. На данный момент эта программа является лучшей среди всех. Наша команда имеет консультантов, которые на собственном опыте проходили все 12 шагов и знают, как правильно действовать и поступать при прохождении первых шагов. Так же мы выдаем личные задания с соглашения психолога реабилитантам с особенностями состояния здоровья, для анализирования проблемы зависимости. Мы не стоим на месте и постоянно усовершенствуем нашу методику лечения. Приглашаем специалистов с разных стран, для получения опыта и применения их в нашей методике прохождения реабилитации"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={sherboto}
                name="Шербото Токомбаев"
                // prettier-ignore
                position={{ color: "info", label: "Гештальт терапевт. Специалист лечения зависимости опыт более 25 лет" }}
                description="РЦ «Маяк Бишкек» показывает хорошие результаты по работе зависимости. Налаженная работа РЦ с группами созависимых (близких и родных) и Анонимных групп для зависимых. Предоставление качественных медицинских и консультационных услуг индивидуально для каждого реабилитанта. Полноценная реабилитация и качественная работа по программе 12 шагов"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={dima}
                name="Дмитрий Самарин"
                position={{ color: "info", label: "Психолог" }}
                description="РЦ «Маяк Бишкек» отлично проводит групповые и индивидуальные консультации для реабилитантов. Что очень хорошо сказывается на выздоровление. Полный анализ (чувств, мыслей и поведений) для дальнейшей работы и пояснения реабилитанту как бороться с зависимостью и как вооружиться в сложных ситуациях. Мотивация реабилитанта, что можно и нужно бороться с зависимостью. Зависимость – это болезнь которая не лечится с помощью краткосрочного курса терапии или медицинскими препаратами. Очень рад, что у нас в Кыргызстане открываются такие центры "
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={denisKamil}
                name="Бадыков Денис Камильевич"
                position={{ color: "info", label: "Консультант по химической зависимости" }}
                description="РЦ «Маяк Бишкек» на моё мнение является лучшей из Реабилитационных Центров в Кыргызстане. Проработав в некоторых РЦ, я могу сказать, что данный подход, который используется у нас является самой лучшей среди остальных. Лояльный подход к реабилитантам, гибкий график режима дня (где включено свободное время провождение и занятия по желанию группы). Условия содержания в РЦ. Специалисты, которые у нас работают прекрасно знают свое дело. Работа консультантов приносит мне удовольствие, так как мы понимаем нашу основную цель. Постоянная мотивация со стороны руководства, даёт нам прилив энергии и силы, для дальнейшего достижения целей нашей команды"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={denisPysh}
                name="Денис Пышкин"
                position={{ color: "info", label: "Духовник" }}
                description="Благодарность руководству РЦ «Маяк Бишкек», что они используют такой метод к лечению зависимости. Моё мнение, что зависимому нужна и духовная пища для преодоления болезни. Вера в Бога, который простит все грехи и направит на правильный путь, если сам человек пойдет на встречу к Нему. В лекциях которых я провожу реабилитанты задают многие вопросы на которые они ждут ответа и успокоения. Ценности жизни, на которые они не обращали внимания в употреблении. Пустая трата времени жить которая так коротка и здоровья которая не вечна. Духовная поддержка является основой в методике лечения, так как программа «12 шагов» придерживается духовности в многих шагах. Спасибо руководству РЦ, что они придерживаются правильного пути. Желаю им успехов и процветания в их деле"
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
