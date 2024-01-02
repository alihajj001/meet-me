import React from "react";

function My_skills() {
  // Define an array of skills data with image URLs and titles
  const skillsData = [
    {
      imgUrl: "/meet-me/images/skills/html.svg",
      title: "HTML",
    },
    {
      imgUrl: "/meet-me/images/skills/css.svg",
      title: "CSS",
    },
    {
      imgUrl: "/meet-me/images/skills/js.svg",
      title: "JavaScript",
    },
    {
      imgUrl: "/meet-me/images/skills/react.svg",
      title: "React",
    },
    {
      imgUrl: "/meet-me/images/skills/jquery.svg",
      title: "jQuery",
    },
    {
      imgUrl: "/meet-me/images/skills/php.svg",
      title: "php",
    },
    {
      imgUrl: "/meet-me/images/skills/laravel.png",
      title: "Laravel",
    },
    {
      imgUrl: "/meet-me/images/skills/nodejs.svg",
      title: "Nodejs",
    },
    {
      imgUrl: "/meet-me/images/skills/wordpress.svg",
      title: "WordPress",
    },
    {
      imgUrl: "/meet-me/images/skills/other.png",
      title: "Others",
    },
  ];

  return (
    <>
      <div className="all-skills-cont col-12 m-T-30 column-gap-10 row-gap-30 flex-row justify-content-space-between justify-content-center-sm column-gap-30-sm align-items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="col-2 col-3-sm flex-row justify-content-center align-items-center"
          >
            <div
              title={skill.title}
              className="skill_img-cont flex-row justify-content-center align-items-center"
            >
              <img src={skill.imgUrl} className="skill_img col-12"></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_skills;
