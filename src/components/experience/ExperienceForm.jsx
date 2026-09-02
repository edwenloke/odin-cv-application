function ExperienceForm({
  experience,
  setExperience,
  savedExperiences,
  setSavedExperiences,
  isAdding,
  setIsAdding,
  isEditing,
  setIsEditing,
}) {
  return (
    <form
      className="experience-form"
      onSubmit={(e) => {
        e.preventDefault();

        if (isAdding) {
          setSavedExperiences([...savedExperiences, experience]);
        }

        if (isEditing) {
          setSavedExperiences(
            savedExperiences.map((savedExperience) =>
              savedExperience.id === experience.id
                ? experience
                : savedExperience,
            ),
          );
        }

        setIsAdding(false);
        setIsEditing(false);
      }}
    >
      <div className="company-container">
        <label htmlFor="company">Company </label>
        <input
          type="text"
          id="company"
          required
          value={experience.company}
          onChange={(e) => {
            setExperience({
              ...experience,
              company: e.target.value,
            });
          }}
        />
      </div>

      <div className="position-container">
        <label htmlFor="position">Position </label>
        <input
          type="text"
          id="position"
          required
          value={experience.position}
          onChange={(e) => {
            setExperience({
              ...experience,
              position: e.target.value,
            });
          }}
        />
      </div>

      <div className="experience-start-container">
        <label htmlFor="experience-start">Start Date </label>
        <input
          type="date"
          id="experience-start"
          required
          value={experience.startDate}
          onChange={(e) => {
            setExperience({
              ...experience,
              startDate: e.target.value,
            });
          }}
        />
      </div>

      <div className="experience-end-container">
        <label htmlFor="experience-end">End Date </label>
        <input
          type="date"
          id="experience-end"
          required
          value={experience.endDate}
          onChange={(e) => {
            setExperience({
              ...experience,
              endDate: e.target.value,
            });
          }}
        />
      </div>

      <div className="description-container">
        <label htmlFor="description">Description </label>
        <textarea
          id="description"
          required
          value={experience.description}
          onChange={(e) => {
            setExperience({
              ...experience,
              description: e.target.value,
            });
          }}
        />
      </div>

      {isAdding && (
        <button className="submit-btn" type="submit">
          Submit
        </button>
      )}

      {isEditing && (
        <div className="save-cancel-btn-container">
          <button className="save-btn" type="submit">
            Save Changes
          </button>

          <button
            className="cancel-btn"
            type="button"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </form>
  );
}

export default ExperienceForm;
