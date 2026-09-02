import "./App.css";
import "./styles/Forms.css";
import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import CV from "./components/CV";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [submittedInfo, setSubmittedInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [savedEducations, setSavedEducations] = useState([]);
  const [savedExperiences, setSavedExperiences] = useState([]);

  return (
    <>
      <h1>CV Generator</h1>

      <main>
        <div className="left-panel">
          <GeneralInformation
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            setSubmittedInfo={setSubmittedInfo}
          />

          <Education
            savedEducations={savedEducations}
            setSavedEducations={setSavedEducations}
          />

          <Experience
            savedExperiences={savedExperiences}
            setSavedExperiences={setSavedExperiences}
          />
        </div>

        <div className="right-panel">
          <CV
            submittedInfo={submittedInfo}
            savedEducations={savedEducations}
            savedExperiences={savedExperiences}
          />
        </div>
      </main>
    </>
  );
}

export default App;
