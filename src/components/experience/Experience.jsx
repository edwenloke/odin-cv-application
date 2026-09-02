import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

function Experience({ savedExperiences, setSavedExperiences }) {
  const createEmptyExperience = () => ({
    id: crypto.randomUUID(),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [experience, setExperience] = useState(createEmptyExperience);
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="experience">
      <h2>Experience</h2>

      {savedExperiences.length > 0
        ? savedExperiences.map((savedExperience) => {
            return (
              <div key={savedExperience.id} className="saved-experience-card">
                <ul className="saved-experience">
                  <li>Company: {savedExperience.company}</li>
                  <li>Position: {savedExperience.position}</li>
                  <li>
                    Date: {savedExperience.startDate} -{" "}
                    {savedExperience.endDate}
                  </li>
                  <li>Description: {savedExperience.description}</li>
                </ul>

                <span className="edit-delete-btn-container">
                  <button
                    className="edit-icon-btn"
                    type="button"
                    onClick={() => {
                      setIsAdding(false);
                      setIsEditing(true);
                      setExperience(savedExperience);
                    }}
                  >
                    ✎
                  </button>

                  <button
                    className="delete-icon-btn"
                    type="button"
                    onClick={() => {
                      setSavedExperiences(
                        savedExperiences.filter(
                          (experience) => experience.id !== savedExperience.id,
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
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}
          savedExperiences={savedExperiences}
          setSavedExperiences={setSavedExperiences}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}

      <button
        className="add-experience-btn"
        type="button"
        disabled={isAdding}
        hidden={isEditing}
        onClick={() => {
          setExperience(createEmptyExperience());
          setIsAdding(true);
        }}
      >
        Add Experience
      </button>
    </section>
  );
}

export default Experience;
