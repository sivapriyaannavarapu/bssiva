import "../../styles/student-component-styles/pocket-money.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 
import srichai from "../../assets/srichai.png";
import srichai2 from "../../assets/srichai2.png";
 
function PocketMoney() {
  return (
    <div className="pocketmoney-container d-flex flex-row justify-content-between align-items-start flex-wrap gap-3">
 
     <div className="d-flex flex-column gap-3 flex-grow-1 pt-5 ps-4 pocketmoney-info-section">
                <div className="d-flex justify-content-between align-items-center w-50 h-5  pocketmoney-info">
                    <p className="mb-0 text-secondary fs-6">Pocket Refund</p>
                    <span className="pt-2 text-secondary fs-6">0</span>
                </div>
 
        <div className="d-flex justify-content-between align-items-start w-50 pocketmoney-info">
          <p className="mb-0 text-secondary fs-6">Deposited Amount</p>
          <span className="pt-2 text-secondary fs-6">7,000</span>
        </div>
 
        <div className="d-flex justify-content-between align-items-start w-50 pocketmoney-info">
          <p className="mb-0 text-secondary fs-6">Taken Amount</p>
          <span className="pt-2 text-secondary fs-6">5,492</span>
        </div>
 
        <div className="d-flex justify-content-center mt-4 w-100">
          <button className="pocketmoney-add-money bg-primary text-white border-0 rounded-3 px-4 py-2">
            + Add Money
          </button>
        </div>
      </div>
 
      {/* Right Section: Card */}
      <div className="pocketmoney-card card shadow mt-5">
        <div className="card-body">
          <div>
            <p className="pocketmoney-admission mb-3 text-white">
              Admission No<br />
              <strong>123456765432</strong>
            </p>
            <p className="pocketmoney-name mb-3 text-white">
              Yaswanth Bhimineni<br />
              <span className="label">Student Name</span>
            </p>
          </div>
          <div className="mt-4 text-end">
            <p className="pocketmoney-balance-label mb-1 text-white">Balance</p>
            <p className="pocketmoney-balance mb-0 text-white">2,000</p>
          </div>
        </div>
        <div className="d-flex align-items-center px-2 bg-dark">
          <img src={srichai} alt="student" className="pocketmoney-emoji me-2" />
          <img src={srichai2} alt="student" className="pocketmoney-emoji" />
        </div>
      </div>
    </div>
  );
}
 
export default PocketMoney;
 