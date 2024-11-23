import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";

function Modals() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);
  return (
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">Modal</h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="uil uil-estate" />
                          Home
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Modal
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-default card-md mb-4">
                <div className="card-header">
                  <h6>Basic</h6>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-basic"
                    >
                      Open Modal
                    </button>
                  </div>
                </div>
              </div>
              <div className="card card-default card-md mb-4">
                <div className="card-header">
                  <h6>Confirmation modal dialog</h6>
                </div>
                <div className="card-body">
                  <div className="modal-btn-group d-flex align-items-center justify-content-sm-start justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info-confirmed"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card card-default card-md mb-4">
                <div className="card-header">
                  <h6>Color Modal</h6>
                </div>
                <div className="card-body">
                  <div className="modal-btn-group d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-colored-primary"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-colored-success"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-colored-danger"
                    >
                      Danger
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-colored-warning"
                    >
                      Warning
                    </button>
                  </div>
                </div>
              </div>
              <div className="card card-default card-md mb-4">
                <div className="card-header">
                  <h6>Info Modal</h6>
                </div>
                <div className="card-body">
                  <div className="modal-btn-group d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info"
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info-success"
                    >
                      Success
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info-error"
                    >
                      Error
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-lighten btn-outline-lighten__height"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-info-warning"
                    >
                      Warning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-basic modal fade show"
        id="modal-basic"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content modal-bg-white ">
            <div className="modal-header">
              <h6 className="modal-title">Basic title</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-colored-primary modal fade show"
        id="modal-colored-primary"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content modal-bg-primary modal-colored">
            <div className="modal-header">
              <h6 className="modal-title">Basic title</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-colored-success modal fade show"
        id="modal-colored-success"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content modal-bg-success modal-colored">
            <div className="modal-header">
              <h6 className="modal-title">Basic title</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-colored-danger modal fade show"
        id="modal-colored-danger"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content modal-bg-danger modal-colored">
            <div className="modal-header">
              <h6 className="modal-title">Basic title</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-colored-warning modal fade show"
        id="modal-colored-warning"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content modal-bg-warning modal-colored">
            <div className="modal-header">
              <h6 className="modal-title">Basic title</h6>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" className="svg" />
              </button>
            </div>
            <div className="modal-body">
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary btn-sm">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info modal fade show"
        id="modal-info"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon primary">
                  <img
                    src="img/svg/alert-circle.svg"
                    alt="alert-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <p>Some contents...</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info-success modal fade show"
        id="modal-info-success"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon success">
                  <img
                    src="img/svg/check-circle.svg"
                    alt="check-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <p>Some contents...</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info-error modal fade show"
        id="modal-info-error"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon danger">
                  <img
                    src="img/svg/x-circle.svg"
                    alt="x-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <p>Some contents...</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info-warning modal fade show"
        id="modal-info-warning"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon warning">
                  <img
                    src="img/svg/alert-circle.svg"
                    alt="alert-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <p>Some contents...</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info-confirmed modal fade show"
        id="modal-info-confirmed"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon warning">
                  <img
                    src="img/svg/alert-circle.svg"
                    alt="alert-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <h6>Do you Want to delete these items?</h6>
                  <p>Some descriptions</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-outlined btn-sm"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-info btn-sm"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-info-delete modal fade show"
        id="modal-info-delete"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-info-body d-flex">
                <div className="modal-info-icon warning">
                  <img
                    src="img/svg/alert-circle.svg"
                    alt="alert-circle"
                    className="svg"
                  />
                </div>
                <div className="modal-info-text">
                  <h6>Do you Want to delete these items?</h6>
                  <p>Some contents...</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-outlined btn-sm"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-success btn-outlined btn-sm"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
