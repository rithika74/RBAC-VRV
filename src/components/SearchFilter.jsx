import React from "react";

function SearchFilter() {
  return (
    <div className="row mt-3">
      <div className="col-lg-12">
        <div className="card card-default card-md mb-4">
          <div className="card-header">
            <h6>Filter</h6>
          </div>
          <div className="card-body py-md-25">
            <form action="#">
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="a4"
                      className="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      One of Four Columns
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-light radius-xs b-light px-15"
                      id="a4"
                      placeholder="One of Four Columns"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="a5"
                      className="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      One of Four Columns
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-light radius-xs b-light px-15"
                      id="a5"
                      placeholder="One of Four Columns"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="a6"
                      className="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      One of Four Columns
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-light radius-xs b-light px-15"
                      id="a6"
                      placeholder="One of Four Columns"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="a7"
                      className="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      One of Four Columns
                    </label>
                    <input
                      type="text"
                      className="form-control ih-medium ip-light radius-xs b-light px-15"
                      id="a7"
                      placeholder="One of Four Columns"
                    />
                  </div>
                </div>
                <div class="layout-button mt-0  justify-content-end">
                  <button
                    type="button"
                    class="btn btn-default btn-squared btn-light px-20 "
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-default btn-squared px-30"
                  >
                    save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
