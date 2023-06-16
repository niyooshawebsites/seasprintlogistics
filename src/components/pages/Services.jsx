import React from "react";
import Breadcrumbs from "../partials/Breadcrumbs";
import ServiceSection from "../partials/ServiceSection";
import FeaturedServicesSection from "../partials/FeaturedServicesSection";
import FeaturesSection from "../partials/FeaturesSection";
import TestimonialsSection from "../partials/TestimonialsSection";

const Services = () => {
  return (
    <>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <Breadcrumbs pageTitle={"Services"} />
        {/* <!-- End Breadcrumbs -->

<!-- ======= Featured Services Section ======= --> */}
        <FeaturedServicesSection />
        {/* <!-- End Featured Services Section -->

<!-- ======= Services Section ======= --> */}
        <ServiceSection />
        {/* <!-- End Services Section -->

<!-- ======= Features Section ======= --> */}
        <FeaturesSection />
        {/* <!-- End Features Section -->*/}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default Services;
