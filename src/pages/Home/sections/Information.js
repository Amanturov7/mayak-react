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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import AmbulatorkaIcon from "assets/images/icons/servis/Амбулаторка.png";
import DetoxIcon from "assets/images/icons/servis/Детокс.png";
import DuhovnoeIcon from "assets/images/icons/servis/Духовное.png";
import MotivationIcon from "assets/images/icons/servis/Мотивация.png";
import SupportIcon from "assets/images/icons/servis/Поддержка.png";
import PsyhologyIcon from "assets/images/icons/servis/Психолог.png";

const iconStyle = {
  width: "25px", // Укажите желаемую ширину
  height: "25px", // Укажите желаемую высоту
};
function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <div style={{ marginBottom: "100px" }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Вам
                      <br />
                      нужна помощь?
                    </>
                  }
                  description="Свяжитесь с нами чтобы получить бесплатную консультацию."
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Услуги"
                  description="Анонимный Реабилитационный центр предоставляет ряд услуг, чтобы узнать больше нажмите 'Подробнее'"
                  action={{
                    type: "internal",
                    route: "/pages/landing-pages/Information",
                    label: "Подробнее",
                  }}
                />
              </RotatingCard>
            </div>
            <div>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={
                    <>
                      Полезная
                      <br />
                      информация
                    </>
                  }
                  description="Информация о видах зависимостей"
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Зависимость"
                  description="Чтобы узнать больше о зависимостях нажмите 'Подробнее'"
                  action={{
                    type: "internal",
                    route: "/pages/landing-pages/Information",
                    label: "Подробнее",
                  }}
                />
              </RotatingCard>
            </div>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={DetoxIcon} style={iconStyle} alt="Детокс-капельницы" />}
                  title="Детокс-капельницы"
                  description="Детокс-капельница - эффективный способ восстановить и очистить организм после перенесенных заболеваний и других симптомов недомогания, похмелья и физических ломок. Питает организм витаминами. Ускоряет восстановление организма от химического отравления. Повышает эффективность дальнейших лечебных мероприятий"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={PsyhologyIcon} style={iconStyle} alt="Психологические услуги" />}
                  title="Психологические услуги"
                  description="Психологические услуги - ориентированны на повышение социально-психологической компетентности и оказания психологической помощи человеку, непосредственная работа с людьми, направленная на решение различного рода психологических проблем, связанных с трудностями в межличностных отношениях, а также глубинных личностных проблем"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={DuhovnoeIcon} style={iconStyle} alt="Духовные услуги" />}
                  title="Духовные услуги"
                  description="Духовные услуги - подход, позволяющий улучшить качество жизни пациентов (детей и взрослых) и их семей, столкнувшихся с проблемами, связанными с опасным для жизни заболеванием, путём предотвращения и облегчения страданий за счёт раннего выявления, тщательной оценки и лечения боли и других физических симптомов, а также оказания психосоциальной и духовной поддержки"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={MotivationIcon} style={iconStyle} alt="Мотивационные услуги" />}
                  title="Мотивационные услуги"
                  description="Мотивационные услуги – это одна из важнейших составляющих, от которой во многом зависит исход терапии. Мотивация включает в себя осознание своих проблем, активный поиск решений, четкое соблюдение всех рекомендаций лечащих врачей. Особое значение эта проблема приобретает при терапии зависимостей, так как более 50% людей, зависимых от наркотиков и алкоголя, не видят необходимости проходить курс лечения, так как не считают себя больными людьми"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={SupportIcon} style={iconStyle} alt="Услуги поддержки в СОЦИО" />}
                  title="Услуги поддержки в СОЦИО"
                  description="Услуги поддержки в СОЦИО - помощь человеку в целях улучшения условий его жизнедеятельности или расширения его возможностей, самостоятельно обеспечивать свои основные жизненные потребности. Поддержка в начинаниях изменения поведения в СОЦИО. Выслушивание и анализирование проблем, которые возникли в жизни человека. Поддержка является важной составляющей после выхода с РЦ"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={AmbulatorkaIcon} style={iconStyle} />}
                  title="Амбулаторное лечение"
                  description="Амбулаторное лечение - проводится для пациентов, которые осознанно хотят избавиться от зависимости и готовы выполнять все предписания врача без круглосуточного контроля. Полное взаимодействие пациента со специалистами центра «Маяк Бишкек» только без отрыва от повседневных дел и работы. Человек может получить консультацию своего психотерапевта в любое удобное время. Такой подход помогает быстрее и эффективнее адаптироваться к внешним раздражающим факторам и помогает пациенту справляться с кризисами и стрессами, которые возникают в его каждодневном мире"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
