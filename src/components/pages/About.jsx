
export default function About() {
  return (
    <div>

      <div className="about-section">
        <h1>About Us</h1>
        <p>We are developing Software Engineers honing our skills with React.js.</p>
        <p>
          This project serves to showcase our learning of React by creating a simplified clone of the YouTube website. 
          This web application will allow you to watch videos based on any input you wish to search by using the YouTube API.
        </p>
      </div>

      <h2 className="center-text">Our Team</h2>

      <div className="row">

        <div className="column">
          <div className="card">
            <img src='https://ca.slack-edge.com/TCVA3PF24-U041NJ82RM0-22a6eba57651-512' alt='Jinseok' className="img" />
            <div className="about-container">
              <h2>Jinseok Jung</h2>
              <p className="title">Co-Creator</p>
              <p>
                Full-Stack Web Developer in the making. Interested in working on fun and interesting ideas.
              </p>
              <p>https://github.com/pjungjs</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="https://ca.slack-edge.com/TCVA3PF24-U0418081MQX-ea8c36aacfb8-512" alt="Diego" className="img" />
            <div className="about-container">
              <h2>Diego Carrero</h2>
              <p className="title">Co-Creator</p>
              <p>
                Developing Software Engineer with years of experience working as a Spanish Interpreter in the legal and medical fields.
                Passionate about turning ideas on paper into actionable projects through programming. 
              </p>
              <p>https://github.com/DiegoCarrero</p>
              <p>diegocar2413@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}