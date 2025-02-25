import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import PrintButton from "./components/PrintButton";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      image: null,
      designation: "",
      address: "",
      email: "",
      phone: "",
      summary: "",
    },
    achievements: [{ title: "", description: "" }],
    experience: [
      {
        title: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        school: "",
        degree: "",
        city: "",
        startDate: "",
        graduationDate: "",
        description: "",
      },
    ],
    projects: [{ title: "", link: "", description: "" }],
    skills: [{ skill: "" }],
  });

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleFormChange = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            image: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/builder" replace /> : <Landing />
          }
        />
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate to="/builder" replace />
            ) : (
              <SignIn onSuccess={handleAuthSuccess} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/signin" replace /> : <SignUp />
          }
        />
        <Route
          path="/builder"
          element={
            !isAuthenticated ? (
              <Navigate to="/signin" replace />
            ) : (
              <div className="container">
                <ResumeForm
                  formData={formData}
                  onFormChange={handleFormChange}
                />
                <ResumePreview data={formData} />
                <PrintButton onPrint={handlePrint} />
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
