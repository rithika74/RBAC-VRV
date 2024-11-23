import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";

function Alerts() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);
  return (
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">Alert</h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="uil uil-estate" />
                          UI elements
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Alert
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Basic</h6>
                    </div>
                    <div className="card-body">
                      <div className=" alert alert-success " role="alert">
                        <div className="alert-content">
                          <p>Success Text</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Closable</h6>
                    </div>
                    <div className="card-body">
                      <div
                        className=" alert alert-warning  alert-dismissible fade show "
                        role="alert"
                      >
                        <div className="alert-content">
                          <p>
                            Warning Text Warning Text Warning TextW arning Text
                            Warning Text Warning TextWarning Text
                          </p>
                          <button
                            type="button"
                            className="btn-close text-capitalize"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <img
                              src="img/svg/x.svg"
                              alt="x"
                              className="svg"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="alert-big alert alert-danger  alert-dismissible fade show "
                        role="alert"
                      >
                        <div className="alert-content">
                          <h6 className="alert-heading">Error Text</h6>
                          <p>
                            Warning Text Warning Text Warning TextW arning Text
                            Warning Text Warning TextWarning Text
                          </p>
                          <button
                            type="button"
                            className="btn-close text-capitalize"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <img
                              src="img/svg/x.svg"
                              alt="x"
                              className="svg"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Icon</h6>
                    </div>
                    <div className="card-body">
                      <div
                        className="alert-icon-area alert alert-success "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <p>Success Tips</p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-area alert alert-info "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <p>Informational Notes</p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-area alert alert-warning "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <p>Warning</p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-area alert alert-danger "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <p>Error</p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-big alert alert-success "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <h6 className="alert-heading">Success Tips</h6>
                          <p>
                            Detailed description and advice about successful
                            copywriting.
                          </p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-big alert alert-info "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <h6 className="alert-heading">Informational Notes</h6>
                          <p>
                            Additional description and information about
                            copywriting.
                          </p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-big alert alert-warning "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <h6 className="alert-heading">Warning</h6>
                          <p>This is a warning notice about copywriting.</p>
                        </div>
                      </div>
                      <div
                        className="alert-icon-big alert alert-danger "
                        role="alert"
                      >
                        <div className="alert-icon">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </div>
                        <div className="alert-content">
                          <h6 className="alert-heading">Error</h6>
                          <p>This is an error message about copywriting.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>More Types</h6>
                    </div>
                    <div className="card-body">
                      <div className=" alert alert-success " role="alert">
                        <div className="alert-content">
                          <p>Success Text</p>
                        </div>
                      </div>
                      <div className=" alert alert-info " role="alert">
                        <div className="alert-content">
                          <p>Info Text</p>
                        </div>
                      </div>
                      <div className=" alert alert-warning " role="alert">
                        <div className="alert-content">
                          <p>Warning Text</p>
                        </div>
                      </div>
                      <div className=" alert alert-danger " role="alert">
                        <div className="alert-content">
                          <p>Error Text</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Description</h6>
                    </div>
                    <div className="card-body">
                      <div
                        className="alert-big alert alert-success "
                        role="alert"
                      >
                        <div className="alert-content">
                          <h6 className="alert-heading">Success Text</h6>
                          <p>
                            Detailed description and advice about successful
                            copywriting.
                          </p>
                        </div>
                      </div>
                      <div className="alert-big alert alert-info " role="alert">
                        <div className="alert-content">
                          <h6 className="alert-heading">Info Text</h6>
                          <p>
                            Additional description and information about
                            copywriting.
                          </p>
                        </div>
                      </div>
                      <div
                        className="alert-big alert alert-warning "
                        role="alert"
                      >
                        <div className="alert-content">
                          <h6 className="alert-heading">Warning Text</h6>
                          <p>This is a warning notice about copywriting.</p>
                        </div>
                      </div>
                      <div
                        className="alert-big alert alert-danger "
                        role="alert"
                      >
                        <div className="alert-content">
                          <h6 className="alert-heading">Error Text</h6>
                          <p>This is an error message about copywriting.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Customized Close Text</h6>
                    </div>
                    <div className="card-body">
                      <div
                        className="text-capitalize alert alert-info  alert-dismissible fade show "
                        role="alert"
                      >
                        <div className="alert-content">
                          <p>Info Text</p>
                          <button
                            type="button"
                            className="btn-close text-capitalize"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">close now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card card-default card-md mb-4">
                    <div className="card-header  py-20">
                      <h6>Smoothly Unmount</h6>
                    </div>
                    <div className="card-body">
                      <div
                        className=" alert alert-success  alert-dismissible fade show "
                        role="alert"
                      >
                        <div className="alert-content">
                          <p>Alert Message Text</p>
                          <button
                            type="button"
                            className="btn-close text-capitalize"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          >
                            <img
                              src="img/svg/x.svg"
                              alt="x"
                              className="svg"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
