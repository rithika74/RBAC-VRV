# Role-Based Access Control (RBAC) User Interface

## Project Overview
This project is an **Admin Dashboard** for managing users and roles, utilizing **Role-Based Access Control (RBAC)**. The dashboard allows only users with the **Admin** role to access and modify user details, ensuring secure and controlled access. The user interface (UI) is built with **React.js** and showcases user data in a tabular format.

## Features
- **Admin Dashboard**: Accessible only by users with the "Admin" role.
- **User Management**: Admins can view, add, update, and delete users.
- **Role Management**: Users are assigned different roles such as **Admin**, **Editor**, and **Viewer**.
- **Mock API**: Uses **JSON Server** for simulating a backend API for storing and retrieving user data.
- **Responsive UI**: Built with **React.js** ensuring a smooth user experience across devices.

## Technologies Used
- **Frontend**: React.js
- **Mock API**: JSON Server (used for dummy data)
- **Styling**: CSS, and basic styling tools to enhance the UI
- **Deployment**: Vercel (for project deployment)

## Project Structure

```plaintext
├── public/
│   ├── css/                       # Global CSS files for styling
│   │   └── styles.css             # Main stylesheet
│   └── index.html                 # Main HTML template
├── src/
│   ├── components/                # Reusable components (buttons, tables, etc.)
│   ├── connection/                # Connection-related files (API, routes)
│   ├── contexts/                  # React contexts for managing global state
│   ├── layouts/                   # Layout components (Header, Sidebar, etc.)
│   ├── pages/                     # Pages (Dashboard, UserList, etc.)
│   ├── services/                  # API calls and utility functions
│   ├── utils/                     # Utility functions like validation, etc.
│   ├── App.js                     # Main application component
│   ├── index.js                   # Entry point for React
│   ├── RouterConnection.js        # Router management and PrivateRoute
│   └── App.css                    # Styles specific to App component
├── db.json                        # Mock data for JSON Server
├── package.json                   # NPM dependencies and scripts
├── README.md                      # This file
└── .gitignore                     # Files to be ignored by Git


## Clone Repository
git clone https://github.com/rithika74/RBAC-VRV.git
cd project-name
npm start

## Install dependencies
npm install

## Start the JSON Server (for mock data)
npm install -g json-server
json-server --watch db.json --port 5000
npm start

## Deployment


## How to Use
Admin Role: Admin users have full access to the dashboard. They can view, add, update, and delete users.
Editor/Viewer Roles: Users with roles such as Editor or Viewer have restricted access and cannot modify user details.
Login Flow: The system uses Role-Based Access Control (RBAC) to ensure only users with the "Admin" role can perform sensitive actions like editing user details.

