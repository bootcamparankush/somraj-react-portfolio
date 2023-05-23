import React from "react";

// Custom CSS Style
const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.8",
    color: "white",
    paddingBottom: "50px",
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    margin: "10px",
  },
};

export default function Resume() {
  return (
    <div>
      <div className="card-footer">
          <i className="bi bi-arrow-down-circle-fill"></i>
          <a
            style={styles.linkStyle}
            href="./assets/psomraj_resume.pdf"
            download
          >
            Click to download my resume
          </a>
        </div>
      <div className="card" style={styles.cardBodyStyle}>
        <h4 className="card-header">Proficiencies</h4>
        <div className="card-body">
          <ul>
            <li>HTML, CSS, Bootstrap</li>
            <li>Javascript</li>
            <li>Nodejs</li>
            <li>React</li>
            <li>My SQL, MongoDB, IndexDB, GraphQL</li>
            <li> MVC, MERN</li>
            </ul>                  
        </div>
      </div>
    </div>
  );
}