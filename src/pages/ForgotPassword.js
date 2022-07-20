import { Link } from "react-router-dom";
import video from "../assets/img/bg.mp4";

export default function ForgotPassword() {
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
              <h2>Forgot password</h2>
              <p>
                Enter your email address below and we'll send you an email with
                instructions on how to change your password
              </p>
              <form action="login.html" className="mt-5 mb-4">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block">
                  Send
                </button>
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
