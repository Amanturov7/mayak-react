const iconStyle = {
  width: "25px", // Укажите желаемую ширину
  height: "25px", // Укажите желаемую высоту
};
// @mui material components
import Container from "@mui/material/Container";
import AboutUsIcon from "assets/images/icons/aboutus/aboutus.png";
import PrincIcon from "assets/images/icons/aboutus/princ.png";
import TargerIcon from "assets/images/icons/aboutus/target.png";
import ZavisimyeIcon from "assets/images/icons/aboutus/zavis.png";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={20} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={AboutUsIcon} style={iconStyle} />}
                  title="О нас"
                  description={
                    <div>
                      РЦ “Маяк Бишкек” был основан в 2020 году, является многопрофильным лечебным
                      центром, способным предоставить полный комплекс по лечению зависимости разной
                      степени сложности.
                      <br />
                      <br />
                      РЦ “Маяк Бишкек” - первый в Кыргызстане, предлагающий 12 шаговую программу
                      лечения:
                      <ul style={{ marginLeft: "50px" }}>
                        <li> Алкоголизма;</li>
                        <li> Наркомании;</li>
                        <li> Игромании;</li>
                        <li> Токсикомании;</li>
                        <li> Невротической симптоматики;</li>
                        <li> Депрессии;</li>
                        <li> Панических атак;</li>
                        <li> Расстройств пищевого поведения.</li>
                      </ul>
                    </div>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={PrincIcon} style={iconStyle} />}
                  title="Принципы и подходы лечения"
                  description={
                    // prettier-ignore
                    <div>
                      <p>
                        РЦ “Маяк Бишкек” проводит лечение в стационаре, где созданы максимально комфортные условия для восстановления. Обладает развитой базой, что дает нашим пациентам получить качественное и полноценное лечение в виде психокоррекции поведения и профилактика деструкции личности человека.
                    
                        <br />
                        Принцип лечения РЦ “Маяк Бишкек” от зависимости – индивидуальный подход к каждому нуждающемуся. Это удерживает пациента от срывов после лечения. Мы подберем специальную программу лечения исходя из: возраста, стажа и сопутствующих заболеваний. Наши специалисты имеют опыт более 10 лет, делая спектр услуг все шире.
                  
                       <br />
                        В РЦ “Маяк Бишкек” применяется один из наиболее прогрессивных подходов к решению психологических и соматических проблем. Его научное обоснование строится на понимании каждого человека не только как отдельной личности, но еще и как части собственной семьи, а также общества в целом. Люди, которые выздоравливают от зависимости, могут использовать группы поддержки и терапевтические группы, а также индивидуальную терапию.
                   
                        <br />
                        Ограничение контактов с зависимым во время реабилитации оговариваются с заказчиком. Необходимо оградить пациента от влияния внешнего мира для лучшего эффекта.
                      </p>
                    </div>
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={ZavisimyeIcon} style={iconStyle} />}
                  title="О Зависимости"
                  description={
                    // prettier-ignore
                    <div>
                      <p>
                        Наркомания, алкоголизм, игромания, токсикомания и иные – это наиболее частые и опасные зависимости, с которыми столкнулось человечество. С этой бедой сталкиваются все больше людей, которые не в силах противостоять в одиночку. Зависимость забирает жизни, ломает судьбы, меняет сознание и все сильнее распространяется.
                        <br />
                        Большинство попыток самостоятельного отказа от зависимости приводит к срыву и смертельному исходу. Для эффективного лечения нужно иметь желание и поддержку близких людей, которые обратятся за помощью к специалистам в области зависимости.
                       <br />
                        В борьбе с зависимостью выделяют несколько этапов, которые обеспечивают человеку трезвость. Только комплексное лечение на всех этапах позволит зависимому изменить себя, свое мышление и навсегда забыть о зависимости.
                        <br />
                        Важно понимать что процесс не лечится только препаратами, которые бы позволили полностью убрать аддиктивное поведение, изменить систему ценностей и мышление зависимого человека. Только через реабилитацию есть шансы заставить человека задуматься, обрести мотивацию жить трезво.
                      </p>
                    </div>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<img src={TargerIcon} style={iconStyle} />}
                  title="Цели сообщества “Маяк Бишкек”"
                  description={
                    // prettier-ignore
                    <div>
                      <p>
                        Работа терапевтического сообщества “Маяк Бишкек” позволяет личности гармонично выйти из сложных состояний, научиться выражать себя, чувствовать свои границы, вырабатывать цели и задачи для своей реализации и добиваться их.
                        <br />
                        Специалисты РЦ “Маяк Бишкек” в области работы с зависимостями прекрасно знают, что признание зависимого своей проблемы является непростым, но крайне важным шагом на пути к выздоровлению.
                        <br />
                        Мы гордимся тем, что в отличие от наркологической клиники, предлагаем своим пациентам исключительную заботу, причем по разумной цене. Тем более, что в нашей стране никогда раньше не создавались такие потрясающие условия для лечения и выздоровления.
                        <br />
                        Именно поэтому РЦ “Маяк Бишкек” создает все условия, чтобы помочь зависимому принять решение лечиться.
                        <br />
                        После получения положительного результата, пациент покинет центр иным человеком, готовым к нормальной, здоровой и счастливой жизни.
                      </p>
                    </div>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "find out more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Information;
