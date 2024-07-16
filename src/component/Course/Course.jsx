import React from "react";

const Course = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf.pdf"; // Relative to the public directory
    link.download = "How_to_Apply.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="online-container">
      <div className="online-header">
        <h1 className="online-header-title">Online Courses</h1>
        <p className="online-header-text">
          {" "}
          * Seats will be confirmed only after successful payment.
        </p>
        <button className="online-header-button" onClick={handleDownload}>
          How to Apply
        </button>
      </div>
      <div className="online-content">
        <button className="online-content-button">
          Click here to apply for free CSAP course
        </button>
        <button className="online-content-button">
          CERT-In & NIELIT Joint Programme
        </button>
        <div className="online-courses">
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Internet of Things (IoT) (Online Mode)
          </button>
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Industrial Training In (Machine Learning Using Python)
          </button>
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Industrial Training / Internship In "Programming In Python"
            (Online Mode)
          </button>
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Industrial Training and Internship In "Internet Of Things"
            (Online Mode)
          </button>
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Industrial Training and Internship In "IOT Using Raspberry
            PI" (Online Mode)
          </button>
          <button
            className="online-course-item"
            onClick={() => window.open("https://www.google.com")}
          >
            NEW! - Project Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
