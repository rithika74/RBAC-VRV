import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { ApiCall } from "../../../../services/ApiCall";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

export default function ModalForm({ show, onHide, next, user, selectedUser, onUpdate, onDelete, showDeleteModal, setShowDeleteModal, previousData }) {

  const initialFormData = {
    name: "",
    username: "",
    password: "",
    role: "",
    status: "inactive",
    isActive: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const style = {
    control: (base) => ({
      ...base,
      height: '48px !important',
      borderColor: '#E3E6EF !important',
      '&:focus': {
        borderColor: '#DB060 !important',
        boxShadow: 'none !important',
      },
      '&:hover': {
        borderColor: '#DB060 !important',
        boxShadow: 'none !important',
      },
      '&:focus-within': {
        border: 'none !important',
        borderColor: '#DB060A !important',
        boxShadow: '0 0 0 1px #DB060A !important',
      },
    }),
    option: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#E3E6EF' : '#E3E6EF',
      boxShadow: state.isFocused ? '0 0 ' : null,
      '&:hover': {
        borderColor: state.isFocused ? '#E3E6EF' : '#E3E6EF',
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#DC060A ' : '#fff',
      color: state.isSelected ? '#FFF' : '#495057',
      fontSize: '14px',
    }),
    placeholder: (defaultStyles, state) => ({
      ...defaultStyles,
      fontSize: '14px',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '14px',
    }),
    menuItemSelected: (provided) => ({
      ...provided,
      backgroundColor: '#DC060A',
      color: '#FFF',
    }),
    // Add more custom styles as needed
  };

  useEffect(() => {
    if (!show) return;

    const isUser = !user && !selectedUser;
    const status = isUser ? "inactive" : selectedUser?.isActive ? "active" : "inactive";

    setFormData({
      name: isUser ? "" : selectedUser.name || "",
      username: isUser ? "" : selectedUser.username || "",
      password: isUser ? "" : selectedUser.password || "",
      role: isUser ? "" : selectedUser.role || "",
      status: isUser ? status : user.status || status,
      isActive: isUser ? false : selectedUser.isActive || false,
    });
  }, [show, user, selectedUser]);

  const handleDeleteConfirm = async () => {
    setLoading(true)
    try {
      const response = await ApiCall("delete", `/users/${user.id}`);
      if (response.status) {
        console.log("User deleted successfully");
        toast.success("User deleted successfully!");
        onDelete(user.id);
        setShowDeleteModal(false);
        next();
      } else {
        console.log("Error deleting user:uuu", response);
        toast.error("Error deleting user!");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user!");
    }
    setLoading(false)
  };

  const handleUserSave = async () => {
    try {
      const newUser = {
        ...formData,
        role: "Viewer",
      };
      if (user) {
        const updatedUser = {
          ...user,
          ...formData,
        };
        // Changes have been made
        const changes = {};
        const keysToCheck = ["role", "username", "password", "isActive", "name"];

        for (const key of keysToCheck) {
          if (previousData[key] !== formData[key]) {
            changes[key] = formData[key];
          }
        }

        if (!Object.keys(changes).length) {
          toast.warning("No changes made!");
          return
        }
        const response = await ApiCall("put", `/users/${user.id}`, updatedUser);
        if (response.status) {
          onUpdate(updatedUser);
          onHide();
          setValidated(false);
          toast.success("User updated successfully!");
        } else {
          console.log("Error updating user:", response);
          toast.error("Error updating user!");
        }

      } else {
        const response = await ApiCall("post", "/users", newUser);
        if (response.status) {
          onHide();
          setFormData(initialFormData);
          next();
          setValidated(false);
          toast.success("User added successfully!");
        } else {
          console.log("Error adding user:", response);
          toast.error("Error adding user!");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUserSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    setLoading(true);
    try {
      await handleUserSave();
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formData[name] === value) {
      return; // No need to update the state if the value hasn't changed
    }
    const inputValue = value
    const isSpace = inputValue.indexOf(" ") === 0;
    if (isSpace) {
      setFormData((prevData) => ({ ...prevData, [name]: inputValue.substring(1) }));
    }
    else {
      setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
    }

  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      status: value,
      isActive: value === "active",
    }));
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


  return (
    <>

      <Modal show={show} onHide={onHide} size="lg" centered>
        <Form noValidate validated={validated} onSubmit={handleUserSubmit}>
          <Modal.Header closeButton onHide={() => {
            setFormData(initialFormData);
            setValidated(false);
          }}>
            <Modal.Title>{user ? "Edit User" : "Add User"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="name" className="il-gray fs-14 fw-500 align-center mb-10">Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className={`form-control ih-medium ip-light radius-xs b-light px-15`}
                      required
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid"> Please add name</Form.Control.Feedback>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="username" className="il-gray fs-14 fw-500 align-center mb-10">Username</label>
                  <input type="text" className="form-control ih-medium ip-light radius-xs b-light px-15" required id="username" name="username" value={formData.username} onChange={handleInputChange} />
                  <Form.Control.Feedback type="invalid"> Please add username</Form.Control.Feedback>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="password" className="il-gray fs-14 fw-500 align-center mb-10">Password</label>
                  <input type="password" className="form-control ih-medium ip-light radius-xs b-light px-15" required id="password" name="password" value={formData.password} onChange={handleInputChange} />
                  <Form.Control.Feedback type="invalid"> Please add password</Form.Control.Feedback>
                </div>
              </div>
              {/* <select name="roles" id="roles" className="form-control ih-medium ip-light radius-xs b-light px-15" required>
                    <option value="">Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                    <option value="viewer">Viewer</option>
                  </select> */}
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="role" className="il-gray fs-14 fw-500 align-center mb-10">Role</label>
                  <Select
                    value={
                      formData.role
                        ? { value: formData.role, label: capitalize(formData.role) } // Ensure the value is an object
                        : null
                    }
                    onChange={(selectedOption) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        role: selectedOption ? selectedOption.value : '', // Update `role` in formData
                      }))
                    }
                    options={[
                      { value: '', label: 'All' },
                      { value: 'admin', label: 'Admin' },
                      { value: 'editor', label: 'Editor' },
                      { value: 'viewer', label: 'Viewer' },
                    ]}
                    isClearable
                    isSearchable
                    name="type"
                    styles={style}
                    className="selectbox ih-medium ip-light radius-xs"
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary25: '#f5f5f5',
                        primary: 'black',
                        primary50: "#f5f5f5",
                      },
                    })}
                  />

                  <Form.Control.Feedback type="invalid"> Please select role</Form.Control.Feedback>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="status" className="il-gray fs-14 fw-500 align-center mb-10">Status</label>
                  <div className="radio-theme-default custom-radio">
                    <input className="radio" type="radio" name="status" value="inactive" checked={formData.status === "inactive"} onChange={handleStatusChange} id="radio-inactive" />
                    <label htmlFor="radio-inactive">
                      <span className="radio-text">Inactive</span>
                    </label>
                    <input className="radio" type="radio" name="status" value="active" checked={formData.status === "active"} onChange={handleStatusChange} id="radio-active" />
                    <label htmlFor="radio-active" style={{ marginLeft: "10px" }}>
                      <span className="radio-text">Active</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-default btn-squared btn-light px-20" type="button"
              onClick={() => {
                onHide();
                setFormData(initialFormData);
                setValidated(false)
              }}>
              Cancel
            </button>
            <button className="btn btn-primary btn-default btn-squared px-30" type="submit" disabled={loading}>
              {loading ? "Saving..." : (user ? "Update" : "Save")}
            </button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
        }}
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <button disabled={loading} className="btn btn-default btn-squared btn-light px-20" onClick={() => setShowDeleteModal(false)}>
            No
          </button>
          <button className="btn btn-danger btn-squared px-30" onClick={handleDeleteConfirm} disabled={loading}>
            {loading ? "Deleting..." : "Yes"}
          </button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
}
