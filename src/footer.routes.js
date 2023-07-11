// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import OdnoclassnikiIcon from "@mui/icons-material/Odnoclassniki";
import InstagramIcon from "@mui/icons-material/Instagram";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import logoCT from "assets/images/logo-ct-dark.png";
// import { Instagram } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Общественный фонд «Маяк Бишкек»",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=100093416110637&mibextid=ZbWKwL",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/MayakBishkek?t=OqRrvG6GMfEc1C0uWEOQyw&s=08",
    },
    {
      icon: <AccessibilityNewRoundedIcon />,
      link: "https://ok.ru/profile/587732091285?utm_campaign=android_share&utm_content=profile",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCmS1eU5sckxlFWA6hJ1sQ-A",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com/mayak_bish?igshid=MzNlNGNkZWQ4Mg==",
    },
  ],
  menus: [
    {
      name: "Компания",
      items: [
        { name: "О нас", route: "/pages/landing-pages/about-us" },
        { name: "Услуги", route: "/pages/landing-pages/information" },
        { name: "Галерея", route: "/pages/landing-pages/information" },
        { name: "Сотрудники", route: "/pages/landing-pages/employee" },
      ],
    },
    {
      name: "Ресурсы",
      items: [
        { name: "Новости", route: "#" },
        { name: "Информация о зависимости", route: "#" },
        { name: "Связаться", route: "/pages/landing-pages/contact-us" },
      ],
    },
    {
      name: "Контактные данные",
      items: [
        { name: "Телефон: 0708 578 877" },
        { name: "ул: Карадарьинская №52" },
        { name: "rebcentermayakbishkek@gmail.com" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography>
      All rights reserved. Copyright &copy; {date} Маяк Бишкек by Amanturov7
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      ></MKTypography>
    </MKTypography>
  ),
};
