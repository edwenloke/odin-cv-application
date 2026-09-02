import { useState } from "react";

function GeneralInformation({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  setSubmittedInfo,
}) {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <section className="personal-info">
      <h2>Personal Information</h2>

      <form
        className="personal-info-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmittedInfo({ name, email, phone });
          setIsEditing(false);
        }}
      >
        <div className="name-container">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="email-container">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            disabled={!isEditing}
          />
        </div>
        <div className="phone-container">
          <label htmlFor="phone">Phone </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            required
            onChange={(event) => setPhone(event.target.value)}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="submit-btn" type="submit">
            Submit
          </button>
        ) : (
          <button
            className="general-info-edit-btn"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
      </form>
    </section>
  );
}

export default GeneralInformation;
