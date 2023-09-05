import React from "react";

function My_services() {
  const servicesData = [
    {
      serviceTitle: "Website Development:",
      service: "Delivering a full range of professional website solutions",
    },
    {
      serviceTitle: "SEO Optimization:",
      service: "Enhancing website visibility and search engine ranking.",
    },
    {
      serviceTitle: "Website Redesign:",
      service: "Modification of existing websites for improved functionality.",
    },
    {
      serviceTitle: "Maintenance and Support:",
      service: "Ongoing website upkeep and technical assistance.",
    },
    {
      serviceTitle: "Server Environment Oversight:",
      service: "Managing and debugging servers across diverse environments.",
    },
  ];

  return (
    <>
      <div className="all-services-cont col-12 m-T-30 column-gap-10 row-gap-30 flex-row justify-content-space-between justify-content-center-sm column-gap-30-sm align-items-center">
        <ul className="all-services">
          {servicesData.map((servicesData, index) => (
            <li className="signle-service" key={index}>
              <b>{servicesData.serviceTitle}</b> {servicesData.service}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default My_services;
