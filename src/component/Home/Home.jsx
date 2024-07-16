// Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link to="/Course" className="dashboard-item-link">
        <div
          className="dashboard-item"
          style={{ backgroundColor: "blueviolet" }}
        >
          <div
            style={{ textDecoration: "none" }}
            className="dashboard-item-icon"
          >
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="dashboard-item-title">ऑनलाइन पाठ्यक्रम</div>
          <div className="dashboard-item-subtitle">
            <a href="/Course" title=""></a>
            Online Course
          </div>
        </div>
      </Link>
      <Link to="/InCampusCourse" className="dashboard-item-link">
        <div
          className="dashboard-item"
          style={{ backgroundColor: "royalblue" }}
        >
          <div className="dashboard-item-icon">
            <i className="fas fa-chalkboard-teacher"></i>
          </div>
          <div className="dashboard-item-title">इन-कैंपस पाठ्यक्रम</div>
          <div className="dashboard-item-subtitle">
            {" "}
            <a href="/InCampusCourse" title=""></a> In-Campus Courses
          </div>
        </div>
      </Link>
      <div className="dashboard-item" style={{ backgroundColor: "tomato" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-book-open"></i>
        </div>
        <div className="dashboard-item-title">पाठ्यक्रम विवरणिका</div>
        <div className="dashboard-item-subtitle">Course Brochure</div>
      </div>
      <div
        className="dashboard-item"
        style={{ backgroundColor: "mediumseagreen" }}
      >
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">एम.टेक पाठ्यक्रम</div>
        <div className="dashboard-item-subtitle">M.Tech. Courses</div>
      </div>
      <div
        className="dashboard-item"
        style={{ backgroundColor: "saddlebrown" }}
      >
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">ई लर्निंग</div>
        <div className="dashboard-item-subtitle">E Learning</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "orangered" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">वर्चुअल लैब</div>
        <div className="dashboard-item-subtitle">Virtual Lab</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "gray" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">पूर्व छात्र विभाग</div>
        <div className="dashboard-item-subtitle">Alumni Cell</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "brown" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">प्लेसमेंट विभाग</div>
        <div className="dashboard-item-subtitle">Placement Cell</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "teal" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">कर्मचारी कॉर्नर</div>
        <div className="dashboard-item-subtitle">Employee Corner</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "red" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">अधिसूचना</div>
        <div className="dashboard-item-subtitle">Notification</div>
      </div>
      <div className="dashboard-item" style={{ backgroundColor: "#00bcd4" }}>
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">सार्वजनिक कॉर्नर</div>
        <div className="dashboard-item-subtitle">Public Corner</div>
      </div>
      <div
        className="dashboard-item"
        style={{ backgroundColor: "yellowgreen" }}
      >
        <div className="dashboard-item-icon">
          <i className="fas fa-user-graduate"></i>
        </div>
        <div className="dashboard-item-title">संपर्क करें</div>
        <div className="dashboard-item-subtitle">Contact Us</div>
      </div>
    </div>
  );
};

export default Dashboard;
