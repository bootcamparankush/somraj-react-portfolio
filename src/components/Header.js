import React from "react";

const styles = {
  headerStyle: {
    marginTop: "5px",
    borderRadius: "5px 5px 0 0 ",
    color: "white",
    background: "#222831",
    opacity: "0.9",
    padding: "10px 10px 0px 20px ",
  },
  nameStyle: {
    margin: "0",
  },
};

function Header() {
  return (
    <header className=" container">
      <div style={styles.headerStyle}>
        <h2 style={styles.nameStyle}>Parankush Somraj</h2>
      </div>
    </header>
  );
}

export default Header;