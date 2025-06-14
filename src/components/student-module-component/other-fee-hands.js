// import "../../styles/student-component-styles/other-fee-hands.css"
// function OtherFeeHeads() {
//     return (
//         <div class="fee-head-container">
//             <div class="fee-head-column">
//                 <div class="fee-head-row">
//                     <span>Akash Books</span>
//                     <span>15,000</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>Bus Pass</span>
//                     <span>0</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>Caution Deposit</span>
//                     <span>0</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>CRD Books</span>
//                     <span>0</span>
//                 </div>
//             </div>
//             <div class="fee-head-column2">
//                 <div class="fee-head-row">
//                     <span>Miscellaneous</span>
//                     <span>15,000</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>STD Wellfare Fund</span>
//                     <span>0</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>Material</span>
//                     <span>0</span>
//                 </div>
//                 <div class="fee-head-row">
//                     <span>EAMCET App Free</span>
//                     <span>0</span>
//                 </div>
//             </div>

           
//         </div>

//     );
// }
// export default OtherFeeHeads;


import "../../styles/student-component-styles/other-fee-hands.css"
function OtherFeeHeads() {
    return (
        <div className="fee-head-container d-flex justify-content-column flex-wrap gap-5 pt-4 ps-5">
            <div className="fee-head-column flex-1">
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Akash Books</span>
                    <span>15,000</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Bus Pass</span>
                    <span>0</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Caution Deposit</span>
                    <span>0</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>CRD Books</span>
                    <span>0</span>
                </div>
            </div>
            <div className="fee-head-column2 flex-1">
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Miscellaneous</span>
                    <span>15,000</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>STD Wellfare Fund</span>
                    <span>0</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>Material</span>
                    <span>0</span>
                </div>
                <div className="fee-head-row d-flex justify-content-between py-2 fs-6 align-items-center fw-normal">
                    <span>EAMCET App Free</span>
                    <span>0</span>
                </div>
            </div>


        </div>

    );
}
export default OtherFeeHeads;
