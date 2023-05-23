import React from "react";
// Custom CSS Style
const styles = {
  linkStyle: {
    padding: "0 20px 0px 0",
    display: "inline-flex",
    textDecoration: "none",
  },
  containerStyle: {
    padding: "20px",
    background: "#222831",
    opacity: "0.9",
    color: "white",
    borderRadius: "5px ",
    paddingBottom: "50px",
  },
  cardHeaderStyle: {
    padding: "10px",
    color: "#222831",
  },
  cardBodyStyle: {
    color: "#222831",
  },
  cardFooterStyle: {
    display: "flex",
    justifyContent: "center",
  },
};

export default function Portfolio() {
  return (
    <div style={styles.containerStyle}>
      <h4>Portfolio</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* cards */}
        <article className="col">
          <div className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Project Nexus
            </h5>
            <a
              style={styles.linkStyle}
              href="https://project-nexus.herokuapp.com/"
            >
              <img
                src="./assets/images/project-nexus.jpg"
                className="img-thumbnail"
                alt="Project Nexus"
              />
            </a>
            <div className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                Project Nexus is built with a team of four for Project 2
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://project-nexus.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/arlindo2017/project-nexus"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div style={styles.cardStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Tech Blog
            </h5>
            <a href="https://somraj-techblog.herokuapp.com/">
              <img
                src="./assets/images/tech-blog.jpg"
                className="img-thumbnail"
                alt="Tech Blog"
              />
            </a>
            <div style={styles.cardStyle} className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                Tech Blog Web application
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://somraj-techblog.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/bootcamparankush/somraj-techblog"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Quotes Translator
            </h5>
            <a href="https://tneiman19.github.io/Rutgers-Project1/">
              <img
                src="./assets/images/quote_trasnlator.gif"
                className="img-thumbnail"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                Third party API application build along with two other team members for Project 1.
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://tneiman19.github.io/Rutgers-Project1/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/tneiman19/Rutgers-Project1"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        {/* weather app */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Weather Dashboard
            </h5>
            <a href="https://bootcamparankush.github.io/somraj-weather-dashboard/">
              <img
                src="./assets/images/weather-app.jpg"
                className="img-thumbnail"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                In this weather dashboard application you can see the current
                weather along with the forecast for the next 5 days for a
                specific US city. After searching for a specific city, that city
                is added to the search history for future reference.
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://bootcamparankush.github.io/somraj-weather-dashboard/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/bootcamparankush/somraj-weather-dashboard"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        {/* code quizz */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              JavaScript Quiz
            </h5>
            <a href="https://bootcamparankush.github.io/somraj-code-quiz-challenge/">
              <img
                src="./assets/images/javascript_quiz.jpg"
                className="img-thumbnail"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                In this quiz, you will be asked 10 random beginner javascript
                questions to test your knowledge. Game starts with 100 seconds
                on the clock (10 seconds per question) if you answered them
                incorrectly 10 seconds will be removed from the timer, at the
                end of the Quiz you can save your initials and score. If the
                clock runs out, you loose the game.
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://bootcamparankush.github.io/somraj-code-quiz-challenge/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/bootcamparankush/somraj-code-quiz-challenge"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
        {/* Note Taker */}
        <article className="col">
          <div style={styles.linkStyle} className="card h-100">
            <h5 style={styles.cardHeaderStyle} className="card-title">
              Note Taker
            </h5>
            <a href="https://hidden-castle-76230.herokuapp.com/">
              <img
                src="./assets/images/note_taker_app.jpg"
                className="img-thumbnail"
                alt="Screen capture of Portfolio website"
              />
            </a>
            <div className="card-body">
              <p className="card-text" style={styles.cardBodyStyle}>
                Note Taker
              </p>
            </div>
            <div style={styles.cardFooterStyle} className="card-footer">
              <a
                style={styles.linkStyle}
                href="https://hidden-castle-76230.herokuapp.com/"
                className="link-secondary"
              >
                Website
              </a>
              <a
                style={styles.linkStyle}
                href="https://github.com/bootcamparankush/somraj-note-taker"
                className="link-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}