import React, { useContext } from "react";
import { ContextDatas } from "../../../services/Context";

function PageDashboard() {
  const { mobileSide, setmobileSide } = useContext(ContextDatas);

  return (
    <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
      <div className="demo4 crm">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">Demo 4</h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="uil uil-estate" />
                          Dashboard
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Demo 4
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6 mb-25">
              <div className="card banner-feature banner-feature--danial mb-0 h-100">
                <div className="banner-feature__shape">
                  <img src="/img/glass-trophy.png" alt="/img" />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="card-body">
                    <h1 className="banner-feature__heading color-white">
                      Congratulations Danial!
                    </h1>
                    <p className="banner-feature__para ">
                      Best Seller on the last month.
                    </p>
                    <button
                      className="banner-feature__btn btn color-secondary btn-md px-20 radius-xs fs-15"
                      type="button"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6 mb-25">
              <div className="card performance-o border-0">
                <div className="card-header border-0 pb-0">
                  <h6>Performance Overview </h6>
                  <div className="card-extra">
                    <div className="dropdown dropleft">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/img/svg/more-horizontal.svg"
                          alt="more-horizontal"
                          className="svg"
                        />
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-sm-25 pb-25">
                  <div className="performance-chart">
                    <div className>
                      <div className="performanceDetails" />
                    </div>
                  </div>
                  <div className="performance-chart-labels">
                    <ul>
                      <li className="label-target">Target</li>
                      <li className="label-completed">Completed</li>
                      <li className="label-in-progress">In Progress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 mb-25">
              <div className="row">
                <div className="col-md-6">
                  <div className="overview-content products-awards pt-20 pb-20 text-center radius-xl">
                    <div className="d-inline-flex flex-column align-items-center justify-content-center">
                      <div className="revenue-chart-box__Icon order-bg-opacity-primary color-primary me-0">
                        <i className="uil uil-briefcase-alt" />
                      </div>
                      <div className="d-flex align-items-start flex-wrap">
                        <div>
                          <p className="mb-1 mb-0 color-gray">
                            Total Products{" "}
                          </p>
                          <h1>21K</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="overview-content products-awards pt-20 pb-20 text-center radius-xl">
                    <div className="d-inline-flex flex-column align-items-center justify-content-center">
                      <div className="revenue-chart-box__Icon order-bg-opacity-info color-info me-0">
                        <i className="uil uil-award" />
                      </div>
                      <div className="d-flex align-items-start flex-wrap">
                        <div>
                          <p className="mb-1 mb-0 color-gray">Total Awards</p>
                          <h1>15K</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-25">
                  <div className="card banner-feature banner-feature--7 position-relative border-0 mb-0">
                    <div className="d-flex justify-content-center">
                      <div className="card-body py-25 px-30">
                        <div className="div">
                          <h4 className="banner-feature__heading">
                            Subscribe to our newsletter
                          </h4>
                          <p className="banner-feature__para ">
                            We notify you once any post is published
                          </p>
                          <button
                            type="button"
                            className="btn btn-primary mt-15 btn-md"
                          >
                            Subscribe
                          </button>
                        </div>
                        <div className="banner-feature__shape position-absolute">
                          <img src="/img/3d-message.png" alt="/img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-25">
              <div className="card border-0 h-100 px-25 pb-25">
                <div className="card-header px-0 border-0">
                  <h6>Task Lists</h6>
                  <div className="card-extra">
                    <ul className="card-tab-links nav-tabs nav" role="tablist">
                      <li>
                        <a
                          className="active"
                          href="#t_selling-today2222"
                          data-bs-toggle="tab"
                          id="t_selling-today2222-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          href="#t_selling-week2222"
                          data-bs-toggle="tab"
                          id="t_selling-week2222-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Week
                        </a>
                      </li>
                      <li>
                        <a
                          href="#t_selling-month3333"
                          data-bs-toggle="tab"
                          id="t_selling-month3333-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="t_selling-today2222"
                      role="tabpanel"
                      aria-labelledby="t_selling-today2222-tab"
                    >
                      <div className="project-task new table-responsive table-responsive--dynamic">
                        <table className="table table-borderless">
                          <tbody>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-1"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-1"
                                      className="fs-14 color-light"
                                    >
                                      Planning for new dashboard wireframe and
                                      prototype design
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-2"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-2"
                                      className="fs-14 color-light"
                                    >
                                      Standup meeting with team
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-3"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-3"
                                      className="fs-14 color-light"
                                    >
                                      Create eye garbing images for WordPress
                                      blog post
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-4"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-4"
                                      className="fs-14 color-light"
                                    >
                                      Write an article about upcoming theme
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-5"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-5"
                                      className="fs-14 color-light"
                                    >
                                      Dashboard new feature dark mode design
                                      discussion
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="t_selling-week2222"
                      role="tabpanel"
                      aria-labelledby="t_selling-week2222-tab"
                    >
                      <div className="project-task table-responsive">
                        <table className="table table-borderless">
                          <tbody>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-11"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-11"
                                      className="fs-14 color-light"
                                    >
                                      Planning for new dashboard wireframe and
                                      prototype design
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-12"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-12"
                                      className="fs-14 color-light"
                                    >
                                      Standup meeting with team
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-13"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-13"
                                      className="fs-14 color-light"
                                    >
                                      Create images for blog post
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-14"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-14"
                                      className="fs-14 color-light"
                                    >
                                      Write an article about upcoming theme
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-15"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-15"
                                      className="fs-14 color-light"
                                    >
                                      Dashboard new feature dark mode design
                                      discussion
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="t_selling-month3333"
                      role="tabpanel"
                      aria-labelledby="t_selling-month3333-tab"
                    >
                      <div className="project-task table-responsive">
                        <table className="table table-borderless">
                          <tbody>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-21"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-21"
                                      className="fs-14 color-light"
                                    >
                                      Planning for new dashboard wireframe and
                                      prototype design
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-22"
                                      defaultChecked
                                    />
                                    <label
                                      htmlFor="check-grp-planning-22"
                                      className="fs-14 color-light"
                                    >
                                      Standup meeting with team
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-23"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-23"
                                      className="fs-14 color-light"
                                    >
                                      Create images for blog post
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-24"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-24"
                                      className="fs-14 color-light"
                                    >
                                      Write an article about upcoming theme
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr className="project-task-list project-task-list--active-user new">
                              <td>
                                <div className="checkbox-group d-flex">
                                  <div className="checkbox-theme-default custom-checkbox custom-checkbox--success checkbox-group__single d-flex">
                                    <input
                                      className="checkbox"
                                      type="checkbox"
                                      id="check-grp-planning-25"
                                    />
                                    <label
                                      htmlFor="check-grp-planning-25"
                                      className="fs-14 color-light"
                                    >
                                      Dashboard new feature dark mode design
                                      discussion
                                    </label>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="project-task-list__right">
                                  <div className="dropdown dropleft d-flex justify-content-end">
                                    <a
                                      href="#"
                                      role="button"
                                      id="revenue1"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="btn-link"
                                    >
                                      <img
                                        src="/img/svg/more-horizontal.svg"
                                        alt="more-horizontal"
                                        className="svg"
                                      />
                                    </a>
                                    <div
                                      className="dropdown-menu dropdown-menu--dynamic"
                                      aria-labelledby="revenue1"
                                    >
                                      <a className="dropdown-item" href="#">
                                        Action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Another action
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Something else here
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 mb-25">
              <div className="card border-0 px-25 h-100">
                <div className="card-header px-0 border-0">
                  <h6>Marketing Campaigns</h6>
                  <div className="card-extra">
                    <ul className="card-tab-links nav-tabs nav" role="tablist">
                      <li>
                        <a
                          className="active"
                          href="#t_selling-today"
                          data-bs-toggle="tab"
                          id="t_selling-today-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          href="#t_selling-week"
                          data-bs-toggle="tab"
                          id="t_selling-week-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Week
                        </a>
                      </li>
                      <li>
                        <a
                          href="#t_selling-month"
                          data-bs-toggle="tab"
                          id="t_selling-month-tab"
                          role="tab"
                          aria-selected="true"
                        >
                          Month
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="t_selling-today"
                      role="tabpanel"
                      aria-labelledby="t_selling-today-tab"
                    >
                      <div className="selling-table-wrap selling-table-wrap--2">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/microsoft.png"
                                      alt="/img"
                                    />
                                    <span>Microsoft Company</span>
                                  </div>
                                </td>
                                <td>$1045,120</td>
                                <td>45%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-2">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/wordpress.png"
                                      alt="/img"
                                    />
                                    <span>WordPress</span>
                                  </div>
                                </td>
                                <td>$2000,520</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adidas.png"
                                      alt="/img"
                                    />
                                    <span>Adidas Brand</span>
                                  </div>
                                </td>
                                <td>$1520,950</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid "
                                      src="/img/browser/slack.png"
                                      alt="/img"
                                    />
                                    <span>Slack</span>
                                  </div>
                                </td>
                                <td>$7045,154</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adobe.png"
                                      alt="/img"
                                    />
                                    <span>Adobe CC</span>
                                  </div>
                                </td>
                                <td>$1252,220</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="t_selling-week"
                      role="tabpanel"
                      aria-labelledby="t_selling-week-tab"
                    >
                      <div className="selling-table-wrap selling-table-wrap--2">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/microsoft.png"
                                      alt="/img"
                                    />
                                    <span>Microsoft Company</span>
                                  </div>
                                </td>
                                <td>$1045,120</td>
                                <td>45%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-2">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/wordpress.png"
                                      alt="/img"
                                    />
                                    <span>WordPress</span>
                                  </div>
                                </td>
                                <td>$2000,520</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adidas.png"
                                      alt="/img"
                                    />
                                    <span>Adidas Brand</span>
                                  </div>
                                </td>
                                <td>$1520,950</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid "
                                      src="/img/browser/slack.png"
                                      alt="/img"
                                    />
                                    <span>Slack</span>
                                  </div>
                                </td>
                                <td>$7045,154</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adobe.png"
                                      alt="/img"
                                    />
                                    <span>Adobe CC</span>
                                  </div>
                                </td>
                                <td>1561</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="t_selling-month"
                      role="tabpanel"
                      aria-labelledby="t_selling-month-tab"
                    >
                      <div className="selling-table-wrap selling-table-wrap--2">
                        <div className="table-responsive">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/microsoft.png"
                                      alt="/img"
                                    />
                                    <span>Microsoft Company</span>
                                  </div>
                                </td>
                                <td>$1045,120</td>
                                <td>45%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-2">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/wordpress.png"
                                      alt="/img"
                                    />
                                    <span>WordPress</span>
                                  </div>
                                </td>
                                <td>$2000,520</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adidas.png"
                                      alt="/img"
                                    />
                                    <span>Adidas Brand</span>
                                  </div>
                                </td>
                                <td>$1520,950</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid "
                                      src="/img/browser/slack.png"
                                      alt="/img"
                                    />
                                    <span>Slack</span>
                                  </div>
                                </td>
                                <td>$7045,154</td>
                                <td>25%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-3">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img selling-product-img--2 d-flex align-items-center">
                                    <img
                                      className="radius-xs img-fluid"
                                      src="/img/browser/adobe.png"
                                      alt="/img"
                                    />
                                    <span>Adobe CC</span>
                                  </div>
                                </td>
                                <td>1561</td>
                                <td>50%</td>
                                <td className="d-flex justify-content-center">
                                  <div className="product-pie-wrapper product-pie-wrapper--45 product-pie-wrapper--style-4">
                                    <div className="product-pie-wrapper__pie">
                                      <div className="product-pie-wrapper__left-side product-pie-wrapper__half-circle"></div>
                                      <div className="product-pie-wrapper__right-side product-pie-wrapper__half-circle"></div>
                                    </div>
                                    <div className="product-pie-wrapper__shadow" />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8">
              <div className="row">
                <div className="col-md-6 mb-25">
                  <div className="feature-profile h-100">
                    <div className="feature-profile__bg">
                      <img src="/img/profile_bg.png" alt />
                    </div>
                    <div className="feature-profile_content">
                      <img src="/img/profile_bg_2.png" alt />
                      <h6>Robert Clinton</h6>
                      <p>Best Seller of the last month</p>
                      <ul className="profile-feature__social">
                        <li>
                          <a href="#" className="bg-facebook">
                            <i className="lab la-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="bg-twitter">
                            <i className="lab la-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="bg-primary">
                            <i className="lab la-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-25">
                  <div className="card border-0 h-100">
                    <div className="card-header border-0">
                      <h6>Team Members </h6>
                      <div className="card-extra">
                        <div className="dropdown dropleft">
                          <a
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img
                              src="/img/svg/more-horizontal.svg"
                              alt="more-horizontal"
                              className="svg"
                            />
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pb-30 pt-1">
                      <div className="team-members">
                        <ul>
                          <li>
                            <div className="team-members__left">
                              <img
                                className="rounded-circle"
                                src="/img/team01.png"
                                alt
                              />
                              <div className="team-members__title">
                                <h6>Shane Watson</h6>
                              </div>
                            </div>
                            <div className="team-members__middle">
                              <div className="team-members__title--online d-flex align-items-center">
                                <span className="badge-dot dot-success" />
                                Online
                              </div>
                            </div>
                            <div className="team-member__right">
                              <div className="team-member__add">
                                <button type="button">add</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="team-members__left">
                              <img
                                className="rounded-circle"
                                src="/img/team02.png"
                                alt
                              />
                              <div className="team-members__title">
                                <h6>Chris Dohan</h6>
                              </div>
                            </div>
                            <div className="team-members__middle">
                              <div className="team-members__title--online d-flex align-items-center">
                                <span className="badge-dot dot-success" />
                                Online
                              </div>
                            </div>
                            <div className="team-member__right">
                              <div className="team-member__add">
                                <button type="button">add</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="team-members__left">
                              <img
                                className="rounded-circle"
                                src="/img/team03.png"
                                alt
                              />
                              <div className="team-members__title">
                                <h6>Robert Clinton</h6>
                              </div>
                            </div>
                            <div className="team-members__middle">
                              <div className="team-members__title--online d-flex align-items-center">
                                <span className="badge-dot dot-success" />
                                Online
                              </div>
                            </div>
                            <div className="team-member__right">
                              <div className="team-member__add">
                                <button type="button">add</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="team-members__left">
                              <img
                                className="rounded-circle"
                                src="/img/team04.png"
                                alt
                              />
                              <div className="team-members__title">
                                <h6>Daniel White</h6>
                              </div>
                            </div>
                            <div className="team-members__middle">
                              <div className="team-members__title--online d-flex align-items-center">
                                <span className="badge-dot dot-success" />
                                Online
                              </div>
                            </div>
                            <div className="team-member__right">
                              <div className="team-member__add">
                                <button type="button">add</button>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="team-members__left">
                              <img
                                className="rounded-circle"
                                src="/img/team1.png"
                                alt
                              />
                              <div className="team-members__title">
                                <h6>Black Smith</h6>
                              </div>
                            </div>
                            <div className="team-members__middle">
                              <div className="team-members__title--online d-flex align-items-center">
                                <span className="badge-dot dot-success" />
                                Online
                              </div>
                            </div>
                            <div className="team-member__right">
                              <div className="team-member__add">
                                <button type="button">add</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-25">
                  <div className="card border-0 px-25 h-100">
                    <div className="card-header px-0 border-0">
                      <h6>Social Media Traffic</h6>
                      <div className="dropdown dropleft">
                        <a
                          href="#"
                          role="button"
                          id="Today"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src="/img/svg/more-horizontal.svg"
                            alt="more-horizontal"
                            className="svg"
                          />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="Today">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="selling-table-wrap selling-table-wrap--source">
                        <div className="table-responsive">
                          <table className="table table--default table-borderless">
                            <thead>
                              <tr>
                                <th>Social</th>
                                <th>user</th>
                                <th>session</th>
                                <th>bounce rate</th>
                                <th className="text-end">
                                  Avg. session duration
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="selling-product-img d-flex align-items-center">
                                    <div className="selling-product-img-wrapper order-bg-opacity-primary color-primary">
                                      <i className="uil uil-facebook-f" />
                                    </div>
                                    <span>Facebook</span>
                                  </div>
                                </td>
                                <td>3,397</td>
                                <td>422</td>
                                <td>2,584</td>
                                <td>00:01:05</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img d-flex align-items-center">
                                    <div className="selling-product-img-wrapper order-bg-opacity-secondary color-secondary">
                                      <i className="uil uil-twitter" />
                                    </div>
                                    <span>Twitter</span>
                                  </div>
                                </td>
                                <td>3,397</td>
                                <td>422</td>
                                <td>2,584</td>
                                <td>00:01:05</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img d-flex align-items-center">
                                    <div className="selling-product-img-wrapper order-bg-opacity-info color-info">
                                      <i className="uil uil-instagram" />
                                    </div>
                                    <span>Instagram</span>
                                  </div>
                                </td>
                                <td>3,397</td>
                                <td>422</td>
                                <td>2,584</td>
                                <td>00:01:05</td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="selling-product-img d-flex align-items-center">
                                    <div className="selling-product-img-wrapper order-bg-opacity-danger color-danger">
                                      <i className="uil uil-youtube" />
                                    </div>
                                    <span>Youtube</span>
                                  </div>
                                </td>
                                <td>3,397</td>
                                <td>422</td>
                                <td>2,584</td>
                                <td>00:01:05</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 mb-25">
              <div className="card border-0">
                <div className="card-header border-0">
                  <h6>chat</h6>
                  <div className="card-extra">
                    <div className="dropdown dropleft">
                      <a
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="/img/svg/more-horizontal.svg"
                          alt="more-horizontal"
                          className="svg"
                        />
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="chat mini-chat">
                    <div className="chat-body bg-white radius-xl">
                      <div className="chat-box chat-box--small l-lg-10 pe-lg-20 pt-10 px-sm-25">
                        <div className="flex-1 incoming-chat">
                          <div className="chat-text-box">
                            <div className="media ">
                              <div className="chat-text-box__photo ">
                                <img
                                  src="/img/author/1.jpg"
                                  className="align-self-start me-15 wh-46"
                                  alt="/img"
                                />
                              </div>
                              <div className="media-body">
                                <div className="chat-text-box__content">
                                  <div className="chat-text-box__title d-flex align-items-center">
                                    <h6 className="fs-14">Black Smith</h6>
                                    <span className="chat-text-box__time fs-12 color-light fw-400 ms-25">
                                      8:30 PM
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center mt-10">
                                    <div className="chat-text-box__subtitle p-20 bg-gray">
                                      <p className="color-white">
                                        Jam nonumy eirmod tsadipscing elitr sed
                                        diam nonumy eirmod tempor invidunt ut
                                        labore et{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 justify-content-end d-flex outgoing-chat mt-15">
                          <div className="chat-text-box">
                            <div className="media ">
                              <div className="media-body">
                                <div className="chat-text-box__content">
                                  <div className="chat-text-box__title d-flex align-items-center justify-content-end">
                                    <span className="chat-text-box__time fs-12 color-light fw-400">
                                      8:30 PM
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-end">
                                    <div className="chat-text-box__subtitle p-20 bg-deep">
                                      <p className="color-gray">
                                        Jam nonumy eirmod tsadipscing elitr sed
                                        diam nonumy eirmod tempor invidunt ut
                                        labore et{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 incoming-chat mt-15">
                          <div className="chat-text-box">
                            <div className="media ">
                              <div className="chat-text-box__photo ">
                                <img
                                  src="/img/author/1.jpg"
                                  className="align-self-start me-15 wh-46"
                                  alt="/img"
                                />
                              </div>
                              <div className="media-body">
                                <div className="chat-text-box__content">
                                  <div className="chat-text-box__title d-flex align-items-center">
                                    <h6 className="fs-14">Domnic Harys</h6>
                                    <span className="chat-text-box__time fs-12 color-light fw-400 ms-2">
                                      8:30 PM
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center mt-10">
                                    <div className="chat-text-box__subtitle p-20 bg-gray">
                                      <p className="color-white">
                                        Jam nonumy eirmod tempor invidunt ut
                                        labore
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 justify-content-end d-flex outgoing-chat">
                          <div className="chat-text-box">
                            <div className="media ">
                              <div className="media-body">
                                <div className="chat-text-box__content">
                                  <div className="chat-text-box__title d-flex align-items-center justify-content-end mt-10">
                                    <span className="chat-text-box__time fs-12 color-light fw-400">
                                      8:30 PM
                                    </span>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-end">
                                    <div className="chat-text-box__subtitle p-20 bg-deep">
                                      <p className="color-gray">
                                        Jam nonumy eirmod tempor invidunt ut
                                        labore et dolore magna.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 incoming-chat mt-30">
                          <div className="chat-text-box">
                            <div className="media ">
                              <div className="chat-text-box__photo ">
                                <img
                                  src="/img/author/1.jpg"
                                  className="align-self-start me-15 wh-46"
                                  alt="/img"
                                />
                              </div>
                              <div className="media-body">
                                <div className="chat-text-box__content">
                                  <div className="d-flex align-items-center ">
                                    <div className="chat-text-box__subtitle typing bg-lighters pe-30">
                                      <p className="color-light text-capitalize">
                                        typing...
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-footer ps-25 pe-15 pb-30 pt-20">
                        <div className="chat-type-text">
                          <div
                            className="pt-0 outline-0 pb-0 pe-0 ps-0 rounded-0 position-relative d-flex align-items-center"
                            tabIndex={-1}
                          >
                            <div className="d-flex justify-content-between align-items-center w-100 flex-wrap">
                              <div className="bg-lighters flex-1 d-flex align-items-center chat-type-text__write ms-0">
                                <a href="#">
                                  <img
                                    className="svg"
                                    src="/img/svg/smile.svg"
                                    alt="smile"
                                  />
                                </a>
                                <input
                                  className="form-control border-0 bg-transparent box-shadow-none"
                                  placeholder="Type your message..."
                                />
                              </div>
                              <div className="chat-type-text__btn">
                                <button
                                  type="button"
                                  className="border-0 bg-secondary wh-50 p-10 rounded-circle color-svgDF-white"
                                >
                                  <img
                                    className="svg"
                                    src="/img/svg/send.svg"
                                    alt="send"
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
        </div>
      </div>
    </div>
  );
}

export default PageDashboard;
