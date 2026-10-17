


function MyCard({ intro, passion, collage, field, image }) {

  return (
    <div className="card">

      <img
        src={image} alt={"picture"} 
        className="profile-img"
      />

      <h1>{intro}</h1>

      <h3>{passion}</h3>

      <div className="education">
        <span>🎓</span>

        <div>
          <h3>{field}</h3>
          <p>{collage}</p>
        </div>
      </div>

      <hr />

      <h2>Skills</h2>

      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Git & GitHub</span>
        <span>Responsive Design</span>
      </div>

      <button>📄 View My CV</button>

    </div>


  );
}

export default MyCard;