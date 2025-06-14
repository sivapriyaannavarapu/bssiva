import "../../styles/student-component-styles/fee-details.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TermPaymentChart from "./unpaid-chart";
function FeeDetails() {
    return (
        <div>
                <div class="fee-summary-container d-flex justify-content-start flex-wrap gap-4 bg-white rounded-4">
                <div class="d-flex flex-column gap-2 flex-grow-1 min-vw-25 pt-3 ps-2 fs-6">
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Course Fee</span><span>145,000</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Add Amount</span><span>2,500</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Concession</span><span>40,000</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Net Fee</span><span>122,500</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Service Tax Paid</span><span>0</span>
                    </div>
                </div>
 
 
                <div class="d-flex flex-column gap-2 flex-grow-1 min-vw-25 pt-3 ps-4 fs-6">
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Fee Paid</span><span>122,500</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1 ">
                        <span>Fee Deduction</span><span>0</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Fee Refund</span><span>0</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Over All Due</span><span>0</span>
                    </div>
                    <div class="d-flex justify-content-between text-secondary w-75 py-1">
                        <span>Service Tax To Be Paid</span><span>0</span>
                    </div>
                </div>
 
                <div className="payment-chart">
                    <TermPaymentChart />
                </div>
            </div>
 
            <div class="payment-button-container">
                <button class="btn btn-primary px-4 py-2 fs-6 rounded-3 border-0">
                    + Proceed to Payment
                </button>
 
            </div>
        </div>
    );
}
 
export default FeeDetails;
 