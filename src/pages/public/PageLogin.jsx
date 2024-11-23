import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ApiCall } from "../../services/ApiCall";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextDatas } from "../../services/Context";
import { basePath } from "../../services/UrlPaths";

function PageLogin() { 
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const { isLogedIn } = useContext(ContextDatas)



  useEffect(() => {
      if (isLogedIn) {
        window.location.href = basePath
      }
  }, [])
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    try {

      const response = await ApiCall("post", "/auth/login", {
        username: userData.username,
        password: userData.password,
      });
      console.log("API Response:", response);
      if (response.status) {
        localStorage.setItem("token" ,response?.message?.data?.token )
        window.location.href = "/";
        toast.success("Login successfully!");
      } else {
        console.log("Error adding product:", response);
        setErrorMessage("Incorrect username & password");
      }

    } catch (error) {
      console.error("Error logging in:", error);
      
    }
  };

  return (
    <div>
      <main className="main-content" style={{ marginTop: "-20px" }}>
        <div className="admin">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8">
                <div className="edit-profile">
                  <div className="card border-0">
                    <div className="card-header p-0">
                      <div className="edit-profile__title">
                        <div className="edit-profile__logos">
                          <a href="/">
                            <img className="dark" src="img/logo/logo-wins.svg" alt="" width={40} />
                            <img className="light" src="img/logo/logo-wins.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="edit-profile__body">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Username or Email Address</label>
                            <input
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              required id="name" 
                              type="text"
                              placeholder="Enter username or email"
                              name="username" 
                              value={userData.username}
                              onChange={handleInputChange} 
                            />
                            <Form.Control.Feedback type="invalid">Please add username</Form.Control.Feedback>
                            
                          </div>

                          <div className="form-group">
                            <label>Password</label>
                            <input
                              className="form-control ih-medium ip-light radius-xs b-light px-15"
                              required id="password" 
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={userData.password}
                              onChange={handleInputChange} 
                            />
                            <Form.Control.Feedback type="invalid">Please add password</Form.Control.Feedback>
                           
                          </div>

                          <button className="btn btn-primary btn-default btn-squared px-30 w-100 mt-4" type="submit">
                            Sign in
                          </button>
                          {errorMessage && (
                            <div className="text-danger mt-3 radius-xs b-light" style={{fontSize: ".875em",color:"#DF060A",border:"none"}}>{errorMessage}</div>
                          )}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer/>
    </div>
    
  );
}

export default PageLogin;
