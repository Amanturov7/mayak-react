// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import OdnoclassnikiIcon from "@mui/icons-material/Odnoclassniki";
import InstagramIcon from "@mui/icons-material/Instagram";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
// import { Instagram } from "@mui/icons-material";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Маяк",
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
    // {
    //   icon: <OdnoclassnikiIcon />,
    //   link: "https://ok.ru/profile/587732091285?utm_campaign=android_share&utm_content=profile",
    // },
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
        { name: "О нас", href: "https://www.creative-tim.com/presentation" },
        { name: "Новости", href: "https://www.creative-tim.com/templates/free" },
        { name: "Услуги", href: "https://www.creative-tim.com/templates/premium" },
      ],
    },
    {
      name: "Ресурсы",
      items: [
        { name: "Галерея", href: "https://iradesign.io/" },
        { name: "Зависимые", href: "https://www.creative-tim.com/bits" },
        { name: "Престарелые", href: "https://www.creative-tim.com/affiliates/new" },
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
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Маяк Бишкек by{" @Amanturov7"}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      ></MKTypography>
    </MKTypography>
  ),
};
