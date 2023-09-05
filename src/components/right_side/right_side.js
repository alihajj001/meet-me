import React from "react";
import Right_box from "./right_box";
import About_me from "./about_me";
import My_skills from "./my_skills";
import My_services from "./my_services";
import My_hobbies from "./my_hobbies";
import Courses from "./courses";
import Contact_form from "./contact_form";

function Right_side() {
  return (
    <>
      <Right_box title="About Me" contentComponent={<About_me />} />
      <Right_box title="My Skills" contentComponent={<My_skills />} />
      <Right_box title="My Services" contentComponent={<My_services />} />
      <Right_box title="Hobbies" contentComponent={<My_hobbies />} />
      <Right_box title="Courses" contentComponent={<Courses />} />
      <Right_box title="Reach Out To Me" contentComponent={<Contact_form />} />
    </>
  );
}

export default Right_side;
