
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

      <h2>Our Team</h2>

      <div className="row">

        <div className="column">
          <div className="card">
            <img src='' alt='Jinseok' />
            <div className="container">
              <h2>Jinseok Jung</h2>
              <p className="title">Co-Creator</p>
              <p>Text that describes Jinseok.</p>
              <p>pjungjs@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="" alt="Diego" />
            <div className="container">
              <h2>Diego Carrero</h2>
              <p className="title">Co-Creator</p>
              <p>
                I am a developing Software Engineer with years of experience working as a Spanish Interpreter in the legal and medical fields.
                I am passionate about turning ideas on paper into actionable projects through programming, and my hobbies include playing pickleball, basketball and weight training. 
              </p>
              <p>diegocar2413@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}