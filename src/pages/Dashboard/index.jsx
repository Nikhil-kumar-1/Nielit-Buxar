import DashboardBox from "./components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";
import { BiSolidSchool } from "react-icons/bi";
import BarChart from "./components/Chart";
import { VscGraph } from "react-icons/vsc";
import PieChart from "./components/PieChart";
import ChartDataLabels from 'chartjs-plugin-datalabels';



const Dashboard = () => {
    return (
        <>
            <div className="right-content w-100">
                <div className="row">

                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["rgba(33,3,40,1)", "rgba(65,5,72,1)"]} icon={<FaUserCircle />} />
                        <DashboardBox color={["rgba(30,70,14,11)", "rgba(15,55,72,11)"]} icon={<FaUserGraduate />} />
                        <DashboardBox color={["#57385c", "#a75265"]} icon={<PiCertificateDuotone />} />
                        <DashboardBox color={["#41506b", "#263849"]} icon={<BiSolidSchool />} />

                    </div>

                </div>

            </div>

            <div className="card">
            <div class="card-header"> 
            <i class="fa fa-chart-bar"></i>
                <h2>CourseWise Trained</h2>
                </div>
                <div class="card-content">
                <br />
            <BarChart/>
        
                </div>
            </div>
            <div className="card">
            <div class="card-header"> 
            <i class="fa fa-chart-pie"></i>
                <h2>
                CategoryWise Trained</h2>
                </div>
                <div class="card-header"> 
                <ul className="unorderList">
                    <li>SC</li>
                    <li>ST</li>
                    <li>OBC</li>
                    <li>GEN</li>
                    <li>WOMEN</li>
                    <li>SPECIALLY ABLED</li>
                </ul>
                </div>
        
                <div class="card-content">
                <br />
                <PieChart/>
                </div>
                </div>
            <div class="card">
                <div class="card-header">
                    <i class="fa fa-table fa-lg"></i>
                    <h2>CourseWise Targets</h2>
                </div>
                <div class="card-content">
                    <br />
                    <table id="dataTableExample1" class="table table-bordered table-striped table-hover ">


                        <div className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Organization</th> <th>Courses</th>
                                    <th>Target</th> <th>Registered</th><th>Trained</th>
                                    <th>Perc</th> <th class="hidden-xs hidden-sm">Progress</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td style={{textAlign:"center", paddingTop:"100px", fontSize:"25px", fontWeight:"bolder"}} rowspan="4">NIELIT Buxar</td>
                                    <td>Awareness Level</td>
                                    <td>000</td>
                                    <td>000</td>
                                    <td>000</td>
                                    <td>00%</td>
                                    <td class="hidden-xs hidden-sm"><div class="progress">
                                        <div class="progress-bar progress-bar-striped active " role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">

                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Beginner Level</td>
                                    <td>000</td>
                                    <td>000 </td>
                                    <td>000 </td>
                                    <td>00%</td>
                                    <td class="hidden-xs hidden-sm"> <div class="progress">
                                        <div class="progress-bar progress-bar-striped active  " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" >
                                        </div>
                                    </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Advanced Level</td>
                                    <td>000</td>
                                    <td>000 </td>
                                    <td>000</td>
                                    <td>00%</td>
                                    <td class="hidden-xs hidden-sm"><div class="progress">
                                        <div class="progress-bar progress-bar-striped active  " role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                            </tbody>
                        </div>
                    </table>
                </div>

            </div>



        </>
    )

}
export default Dashboard;