import React from "react";
import cvPdf from "../../customFiles/resume/CV_ALI_EL_HAJJ.pdf";

function Download_cv() {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "CV_ALI_EL_HAJJ";
    link.click();
  };

  return (
    <>
      <div>
        <button className="downloadCV fs-18 fs-15-1122 fs-12-408" onClick={handleDownload}>Download CV</button>
      </div>
    </>
  );
}

export default Download_cv;
