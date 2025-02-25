import { useState } from "react";
import "../styles/CareerCoach.css";

const careerAdvice = {
  "Software Development":
    "Focus on mastering data structures, algorithms, and system design. Work on real-world projects and contribute to open-source.",
  "Data Science":
    "Strengthen your statistics and machine learning knowledge. Work with Python, R, and SQL, and build projects using real-world datasets.",
  Cybersecurity:
    "Learn networking fundamentals, ethical hacking, and risk management. Get certifications like CEH or CISSP.",
  "UI/UX Design":
    "Master tools like Figma and Adobe XD. Focus on user psychology and usability principles.",
  "Cloud Computing":
    "Gain expertise in AWS, Azure, or Google Cloud. Understand containerization and serverless computing.",
};

const AICareerCoach = () => {
  const [selectedField, setSelectedField] = useState("");
  const [advice, setAdvice] = useState("");

  const handleGetAdvice = () => {
    if (selectedField && careerAdvice[selectedField]) {
      setAdvice(careerAdvice[selectedField]);
    } else {
      setAdvice("Please select a valid career path.");
    }
  };

  return (
    <section className="career-coach-section">
      <div className="career-coach-content">
        <div className="chat-container">
          <div className="chat-box">
            <div className="chat-message">
              <div className="bot-avatar">
                <img src="/bot-avatar.png" alt="AI Coach" />
              </div>
              <div className="message-content">
                <p>Hi! I'm your AI Career Coach. How can I assist you today?</p>
              </div>
            </div>
            {advice && (
              <div className="chat-message">
                <div className="bot-avatar">
                  <img src="/bot-avatar.png" alt="AI Coach" />
                </div>
                <div className="message-content">
                  <p>{advice}</p>
                </div>
              </div>
            )}
          </div>
          <div className="chat-input">
            <select
              className="form-control"
              onChange={(e) => setSelectedField(e.target.value)}
              value={selectedField}
            >
              <option value="">Select Your Career Path</option>
              {Object.keys(careerAdvice).map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
            <button onClick={handleGetAdvice} className="btn btn-primary">
              Get Advice
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICareerCoach;
