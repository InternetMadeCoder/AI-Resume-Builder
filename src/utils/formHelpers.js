export const getValidationType = (fieldName) => {
  switch (fieldName) {
    case "firstName":
    case "lastName":
      return "TEXT";
    case "middleName":
      return "TEXT_EMP";
    case "email":
      return "EMAIL";
    case "phone":
      return "PHONENO";
    default:
      return "ANY";
  }
};

export const getFieldName = (field) => {
  return field.split(/(?=[A-Z])/).join(" ");
};

export const getEmptyItem = (section) => {
  switch (section) {
    case "achievements":
      return { title: "", description: "" };
    case "experience":
      return {
        title: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      };
    case "education":
      return {
        school: "",
        degree: "",
        city: "",
        startDate: "",
        graduationDate: "",
        description: "",
      };
    case "projects":
      return { title: "", link: "", description: "" };
    case "skills":
      return { skill: "" };
    default:
      return {};
  }
};
