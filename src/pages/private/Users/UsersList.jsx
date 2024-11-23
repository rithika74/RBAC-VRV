import React, { useContext, useState, useEffect } from "react";
import { ContextDatas } from "../../../services/Context";
import ModalForm from "./Components/ModalForm";
import Loader from "../../../components/Loader";
import { ApiCall } from "../../../services/ApiCall";


function UsersList() {
  const { mobileSide } = useContext(ContextDatas);
  const [pageLoading, setpageLoading] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelecteduser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [previousData, setpreviousData] = useState(null)

  const [pagination, setpagination] = useState({
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  useEffect(() => {
    const timer = setTimeout(() => {
      setpageLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [searchQuery, currentPage]);

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const trimmedQuery = searchQuery.trim();
      const response = await ApiCall("get", "/users", {}, {
        query: trimmedQuery,
        page: currentPage,
        limit: itemsPerPage,
      });
      if (response.status) {
        console.log(response);

        const filteredProducts = response?.message?.filter(product => {
          return (
            product?.name?.toLowerCase().includes(trimmedQuery?.toLowerCase()) ||
            product?.username?.toLowerCase().includes(trimmedQuery?.toLowerCase())
          );
        });
        setUsers(filteredProducts);
        setpagination({
          hasNextPage: response?.message?.data?.hasNextPage,
          hasPreviousPage: response?.message?.data?.hasPreviousPage,
        });
        setLoading(false)
      } else {
        console.log("Error in API response:", response);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleCheckboxChange = async (userId, newStatus) => {
    try {
      const response = await ApiCall("put", `/users/${userId}`, {
        isActive: newStatus,
      });
      console.log("API Response:", response);
      if (response.status) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === userId
              ? { ...user, isActive: newStatus }
              : user
          )
        );

      } else {
        console.log("Error updating user status:", response);
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };


  // EDIT PRODUCT FUNCTION
  const handleEdituser = (users) => {
    setpreviousData(users)
    setSelecteduser(users);
    setshowModal(true);
  };

  // ADD OR UPDATE PRODUCT FUNCTION
  const handleUpdate = async (userData) => {
    try {
      if (!userData.id) {
        const response = await ApiCall("post", "/users", userData);
        console.log("Add user API Response:", response);
      } else {
        const response = await ApiCall(
          "put",
          `/users/${userData.id}`,
          userData
        );
        console.log("Update user API Response:", response);
        console.log("updated successfully")
      }
      fetchUsers();
      setshowModal(false);
      setSelecteduser(null);
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  // DELETE PRODUCT API
  const handleDelete = async (userId) => {
    try {
      console.log('userid', userId);

      const response = await ApiCall("delete", `/users/${userId}`);
      if (response.status) {
        console.log("User deleted successfully");
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userId)
        );
        if (selectedUser && selectedUser.id === userId) {
          setSelecteduser(null);
        }
        setLoading(true)
        // Adjust current page if the last user on the current page is deleted
        if (users.length === 1 && currentPage > 1) {

          setCurrentPage(currentPage - 1);
        }
        setLoading(false)
      } else {
        console.log("Error deleting user:", response);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  const handleDeleteModalOpen = (user) => {
    setSelecteduser(user);
    setShowDeleteModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUsers();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
    const alphanumericRegex = /^[a-zA-Z0-9\s]*$/;
    if (!alphanumericRegex.test(query)) {
      setUsers([]);
    }
  };
  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      {pageLoading ? (
        <Loader />
      ) : (
        <div className={`contents  ${mobileSide ? "expanded" : ""}`}>
          <div className="container-fluid">
            <div className="row" style={{ marginTop: "7px" }}>
              <div className="col-lg-12">
                <div className="layout-button mt-0  justify-content-end mb-2">
                  <button type="button" className="btn btn-primary btn-default btn-squared px-30 mt-4"
                    onClick={() => {
                      setSelecteduser(null);
                      setshowModal(true);
                    }}>
                    Add New
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header color-dark fw-500">Users
                    <div className="project-search order-search  global-shadow mt-10">
                      <form onSubmit={handleSubmit} className="order-search__form">
                        <img src="img/svg/search.svg" alt="search" className="svg" />
                        <input className="form-control me-sm-2 border-0 box-shadow-none" type="text" placeholder="Search by Name, Username" aria-label="Search" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table4 p-25 mb-30">
                      <div className="table-responsive">
                        <table className="table table--default traffic-table body-px-25">
                          <thead>
                            <tr className="userDatatable-header">
                              <th>SI NO</th>
                              <th>Name </th>
                              <th>Username</th>
                              <th>Password</th>
                              <th>Role</th>
                              <th>Status</th>
                              <th className="text-end">Action</th>
                            </tr>
                          </thead>
                          {loading ? (
                            <tr>
                              <td colSpan="9">
                                <div className="spin-container text-center">
                                  <div className="dm-spin-dots spin-md">
                                    <span className="spin-dot badge-dot dot-primary"></span>
                                    <span className="spin-dot badge-dot dot-primary"></span>
                                    <span className="spin-dot badge-dot dot-primary"></span>
                                    <span className="spin-dot badge-dot dot-primary"></span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ) : (
                            <tbody>
                              {users?.length === 0 ? (
                                <tr>
                                  <td colSpan="6">
                                    <div className="dm-empty text-center p-5">
                                      <div className="dm-empty__image">
                                        <img src="img/svg/noitems.svg" alt="Admin Empty" />
                                      </div>
                                      <div className="dm-empty__text">
                                        <p class>No Items Found</p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ) : (users !== null && users?.map((item, index) => (
                                <tr>
                                  <td>{startIndex + index}</td>
                                  <td>{item.name}</td>
                                  <td>{item.username}</td>
                                  <td>{item.password}</td>
                                  <td>{item.role}</td>
                                  <td>
                                    <div className="form-check form-switch form-switch-primary form-switch-default">
                                      <input type="checkbox" checked={item.isActive}
                                        onChange={(e) =>
                                          handleCheckboxChange(
                                            item.id,
                                            e.target.checked
                                          )
                                        }
                                        className="form-check-input"
                                        id={`switch-${item.id}`}
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                                      <li>
                                        <a href="#" className="edit" onClick={(e) => { e.preventDefault(); handleEdituser(item) }} >
                                          <i className="uil uil-edit"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#" className="remove" onClick={(e) => { e.preventDefault(); handleDeleteModalOpen(item) }}>
                                          <i className="uil uil-trash-alt"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              )))}
                            </tbody>
                          )}
                        </table>
                      </div>
                      <div className="d-flex justify-content-end mt-30">
                        <nav className="dm-page ">
                          <ul className="dm-pagination d-flex">
                            <li className="dm-pagination__item">
                              {pagination?.hasPreviousPage && (
                                <button className="dm-pagination__link" onClick={() => handlePaginationClick(currentPage - 1)} >
                                  <i className="uil uil-angle-left-b"></i> Prev{" "}
                                </button>
                              )}
                            </li>
                            <li className="dm-pagination__item">
                              {pagination?.hasNextPage && (
                                <button className="dm-pagination__link" onClick={() => handlePaginationClick(currentPage + 1)}>
                                  Next <i className="uil uil-angle-right-b"></i>
                                </button>
                              )}
                            </li>
                            <li className="dm-pagination__option"></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      <ModalForm
        show={showModal}
        next={fetchUsers}
        previousData={previousData}
        onHide={() => {
          setshowModal(false);
          setSelecteduser(null);
        }}
        user={selectedUser}
        selectedUser={selectedUser}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}

      />
    </>
  );
}

export default UsersList;
