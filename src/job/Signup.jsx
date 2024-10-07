import React from "react";
import Header from "./components/header";
import axios from "axios";
import { Notice } from "./components/notify";
// import Select from "react-select";

// const signup = () => {
//   const [selectedOptions, setSelectedOption] = useState(null);
// };

function Signup() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Bearer",
    },
  };

  const [error, setError] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let is_valid = true;
    let err = { ...error }; // Create a copy of the error state

    if (user.password.length < 8) {
      is_valid = false;
      err.password = "Password must be more than 8 characters";
    }

    if (user.password !== user.confirmPassword) {
      is_valid = false;
      err.confirmPassword = "Passwords do not match";
    }

    setError(err); // Update the error state

    if (is_valid) {
      const fd = new FormData();
      fd.append("fullname", user.name);
      fd.append("email", user.email);
      fd.append("telephonephone", user.phone);
      fd.append("password", user.password);

      let url = "http://solidrockschool.com.ng/api/people/application/create";

      axios
        .post(url, fd, config)
        .then((response) => {
          if (response.data.status == 200) {
            Notice({
              title: "saved",
              message: response.data.message,
              type: "success",
            });
            console.log("Data saved successfully");
          } else {
            console.log("Error while saving data");
          }
        })
        .catch((error) => {
          console.log("Error:", error); // Handle any errors that occurred during the request
        });
    }
  };
  const Alert = () => {
    Notice({
      title: "good job",
      message: "successfully Registered",
      type: "success",
    });
  };
  return (
    <div>
      <Header />
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Create a New Account</h1>
              <span>
                Lorem Ipsum is simply dummy text of the printing pesetting.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            <ul className="nav nav-tabs nav-justified" role="tablist">
              <li role="presentation">
                <a
                  href="#employers"
                  aria-controls="employers"
                  role="tab"
                  data-toggle="tab"
                >
                  Employers
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="seeker">
                <div className="account-content">
                  <form action="#" onSubmit={handleSubmit} className="tr-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="Telephone"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                      <span className="error">{error?.password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                      <span className="error">{error?.confirmPassword}</span>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={Alert}
                    >
                      Sign Up
                    </button>
                  </form>
                  <div className="new-user text-center">
                    <span>
                      Already Registered? <a href="signin.html">Sign in</a>
                    </span>
                  </div>
                </div>
              </div>
              {/* Employers tab code would go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
