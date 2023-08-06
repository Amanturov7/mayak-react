import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    recipient: "",
    msgBody: "",
    title: "",
    phone: "",
    fullName: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    const updatedFormData = { ...formData, msgBody: "Your message here" };
    axios
      .post("http://localhost:8080/api/sendMail", updatedFormData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setIsSending(false);
        toast.success("Сообщение успешно отправлено!", {
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Ошибка при отправке запроса:", error);
        setErrorMessage("Ошибка при отправке запроса");
        setIsSending(false);
        toast.error(errorMessage, {
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={5}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 1rem)"
            height="calc(75vh - 1rem)"
            borderRadius="lg"
            ml={2}
            mt={20}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 10, sm: 18, md: 20 }}
            mb={{ xs: 10, sm: 18, md: 20 }}
            mx={2}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Связаться
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                По дополнительным вопросам, в том числе по возможностям партнерства, обращайтесь по
                электронной почте rebcentermayakbishkek@gmail.com
              </MKTypography>
              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="email"
                    variant="standard"
                    label="Email"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    inputProps={{ inputMode: "tel" }}
                    value={formData.recipient}
                    onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    type="tel"
                    variant="standard"
                    label="Телефон"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <MKInput
                    variant="standard"
                    label="Фио"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="standard"
                    label="Чем мы можем помочь?"
                    placeholder="Опишите свою проблему не менее 250 символов"
                    InputLabelProps={{ shrink: true }}
                    multiline
                    fullWidth
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {isSending ? "Отправка..." : "Отправить"}
                  </MKButton>
                </Grid>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default ContactUs;
