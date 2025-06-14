// import "../../styles/student-component-styles/transport-details.css";
// function TransportDetails() {
//     return (

//         <div>
//             <div class="transport-container">
//                 <div class="transport-info">
//                     <div class="transport-row">
//                         <p>Academic Year</p>
//                         <span>2014-2015</span>
//                     </div>
//                     <div class="transport-row">
//                         <p>Transport Type</p>
//                         <span>Addanki - Miyapur</span>
//                     </div>
//                     <div class="transport-row">
//                         <p>Transport Status</p>
//                         <span>Assigned</span>
//                     </div>
//                     <div class="transport-row">
//                         <p>Stage</p>
//                         <span>Addanki</span>
//                     </div>

//                 </div>

//                 <div class="transport-visual">
//                     {/* <div class="route-circle">
//                         <span class="route-icon">🚍</span>
//                         <p class="route-number">Route No<br /><strong>7</strong></p>
//                     </div>
//                     <div class="route-path">
//                         <p class="stop">Addanki</p>
//                         <div class="line"></div>
//                         <p class="stop">Miyapur</p>
//                     </div> */}
//                 </div>


//             </div>

//             <div className="manage-button-container">
//                 <button class="manage-button">+ Manage Transport</button>
//             </div>
//         </div>
//     );
// }

// export default TransportDetails;


import "../../styles/student-component-styles/transport-details.css";
import TransportImage from "../../assets/transport-img.png";
function TransportDetails() {
    return (

      <div>
      <div className="d-flex justify-content-between align-items-start flex-nowrap p-5 transport-container">
        <div className="d-flex flex-column gap-4 flex-fill transport-info ">
          <div className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Academic Year</p>
            <span>2014-2015</span>
          </div>
          <div className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Transport Type</p>
            <span>Addanki - Miyapur</span>
          </div>
          <div className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Transport Status</p>
            <span>Assigned</span>
          </div>
          <div className="d-flex justify-content-between align-items-center transport-row w-50 h-5 fs-6">
            <p className="mb-0 transport-label fs-6">Stage</p>
            <span>Addanki</span>
          </div>
        </div>
        <div className="transport-visual d-flex flex-column align-items-end flex-1">
          <img src={TransportImage} alt="transportimage" className="transport-image"></img>
        </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary fw-bold px-4 py-2">+ Manage Transport</button>
      </div>
    </div>
    );
}

export default TransportDetails;