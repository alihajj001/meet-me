import React, { useState, useEffect } from "react";

function ScrollToContact() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const toggleAnimations = () => {
    setIsInitialLoad(false);
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    if (isInitialLoad) {
      setIsAnimating(false);
    }
  }, [isInitialLoad]);

  return (
    <div className="">
      <p className="boldFont fs-20 m-T-0">Connect:</p>
      <div className="relative">
        <div
          className={`social_net-cont ${isAnimating ? "animated" : "animated"}`}
          onClick={toggleAnimations}
        >
          <img
            src="/meet-me/images/social_media/social_network.webp"
            className="social_net"
          ></img>
          <a href="https://www.linkedin.com/in/ali-hajj-11341a21b/">
            <img
              src="/meet-me/images/social_media/linkedin.webp"
              style={{
                visibility:
                  isInitialLoad && !isAnimating ? "hidden" : "visible",
              }}
              className={`sm-icon linkedin ${
                isAnimating
                  ? "fadeInAndSlideLinkedin"
                  : "fadeOutAndSlideLinkedin"
              }`}
            ></img>
          </a>
          <a href="https://wa.me/+96171680583">
            <img
              src="/meet-me/images/social_media/whatsapp.webp"
              style={{
                visibility:
                  isInitialLoad && !isAnimating ? "hidden" : "visible",
              }}
              className={`sm-icon linkedin ${
                isAnimating
                  ? "fadeInAndSlideWhatsapp"
                  : "fadeOutAndSlideWhatsapp"
              }`}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ScrollToContact;
