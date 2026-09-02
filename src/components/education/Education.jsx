import { useState } from "react";
import EducationForm from "./EducationForm";

function Education({ savedEducations, setSavedEducations }) {
  function createEducation() {
    return {
      id: crypto.randomUUID(),
      school: "",
      studyTitle: "",
      startDate: "",
      endDate: "",
    };
  }

  const [education, setEducation] = useState(createEducation());
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="education">
      <h2>Education</h2>

      {savedEducations.length > 0
        ? savedEducations.map((education) => {
            return (
              <div key={education.id} className="saved-education-card">
                <ul className="saved-education">
                  <li>School: {education.school}</li>
                  <li>Title of Study: {education.studyTitle}</li>
                  <li>
                    Date: {education.startDate} — {education.endDate}
                  </li>
                </ul>

                <span className="edit-delete-btn-container">
                  <button
                    className="edit-icon-btn"
                    onClick={() => {
                      setIsAdding(false);
                      setIsEditing(true);
                      setEducation(education);
                    }}
                  >
                    ✎
                  </button>

                  <button
                    className="delete-icon-btn"
                    onClick={() => {
                      setSavedEducations(
                        savedEducations.filter(
                          (savedEducation) =>
                            savedEducation.id !== education.id,
                        ),
                      );
                      setIsEditing(false);
                    }}
                  >
                    🗑
                  </button>
                </span>
              </div>
            );
          })
        : null}

      {(isAdding || isEditing) && (
        <EducationForm
          education={education}
          setEducation={setEducation}
          savedEducations={savedEducations}
          setSavedEducations={setSavedEducations}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}

      <button
        className="add-education-btn"
        type="button"
        disabled={isAdding}
        hidden={isEditing}
        onClick={() => {
          setEducation(createEducation());
          setIsAdding(true);
        }}
      >
        Add Education
      </button>
    </section>
  );
}

export default Education;
