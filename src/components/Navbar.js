import React from "react";

const styles = {
  navbarStyle: {
    marginBottom: "5px",
    background: "#222831",
    opacity: "0.9",
    borderRadius: "0 0 5px 5px",
    paddingBottom: "5px",
  },
  linkStyle: {
    padding: "0px 10px 0 0",
    marginLeft: "20px",
    color: "white",
  },
};

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav
      style={styles.navbarStyle}
      className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm "
    >
      <div className="nav-item">
        <a
          style={styles.linkStyle}
          href="#about"
          onClick={() => handlePageChange("About")}
                    className={
            currentPage === "About"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          About Me
        </a>
      </div>
      <div className="nav-item">
        <a
          style={styles.linkStyle}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
         
          className={
            currentPage === "Portfolio"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Portfolio
        </a>
      </div>
      <div className="nav-item">
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
                    className={
            currentPage === "Contact"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Contact
        </a>
      </div>
      <div className="nav-item">
        <a
          style={styles.linkStyle}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
                    className={
            currentPage === "Resume"
              ? "nav-link active"
              : "nav-link link-secondary"
          }
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;