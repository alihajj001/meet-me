import React from "react";
import Download_cv from "./download_cv";
import Scroll_to_contact from "./scroll_to_contact";
import ScrollToContact from "./social_media";

function My_img() {
  return (
    <>
      <div className="col-5 col-12-lg flex-row-lg flex-direction-columns-lg align-items-center">
        <div className="flex-row-no-wrap align-items-center column-gap-30">
          <div className="col-4">
            <img src="/meet-me/images/home/me.jpg" alt="me" className="me-img"></img>
          </div>
          <div className="col-8">
            <ScrollToContact></ScrollToContact>
          </div>
        </div>

        <div className="m-B-30">
          <h1 className="fs-40 fs-30-1122">
            Greetings, I am{" "}
            <span className="name-span keyword">Ali El Hajj</span>
          </h1>
          <p className="sub-h1 fs-19 fs-16-1122">
            a professional in the realm of{" "}
            <span className="keyword">full-stack web development</span>.
          </p>
          <p className="me-desc fs-16 fs-13-1122">
            Imagine a digital maestro armed with a Swiss Army knife of
            creativity – that's me, your friendly neighborhood full-stack web
            magician! From turning ideas into pixel-perfect reality to making
            browsers dance and databases groove, I'm all about tech magic. And
            remember, they call me Ali, but for you, I'm your 'anytime' genie –
            just rub the browser! Feel free to reach out anytime. Let's work in
            harmony to transform your web dreams into the kind of captivating
            realities that keep visitors coming back for an encore!
          </p>
        </div>

        <div>
          <div className="flex-row-no-wrap align-items-center column-gap-30">
            <Download_cv></Download_cv>
            <Scroll_to_contact></Scroll_to_contact>
          </div>
        </div>
      </div>
    </>
  );
}

export default My_img;
