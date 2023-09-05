import React from "react";

function ScrollToContact() {
  const scrollToContact = () => {
    const contactSections = document.getElementsByClassName("contact-info-container");

    // Check if there are elements with the specified class
    if (contactSections.length > 0) {
      const firstContactSection = contactSections[0]; // Choose the first element
      const offset = 70; // Adjust this value to your desired gap

      // Scroll to the section with the specified gap
      window.scrollTo({
        top: firstContactSection.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <button className="toContact fs-18 fs-15-1122 fs-12-408" onClick={scrollToContact}>
        Request a Quote
      </button>
    </div>
  );
}

export default ScrollToContact;
