import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./signup.css"; // Import your custom CSS

function Signup() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleRequestAccess = () => {
    navigate("/");
  };

  return (
    <>
      <div className="login">
        <div className="left-side-login">
          <div className="login-logo">Logo</div>
          <div className="school">
            <h1>
              Welcome to <span>CampusNav</span>
            </h1>
            <p>Your guide through campus life</p>
          </div>
        </div>
        <div className="right-side-login">
          <div className="login-right">
            <h2>SIGN UP</h2>
            <form className="login-form">
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div id="emailHelp" className="form-text text-muted">
                Please enter your FAITH Account.
              </div>
            </form>

            <div className="signup-links d-flex justify-content-between mt-3">
              {/* Add Flexbox classes */}
              <button
                onClick={handleRequestAccess}
                className="btn btn-primary me-2" // Bootstrap primary button with margin-end
              >
                Request Access Code
              </button>
              <button onClick={handleGoBack} className="btn btn-primary me-2">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
