import "./App.css";
import Header from "./component/Header";
import Dashboard from "./pages/Dashboard/index";
import SearchBox from "./component/searchbox/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Image from "./component/Image/Image";
import Contact from "./component/Contact/Contact";
import Course from "./component/Course/Course";
import Home from "./component/Home/Home";
import InCampusCourse from "./component/InCampus/InCampusCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main d-flex">
          <div className="sidebarWrapper">
            <Sidebar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/image" element={<Image />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/course" element={<Course />} />
              <Route path="/InCampusCourse" element={<InCampusCourse />} />

              <Route></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
