import React from "react";

function My_hobbies() {
  const hobbiesData = [
    {
      imgUrl: "/images/hobbies/gym.png",
      title: "Gym",
    },
    {
      imgUrl: "/images/hobbies/anime.svg",
      title: "Anime",
    },
    {
      imgUrl: "/images/hobbies/cooking.png",
      title: "Cooking",
    },
  ];

  return (
    <>
      <div className="all-hobbies-cont col-12 m-T-30 column-gap-10 row-gap-30 flex-row justify-content-space-between justify-content-center-sm column-gap-30-sm align-items-center">
        {hobbiesData.map((hobby, index) => (
          <div
            key={index}
            className="col-2 col-3-sm flex-row justify-content-center align-items-center"
          >
            <div
              title={hobby.title}
              className="hobby_img-cont flex-row justify-content-center align-items-center"
            >
              <img src={hobby.imgUrl} className="hobby_img col-12"></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default My_hobbies;
