import React from "react";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wrapper__inside">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <p>
                  <span>© 2024</span>
                  <a href="#">RBAC</a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-menu text-end">
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
