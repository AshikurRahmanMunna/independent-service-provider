import React from "react";
import service1 from "../../../images/service-1.jpg";
import service2 from "../../../images/service-2.jpg";
import service3 from "../../../images/service-3.jpg";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 12122021001,
      name: "Colorectal Surgey",
      img: service1,
      description:
        "Colorectal surgery is a field in medicine dealing with disorders of the rectum, anus, and colon. The field is also known as proctology, but this term is now used infrequently within medicine and is most often employed to identify practices relating to the anus and rectum in particular.",
      price: 75000,
    },
    {
      id: 12122021002,
      name: "Colonscopy",
      img: service2,
      description: "Colonoscopy or coloscopy is the endoscopic examination of the large bowel and the distal part of the small bowel with a CCD camera or a fiber optic camera on a flexible tube passed through the anus.",
      price: 18000,
    },
    {
      id: 12122021003,
      name: "Laser Surgey",
      img: service3,
      description:
        "Laser surgery is a type of surgery that uses a laser to cut tissue. Examples include the use of a laser scalpel in otherwise conventional surgery, and soft-tissue laser surgery, in which the laser beam vaporizes soft tissue with high water content. Laser surgery is commonly used on the eye.",
      price: 120000,
    },
  ];
  return (
    <div id="services" className="container my-5">
      <h1 className="text-center mb-4" style={{color: '#F91944'}}>My Services</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
