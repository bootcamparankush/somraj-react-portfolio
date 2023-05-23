import React from "react";
// Custom CSS Style
const styles = {
  footerStyle: {
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222831",
    opacity: "0.9",
    borderRadius: " 5px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  linkStyle: {
    padding: "0px 10px 0px  10px ",
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
  },
};
function Footer() {
  return (
    <footer className="footer container">
      <div style={styles.footerStyle}>
        <a style={styles.linkStyle} href="https://github.com/bootcamparankush ">
          <i className="bi-github contact-me-icons"></i>
        </a>
        <a style={styles.linkStyle} href="https://www.linkedin.com/in/parankush-somraj-6b372b1/">
          <i className="bi bi-linkedin"></i>
        </a>
        <a style={styles.linkStyle} href="https://twitter.com/">
          <i className="bi-twitter contact-me-icons"></i>
        </a>
        <a style={styles.linkStyle} href="mailto:parankush.somraj@gmail.com">
          <i className="bi-envelope-at contact-me-icons"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;