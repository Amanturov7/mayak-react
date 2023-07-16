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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

export default [
  {
    title: "Новости",
    description: "Будьте в курсе событий.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        name: "В Бишкеке задержали учеников престижной школы с наркотиками",
        route: "/layouts/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Исповедь мамы солевого наркомана — видео",
        route: "/layouts/sections/page-sections/news2",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "В Бишкеке закрашено 400 надписей рекламирующие синтетические наркотики",
        route: "/layouts/sections/page-sections/news3",
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "В КР стартует кампания Спасите жизни. Поделитесь фактами о наркотиках.",
        route: "/layouts/sections/page-sections/news4",
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        route: "/layouts/sections/page-sections/news5",
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Testimonials",
        route: "/layouts/sections/page-sections/news1",
      },
    ],
  },
];
