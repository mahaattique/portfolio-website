function Skill({ source, alt, title }) {
    return (
      <div className="skill-box">
        <img src={source} alt={alt} title={title} className="skill-icon" />
      </div>
    );
  }
  
  export default Skill;
  