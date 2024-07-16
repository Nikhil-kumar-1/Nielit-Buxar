import { IoHome } from "react-icons/io5";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdLaptopChromebook } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className="">
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <IoHome />
                </span>
                Home
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li className="">
            <Link to="/dashboard">
              <Button className="w-100">
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/course">
              <Button className="w-100">
                <span className="icon">
                  <FaLaptopCode />
                </span>
                Online Courses
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/course">
              <Button className="w-100">
                <span className="icon">
                  <FaBookOpenReader />
                </span>
                Course Brochure
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/eLearning">
              <Button className="w-100">
                <span className="icon">
                  <MdLaptopChromebook />
                </span>
                E-Learning
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/lab">
              <Button className="w-100">
                <span className="icon">
                  <FaLaptopCode />
                </span>
                Virtual Lab
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <Button className="w-100">
                <span className="icon">
                  <IoIosNotifications />
                </span>
                Notification
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button className="w-100">
                <span className="icon">
                  <IoMdContacts />
                </span>
                Contact Us
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/image">
              <Button className="w-100">
                <span className="icon">
                  <FaImage />
                </span>
                Image Gallery
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/rating">
              <Button className="w-100">
                <span className="icon">
                  <FaStar />
                </span>
                Course Ratings
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <Button className="w-100">
                <span className="icon">
                  <MdFeedback />
                </span>
                Feedback login
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
