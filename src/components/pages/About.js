import React from "react";

const styles = {
  cardBodyStyle: {
    padding: "10px",
    background: "#222831",
    opacity: "0.9",
    color: "lightblue",
    paddingBottom: "50px",
  },
};

export default function About() {
  return (
    <div className="card" style={styles.cardBodyStyle}>
      <h4 className="card-header">About me</h4>
      <div className="card-body">
        <img
          className="img-thumbnail"
          src="./assets/images/myprofilepicture.jpg"
          alt="My Profile"
        />
        <hr />
        <p>
        As an aspiring web developer, I am thrilled to embark on my journey in the development field, leveraging my current experience as a SAP Analyst. Currently, I am enrolled in the Rutgers coding bootcamp, where I am honing my skills in HTML, CSS, Javacript, MySQL, MongoDB etc and various other web development tools. Through engaging in-class mini-projects and weekly challenges, I have been actively applying and reinforcing my knowledge. With a strong aptitude for rapid learning and a high level of motivation, I eagerly anticipate acquiring new skills and expanding my expertise as I progress through the Rutgers bootcamp.
        </p>
      </div>
    </div>
  );
}