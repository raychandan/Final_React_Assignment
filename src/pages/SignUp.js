import { Link } from "react-router-dom";
import video from "../assets/img/bg.mp4";

export default function SignUp() {
  return (
    <>
      <div className="osahan-signup login-page">
        <video loop autoPlay muted id="vid">
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <div className="px-5 col-md-6 ml-auto">
            <div className="px-5 col-10 mx-auto">
              <h2 className="text-dark my-0">Hello There.</h2>
              <p className="text-50">Sign up to continue</p>
              <form className="mt-5 mb-4" action="verification.html">
                <div className="form-group">
                  <label htmlFor="exampleInputName1" className="text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputNumber1" className="text-dark">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Mobile"
                    className="form-control"
                    id="exampleInputNumber1"
                    aria-describedby="numberHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1" className="text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block">
                  SIGN UP
                </button>
                {/* <div className="py-2">
                  <button className="btn btn-facebook btn-lg btn-block">
                    <i className="feather-facebook"></i> Connect with Facebook
                  </button>
                </div> */}
              </form>
            </div>
            <div className="new-acc d-flex align-items-center justify-content-center">
              <span>
                <p className="text-center m-0">
                  Already an account? <Link to="/login">Sign in</Link>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
