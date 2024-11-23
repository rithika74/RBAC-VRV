import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";

function Forms() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);

  return (
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">Form Layouts</h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="uil uil-estate" />
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      form layouts
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-horizontal card-default card-md mb-4">
              <div className="card-header">
                <h6>Horizontal Form</h6>
              </div>
              <div className="card-body py-md-30">
                <div className="horizontal-form">
                  <form action="#">
                    <div className="form-group row mb-25">
                      <div className="col-sm-3 d-flex aling-items-center">
                        <label
                          htmlFor="inputName"
                          className=" col-form-label color-dark fs-14 fw-500 align-center"
                        >
                          Name
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control ih-medium ip-gray radius-xs b-light px-15"
                          id="inputName"
                          placeholder="Duran Clayton"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-25">
                      <div className="col-sm-3 d-flex aling-items-center">
                        <label
                          htmlFor="inputPassword"
                          className="col-form-label  color-dark fs-14 fw-500 align-center"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control  ih-medium ip-gray radius-xs b-light px-15"
                          id="inputEmail"
                          placeholder="username@email.com"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-0">
                      <div className="col-sm-3">
                        <label
                          htmlFor="inputPassword"
                          className=" col-form-label  color-dark fs-14 fw-500 align-center"
                        >
                          Password
                        </label>
                      </div>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control  ih-medium ip-gray radius-xs b-light px-15"
                          id="inputPassword"
                        />
                        <div className="layout-button mt-25 justify-content-end">
                          <button
                            type="button"
                            className="btn btn-default btn-squared btn-light px-20 "
                          >
                            cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-default btn-squared px-30"
                          >
                            save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Vertical Form</h6>
              </div>
              <div className="card-body pb-md-30">
                <div className="Vertical-form">
                  <form action="#">
                    <div className="form-group">
                      <label
                        htmlFor="formGroupExampleInput"
                        className="color-dark fs-14 fw-500 align-center mb-10"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        id="formGroupExampleInput"
                        placeholder="Duran Clayton"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="formGroupExampleInput2"
                        className="color-dark fs-14 fw-500 align-center mb-10"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        id="formGroupExampleInput2"
                        placeholder="username@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="formGroupExampleInput3"
                        className="color-dark fs-14 fw-500 align-center mb-10"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        id="formGroupExampleInput3"
                      />
                    </div>
                    <div className="layout-button mt-25 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-default btn-squared btn-light px-20 "
                      >
                        cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-default btn-squared px-30"
                      >
                        save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Multiple Column </h6>
              </div>
              <div className="card-body py-md-30">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Country"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Company"
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="email"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="layout-button mt-0 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-default btn-squared btn-light px-20 "
                        >
                          cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-default btn-squared px-30"
                        >
                          save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
