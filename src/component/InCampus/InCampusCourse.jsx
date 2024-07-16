import React from "react";

const InCampusCourse = () => {
  const courses = [
    "NIELIT A Level (IT) - 1st Sem (In-Campus Mode)",
    "NIELIT A Level (IT) After O Level - 1st Sem (In-Campus Mode)",
    "A Level (IT) - 1st Sem (In-Campus Mode)",
    "Course on Computer Concepts (CCC) - (In-Campus)",
    "Basic Computer Course (BCC)- (In-Campus Mode)",
    "Web Designing (In-Campus Mode)",
    "Python Programming (In-Campus Mode)",
    "Artificial Intelligence (In-Campus Mode)",
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf.pdf"; // Relative to the public directory
    link.download = "How_to_Apply.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="inCampus-container">
      <div className="inCampus-header">
        <h2>In-Campus Courses</h2>
        <div className="inCampus-seats">
          * Seats will be confirmed only after successful payment.
        </div>
        <div className="inCampus-apply" onClick={handleDownload}>
          How to Apply
        </div>
      </div>
      <div className="inCampus-courses">
        {courses.map((course, index) => (
          <div key={index} className="inCampus-course">
            <span className="inCampus-new">NEW!</span> - {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InCampusCourse;
