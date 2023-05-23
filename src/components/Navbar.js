import React from "react";
// Custom CSS Style
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
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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