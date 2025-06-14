import { NavLink } from 'react-router-dom';
import "../../styles/student-component-styles/student-module.css";
import { Route, Routes } from 'react-router-dom';
import PocketMoney from './pocket-money';
import FeeDetails from './fee-details';
import TransportDetails from './transport-details';
import Refunds from './refunds';
import OtherFeeHeads from './other-fee-hands';
import sudentinfo from "../../assets/srichaiinfo.png"
import NavButtons from './nav-buttons';
import MetricsGrid from './metrics-grid';
import Headerpart from '../header';


function StudentModule() {
    return (
        <div className="container-fluid student-container d-flex flex-column gap-4 p-3 pb-3">
            <MetricsGrid />
            {/* <!-- student-info --> */}
            <div class="student-info-container w-100 d-flex flex-column gap-3 flex-auto">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-0">
                    <div class="d-flex align-items-center gap-2">
                        <img src={sudentinfo} className="student-info-img w-20 h-20" />
                        <div>
                            <h2 className="stu-info mb-1 mt-1">Student Information</h2>
                            <p className="stu-info-sub-para mb-0">Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads</p>
                        </div>
                    </div>
                    <select class="year-dropdown p-2 rounded fw-bold border-dark fs-0 flex-grow:0">
                        <option>Inter 2</option>
                        <option>Inter 1</option>
                    </select>
                </div>
                <ul className="nav nav-tabs d-flex gap-2 border-bottom">
                    <li className="nav-item">
                        <NavLink
                            to="/student/fee-details"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Fee Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/student/pocket-money"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Pocket Money
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/student/transport-details"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Transport Details
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/student/refunds"
                            className="nav-link text-decoration-none border-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Refunds
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/student/other-fee-heads"
                            className="nav-link text-decoration-none"
                            style={({ isActive }) => ({
                                fontSize: '13px',
                                color: isActive ? '#0056d2' : '#555',
                                borderBottom: isActive ? '0.2vh solid #0056d2' : 'none'
                            })}
                        >
                            Other Fee Heads
                        </NavLink>
                    </li>
                </ul>

                <Routes>
                    <Route path="/fee-details" element={<FeeDetails />} />
                    <Route path="/pocket-money" element={<PocketMoney />} />
                    <Route path="/transport-details" element={<TransportDetails />} />
                    <Route path="/refunds" element={<Refunds />} />
                    <Route path="/other-fee-heads" element={<OtherFeeHeads />} />
                </Routes>

            </div>

        </div>
    );
}

export default StudentModule;