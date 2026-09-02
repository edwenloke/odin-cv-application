import "../styles/CV.css";

function CV({ submittedInfo, savedEducations, savedExperiences }) {
  return (
    <div className="cv">
      <div className="cv-preview">
        <section className="cv-general-info">
          {submittedInfo.name === "" ? (
            <h2>Your Name</h2>
          ) : (
            <h2>{submittedInfo.name}</h2>
          )}

          <ul className="email-phone">
            <li>{submittedInfo.email}</li>

            <li>{submittedInfo.phone}</li>
          </ul>
        </section>

        <section className="cv-education-info">
          <h2>Education</h2>
          {savedEducations.map((education) => {
            return (
              <div key={education.id} className="cv-education-card">
                <h4>{education.school}</h4>

                <p className="cv-study-title">{education.studyTitle}</p>

                <p className="cv-education-date">
                  {education.startDate} — {education.endDate}
                </p>
              </div>
            );
          })}
        </section>

        <section className="cv-experience-info">
          <h2>Professional Experience</h2>
          {savedExperiences.map((experience) => {
            return (
              <div key={experience.id} className="cv-experience-card">
                <h4>{experience.company}</h4>
                <p className="cv-position">{experience.position}</p>

                <p className="cv-experience-date">
                  {experience.startDate} — {experience.endDate}
                </p>

                <p className="cv-experience-description">
                  {experience.description}
                </p>
              </div>
            );
          })}
        </section>
      </div>
      <button className="print-btn" onClick={() => window.print()}>
        Print
      </button>
    </div>
  );
}

export default CV;
