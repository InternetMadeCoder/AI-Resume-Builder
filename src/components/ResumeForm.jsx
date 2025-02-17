import { useState, useRef } from "react";
import { validateFormData } from "../utils/validation";
import {
  getValidationType,
  getFieldName,
  getEmptyItem,
} from "../utils/formHelpers";

const ResumeForm = ({ formData, onFormChange }) => {
  const [errors, setErrors] = useState({});
  const [animatingItems, setAnimatingItems] = useState(new Set());

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    const error = validateFormData(
      value,
      getValidationType(name),
      getFieldName(name)
    );

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    onFormChange("personalInfo", {
      ...formData.personalInfo,
      [name]: value,
    });
  };

  const handleRepeaterChange = (section, index, field, value) => {
    const newData = [...formData[section]];
    newData[index] = {
      ...newData[index],
      [field]: value,
    };
    onFormChange(section, newData);
  };

  const handleRemoveItem = (section, index) => {
    const itemKey = `${section}-${index}`;
    setAnimatingItems((prev) => new Set(prev).add(itemKey));

    // Wait for animation to complete before removing
    setTimeout(() => {
      onFormChange(
        section,
        formData[section].filter((_, i) => i !== index)
      );
      setAnimatingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemKey);
        return newSet;
      });
    }, 400); // matched with CSS transition duration
  };

  const handleAddItem = (section) => {
    const newData = [...formData[section], getEmptyItem(section)];
    onFormChange(section, newData);

    // Add animation class to the new item
    const itemKey = `${section}-${newData.length - 1}`;
    setAnimatingItems((prev) => new Set(prev).add(itemKey));

    setTimeout(() => {
      setAnimatingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(itemKey);
        return newSet;
      });
    }, 500); // matched with CSS animation duration
  };

  const getItemClassName = (section, index) => {
    const itemKey = `${section}-${index}`;
    const isAnimating = animatingItems.has(itemKey);
    return `cv-form-row ${isAnimating ? "removing" : ""} ${
      index === formData[section].length - 1 && isAnimating ? "adding" : ""
    }`;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onFormChange("personalInfo", {
          ...formData.personalInfo,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about-sc">
      <div className="container">
        <div className="about-cnt">
          <form className="cv-form" id="cv-form">
            {/* Personal Info Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>about section</h3>
              </div>
              <div className="cv-form-row cv-form-row-about">
                <div className="cols-3">
                  <div className="form-elem">
                    <label className="form-label">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      className="form-control firstname"
                      value={formData.personalInfo.firstName}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. John"
                    />
                    <span className="form-text"></span>
                  </div>
                  <div className="form-elem">
                    <label className="form-label">
                      Middle Name <span className="opt-text">(optional)</span>
                    </label>
                    <input
                      name="middleName"
                      type="text"
                      className="form-control middlename"
                      value={formData.personalInfo.middleName}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Herbert"
                    />
                    <span className="form-text"></span>
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      className="form-control lastname"
                      value={formData.personalInfo.lastName}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Doe"
                    />
                    <span className="form-text"></span>
                  </div>
                </div>

                <div className="cols-3">
                  <div className="form-elem">
                    <label className="form-label">Your Image</label>
                    <input
                      name="image"
                      type="file"
                      className="form-control image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Designation</label>
                    <input
                      name="designation"
                      type="text"
                      className="form-control designation"
                      value={formData.personalInfo.designation}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Sr.Accountants"
                    />
                    <span className="form-text"></span>
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="form-control address"
                      value={formData.personalInfo.address}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Lake Street-23"
                    />
                    <span className="form-text"></span>
                  </div>
                </div>

                <div className="cols-3">
                  <div className="form-elem">
                    <label className="form-label">Email</label>
                    <input
                      name="email"
                      type="text"
                      className="form-control email"
                      value={formData.personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. johndoe@gmail.com"
                    />
                    <span className="form-text"></span>
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Phone No:</label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control phoneno"
                      value={formData.personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. 456-768-798, 567.654.002"
                    />
                    <span className="form-text"></span>
                  </div>
                  <div className="form-elem">
                    <label className="form-label">Summary</label>
                    <input
                      name="summary"
                      type="text"
                      className="form-control summary"
                      value={formData.personalInfo.summary}
                      onChange={handlePersonalInfoChange}
                      placeholder="e.g. Doe"
                    />
                    <span className="form-text"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>achievements</h3>
              </div>
              <div className="row-separator repeater">
                {formData.achievements.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClassName("achievements", index)}
                  >
                    <div className="cols-2">
                      <div className="form-elem">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.title}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "achievements",
                              index,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "achievements",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => handleRemoveItem("achievements", index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem("achievements")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Experience Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>experience</h3>
              </div>
              <div className="row-separator repeater">
                {formData.experience.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClassName("experience", index)}
                  >
                    <div className="cols-3">
                      <div className="form-elem">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.title}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Organization</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.organization}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "organization",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.location}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "location",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="cols-3">
                      <div className="form-elem">
                        <label className="form-label">Start Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={item.startDate}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "startDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">End Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={item.endDate}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "endDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "experience",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => handleRemoveItem("experience", index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem("experience")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Education Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>education</h3>
              </div>
              <div className="row-separator repeater">
                {formData.education.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClassName("education", index)}
                  >
                    <div className="cols-3">
                      <div className="form-elem">
                        <label className="form-label">School</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.school}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "school",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Degree</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.degree}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "degree",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.city}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "city",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="cols-3">
                      <div className="form-elem">
                        <label className="form-label">Start Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={item.startDate}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "startDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Graduation Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={item.graduationDate}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "graduationDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "education",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => handleRemoveItem("education", index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem("education")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Projects Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>projects</h3>
              </div>
              <div className="row-separator repeater">
                {formData.projects.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClassName("projects", index)}
                  >
                    <div className="cols-3">
                      <div className="form-elem">
                        <label className="form-label">Project Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.title}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "projects",
                              index,
                              "title",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Project Link</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.link}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "projects",
                              index,
                              "link",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="form-elem">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          value={item.description}
                          onChange={(e) =>
                            handleRepeaterChange(
                              "projects",
                              index,
                              "description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => handleRemoveItem("projects", index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem("projects")}
                >
                  +
                </button>
              </div>
            </div>

            {/* Skills Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>skills</h3>
              </div>
              <div className="row-separator repeater">
                {formData.skills.map((item, index) => (
                  <div
                    key={index}
                    className={getItemClassName("skills", index)}
                  >
                    <div className="form-elem">
                      <label className="form-label">Skill</label>
                      <input
                        type="text"
                        className="form-control"
                        value={item.skill}
                        onChange={(e) =>
                          handleRepeaterChange(
                            "skills",
                            index,
                            "skill",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    {index > 0 && (
                      <button
                        type="button"
                        className="repeater-remove-btn"
                        onClick={() => handleRemoveItem("skills", index)}
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem("skills")}
                >
                  +
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResumeForm;
