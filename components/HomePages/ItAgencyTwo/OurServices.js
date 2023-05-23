import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-camera bg-13c4a1",
    title: "Capture 360° Images",
    shortText:
      "Beautifully immersive & engaging 3D Virtual Tours",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-comment bg-6610f2",
    title: "Support 24/7",
    shortText:
      "We are here to help you with any questions you may have.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Idea & Analysis",
    shortText:
      "We make your ideas come to life.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Mobile Friendly",
    shortText:
      "Our virtual tours are mobile friendly and can be viewed on any device.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Fast Delivery",
    shortText:
      "We deliver your virtual tour within 72 hours or get your money back guaranteed.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "IT Solutions",
    shortText:
      "We provide IT solutions for your business. If you need a website, we can help!",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              We create virtual tours and more.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div 
                  className="col-lg-4 
                  col-sm-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
