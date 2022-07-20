import { Link } from "react-router-dom";
// import video from "../assets/img/bg.mp4";

export default function Success() {
  return (
    <>
      <div className="py-5 osahan-coming-soon d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="text-center pb-3">
            <h1 className="font-weight-bold">
              Osahan, Your order has been successful
            </h1>
            <p>
              Check your order status in{" "}
              <a
                href={void 0}
                className="font-weight-bold text-decoration-none text-primary"
              >
                My Orders
              </a>{" "}
              about next steps information.
            </p>
          </div>

          <div className="bg-white rounded text-center p-4 shadow-sm">
            <h1 className="display-1 mb-4">🎉</h1>
            <h6 className="font-weight-bold mb-2">Preparing your order</h6>
            <p className="small text-muted">
              Your order will be prepared and will come soon
            </p>
            <a
              href={void 0}
              className="btn rounded btn-primary btn-lg btn-block"
            >
              Track My Order
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
