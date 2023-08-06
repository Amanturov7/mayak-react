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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// PageHeaders page components
import HeaderOne from "layouts/sections/page-sections/news1/components/HeaderOne";

// PageHeaders page components code
// import headerOneCode from "layouts/sections/page-sections/page-headers/components/HeaderOne/code";

function NewsPage1() {
  return (
    <BaseLayout
      title="ГКНБ просит сообщать о фактах вовлечения граждан в наркопреступления — номера"
      breadcrumb={[
        { label: "Главная", route: "/" },
        { label: "Новости", route: "/sections/page-sections/news" },
      ]}
    >
      <View title="" height="40rem">
        <HeaderOne />
      </View>
    </BaseLayout>
  );
}

export default NewsPage1;
