import React from "react";
import Slider from "@/Components/templates/index/Slider";
import About from "@/Components/templates/index/About";
import Services from "@/Components/templates/index/Services";
import Offer from "@/Components/templates/index/offer";
import Menu from "@/Components/templates/index/Menu";
import Reservation from "@/Components/templates/index/reservation";
import Footer from "@/Components/modules/Footer/Footer";
import Testimonial from "@/Components/templates/index/testimonial";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      {/* <Services services={data.services} /> */}
      <Offer />
      {/* <Menu data={data.menu} /> */}
      <Reservation />
      <Testimonial />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   const serviceResponse = await fetch(`http://localhost:4000/services`);
//   const serviceData = await serviceResponse.json();

//   const menuResponse = await fetch(`http://localhost:4000/menu`);
//   const menuData = await menuResponse.json();

//   return {
//     props: {
//       data: {
//         services: serviceData,
//         menu: menuData,
//       },
//     },
//     revalidate: 60 * 60 * 12, //second
//   };
// }

export default Index;
