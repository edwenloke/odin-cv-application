function EducationForm({
  education,
  setEducation,
  savedEducations,
  setSavedEducations,
  isAdding,
  setIsAdding,
  isEditing,
  setIsEditing,
}) {
  return (
    <form
      className="education-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (isAdding) {
          setSavedEducations([...savedEducations, education]);
        }

        if (isEditing) {
          setSavedEducations(
            savedEducations.map((savedEducation) =>
              savedEducation.id === education.id ? education : savedEducation,
            ),
          );
        }
        setIsAdding(false);
        setIsEditing(false);
      }}
    >
      <div className="school-container">
        <label htmlFor="school">School </label>
        <input
          type="text"
          id="school"
          required
          value={education.school}
          onChange={(e) => {
            setEducation({ ...education, school: e.target.value });
          }}
        />
      </div>

      <div className="study-title-container">
        <label htmlFor="study-title">Title of Study </label>
        <input
          type="text"
          id="study-title"
          required
          value={education.studyTitle}
          onChange={(e) => {
            setEducation({ ...education, studyTitle: e.target.value });
          }}
        />
      </div>

      <div className="study-start-container">
        <label htmlFor="study-start">Start Date </label>
        <input
          type="date"
          id="study-start"
          required
          value={education.startDate}
          onChange={(e) => {
            setEducation({ ...education, startDate: e.target.value });
          }}
        />
      </div>

      <div className="study-end-container">
        <label htmlFor="study-end">End Date </label>
        <input
          type="date"
          id="study-end"
          required
          value={education.endDate}
          onChange={(e) => {
            setEducation({ ...education, endDate: e.target.value });
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

export default EducationForm;
