import { useState } from "react";
import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import PrintButton from "./components/PrintButton";
import "./App.css";

function App() {
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
    <>
      <Navbar />
      <div className="container">
        <ResumeForm formData={formData} onFormChange={handleFormChange} />
        <ResumePreview data={formData} />
        <PrintButton onPrint={handlePrint} />
      </div>
    </>
  );
}

export default App;
