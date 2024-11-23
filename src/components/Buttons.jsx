import React, { useContext } from "react";
import { ContextDatas } from "../services/Context";

function Buttons() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);
  return (
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">buttons</h4>
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
                        Library
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
                    <div className="card-header">
                      <h6>Basic</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-squared ">
                          Primary
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared ">
                          Secondary
                        </button>
                        <button className="btn btn-success btn-default btn-squared ">
                          Success
                        </button>
                        <button className="btn btn-info btn-default btn-squared ">
                          Info
                        </button>
                        <button className="btn btn-warning btn-default btn-squared ">
                          Wraning
                        </button>
                        <button className="btn btn-danger btn-default btn-squared ">
                          Danger
                        </button>
                        <button className="btn btn-dark btn-default btn-squared ">
                          Dark
                        </button>
                        <button className="btn btn-light btn-default btn-squared ">
                          Light
                        </button>
                        <button className="btn btn-white btn-default btn-squared ">
                          White
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Light Color</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-squared btn-transparent-primary ">
                          Primary
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared btn-transparent-secondary ">
                          Secondary
                        </button>
                        <button className="btn btn-success btn-default btn-squared btn-transparent-success ">
                          Success
                        </button>
                        <button className="btn btn-info btn-default btn-squared btn-transparent-info ">
                          Info
                        </button>
                        <button className="btn btn-warning btn-default btn-squared btn-transparent-warning ">
                          Wraning
                        </button>
                        <button className="btn btn-danger btn-default btn-squared btn-transparent-danger ">
                          Danger
                        </button>
                        <button className="btn btn-dark btn-default btn-squared btn-transparent-dark ">
                          Dark
                        </button>
                        <button className="btn btn-light btn-default btn-squared btn-transparent-light ">
                          Light
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Rounded</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-rounded ">
                          Primary
                        </button>
                        <button className="btn btn-secondary btn-default btn-rounded ">
                          Secondary
                        </button>
                        <button className="btn btn-success btn-default btn-rounded ">
                          Success
                        </button>
                        <button className="btn btn-info btn-default btn-rounded ">
                          Info
                        </button>
                        <button className="btn btn-warning btn-default btn-rounded ">
                          Wraning
                        </button>
                        <button className="btn btn-danger btn-default btn-rounded ">
                          Danger
                        </button>
                        <button className="btn btn-dark btn-default btn-rounded ">
                          Dark
                        </button>
                        <button className="btn btn-light btn-default btn-rounded ">
                          Light
                        </button>
                        <button className="btn btn-white btn-default btn-rounded ">
                          White
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Icon</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-squared ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-primary btn-default btn-squared btn-transparent-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-squared color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-squared color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-light btn-default btn-squared ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-white btn-default btn-squared btn-shadow-white ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-icon btn-primary btn-squared">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-squared color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-light btn-squared">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-squared color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Size</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap align-items-end">
                        <button className="btn btn-primary btn-lg btn-squared ">
                          Large Buton
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared ">
                          Default
                        </button>
                        <button className="btn btn-success btn-sm btn-squared ">
                          Small
                        </button>
                        <button className="btn btn-info btn-xs btn-squared ">
                          Extra small
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Multiple Buttons</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap align-items-end">
                        <button className="btn btn-primary btn-default btn-squared ">
                          Primary
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared ">
                          Secondary
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-light btn-outlined btn-outline-light color-light dropdown-toggle"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Actions
                            <i className="la la-angle-down" />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Btn Action One
                            </a>
                            <a className="dropdown-item" href="#">
                              Btn Action One
                            </a>
                            <a className="dropdown-item" href="#">
                              Btn Action One
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Group Button</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-block">
                        <h6>Basic</h6>
                        <div className="button-inline-list my-n2">
                          <div
                            className="btn-group dm-button-group btn-group-normal my-2"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn  btn-xs active btn-outline-light"
                            >
                              Today
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Week
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Month
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Year
                            </button>
                          </div>
                          <div
                            className="btn-group dm-button-group btn-group-normal my-2"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Ok
                            </button>
                          </div>
                          <div
                            className="btn-group dm-button-group btn-group-solid my-2"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Left
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Middle
                            </button>
                            <button
                              type="button"
                              className="btn  btn-xs btn-outline-light"
                            >
                              Right
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="dm-button-block mt-30">
                        <h6>With Icon</h6>
                        <div className="button-inline-list">
                          <div
                            className="btn-group dm-button-group btn-group-withIcon my-2"
                            role="group"
                          >
                            <button
                              type="button"
                              className="btn btn-primary btn-xs active"
                            >
                              <img
                                src="img/svg/chevron-left.svg"
                                alt="chevron-left"
                                className="svg"
                              />
                              Go Back
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-xs"
                            >
                              Go Forward
                              <img
                                className="svg"
                                src="img/svg/chevron-right.svg"
                                alt="chevron-right.svg"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Block</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list">
                        <button className="btn btn-primary btn-lg btn-squared btn-block ">
                          Large Button
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared btn-block ">
                          Default
                        </button>
                        <button className="btn btn-success btn-sm btn-squared btn-block ">
                          Samll
                        </button>
                        <button className="btn btn-info btn-xs btn-squared btn-block ">
                          Extra Small
                        </button>
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
                    <div className="card-header">
                      <h6>Outline</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-default btn-squared color-primary btn-outline-primary ">
                          Primary
                        </button>
                        <button className="btn btn-default btn-squared color-secondary btn-outline-secondary ">
                          Secondary
                        </button>
                        <button className="btn btn-default btn-squared color-success btn-outline-success ">
                          Success
                        </button>
                        <button className="btn btn-default btn-squared color-info btn-outline-info ">
                          Info
                        </button>
                        <button className="btn btn-default btn-squared color-warning btn-outline-warning ">
                          Wraning
                        </button>
                        <button className="btn btn-default btn-squared color-danger btn-outline-danger ">
                          Danger
                        </button>
                        <button className="btn btn-default btn-squared color-dark btn-outline-dark ">
                          Dark
                        </button>
                        <button className="btn btn-default btn-squared color-light btn-outline-light ">
                          Light
                        </button>
                        <button className="btn btn-default btn-squared color-dashed btn-outline-dashed ">
                          Dashed
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Raised</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-squared btn-shadow-primary ">
                          Primary
                        </button>
                        <button className="btn btn-secondary btn-default btn-squared btn-shadow-secondary ">
                          Secondary
                        </button>
                        <button className="btn btn-success btn-default btn-squared btn-shadow-success ">
                          Success
                        </button>
                        <button className="btn btn-info btn-default btn-squared btn-shadow-info ">
                          Info
                        </button>
                        <button className="btn btn-warning btn-default btn-squared btn-shadow-warning ">
                          Wraning
                        </button>
                        <button className="btn btn-danger btn-default btn-squared btn-shadow-danger ">
                          Danger
                        </button>
                        <button className="btn btn-dark btn-default btn-squared btn-shadow-dark ">
                          Dark
                        </button>
                        <button className="btn btn-white btn-default btn-squared btn-shadow-white ">
                          White
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Rounded Outline</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-default btn-rounded color-primary btn-outline-primary ">
                          Primary
                        </button>
                        <button className="btn btn-default btn-rounded color-secondary btn-outline-secondary ">
                          Secondary
                        </button>
                        <button className="btn btn-default btn-rounded color-success btn-outline-success ">
                          Success
                        </button>
                        <button className="btn btn-default btn-rounded color-info btn-outline-info ">
                          Info
                        </button>
                        <button className="btn btn-default btn-rounded color-warning btn-outline-warning ">
                          Wraning
                        </button>
                        <button className="btn btn-default btn-rounded color-danger btn-outline-danger ">
                          Danger
                        </button>
                        <button className="btn btn-default btn-rounded color-dark btn-outline-dark ">
                          Dark
                        </button>
                        <button className="btn btn-default btn-rounded color-light btn-outline-light ">
                          Light
                        </button>
                        <button className="btn btn-default btn-rounded color-dashed btn-outline-dashed ">
                          Dashed
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Rounded with Icon</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-rounded ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-primary btn-default btn-rounded btn-transparent-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-rounded color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-rounded color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-light btn-default btn-rounded ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-white btn-default btn-squared btn-shadow-white ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-icon btn-primary btn-circle">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-circle color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-light btn-circle">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-circle color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Disabled</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap align-items-end mb-1">
                        <button className="btn btn-primary btn-default btn-squared ">
                          Primary
                        </button>
                        <button
                          className="btn btn-primary btn-default btn-squared "
                          disabled
                        >
                          Primary(Disabled)
                        </button>
                      </div>
                      <div className="dm-button-list d-flex flex-wrap align-items-end">
                        <button className="btn btn-default btn-squared color-light btn-outline-light ">
                          Default
                        </button>
                        <button
                          className="btn btn-default btn-squared color-light btn-outline-light "
                          disabled
                        >
                          Default(Disabled)
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Loading</h6>
                    </div>
                    <div className="card-body">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-primary btn-default btn-squared ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-primary btn-default btn-squared btn-transparent-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-squared color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-default btn-squared color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-light btn-default btn-squared ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-white btn-default btn-squared btn-shadow-white ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
                        </button>
                        <button className="btn btn-icon btn-primary btn-squared">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-squared color-primary btn-outline-primary ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-light btn-squared">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                        <button className="btn btn-icon btn-squared color-light btn-outline-light ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card card-default card-md mb-4">
                    <div className="card-header">
                      <h6>Button Ghost</h6>
                    </div>
                    <div className="card-body gradient1">
                      <div className="dm-button-list d-flex flex-wrap">
                        <button className="btn btn-ghost btn-default btn-squared ">
                          Primary
                        </button>
                        <button className="btn btn-ghost btn-default btn-squared ">
                          Secondary
                        </button>
                        <button className="btn btn-ghost btn-default btn-squared ">
                          <img
                            src="img/svg/layers.svg"
                            alt="layers"
                            className="svg"
                          />
                          Default
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
  );
}

export default Buttons;
