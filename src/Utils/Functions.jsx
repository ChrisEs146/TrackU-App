// COLOR RELATED
/**
 * Analyzes progress value and returns a color based on said value.
 * @param {number} value
 * @returns Hex code to change the progress number's color
 * according to the project's progress.
 */
export const getProgressColor = (value) => {
  if (value >= 80 && value <= 100) {
    return "#3EC70B";
  } else if (value >= 40 && value < 80) {
    return "#3120E0";
  }

  return "#c21010";
};

// DATE RELATED
/**
 * Formats a given date and returns it as a string with the format
 * month/day/year.
 * @param {string} date
 * @returns Formatted date in m/d/y
 */
export const getShortDate = (date) => {
  const finalDate = new Date(date).toLocaleString("default", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return finalDate;
};

// TEXT RELATED
/**
 * Returns an object with the necessary information
 * to create a modal confirmation window.
 * @param {string} type Project | Update | User
 * @param {boolean} editMode true | false
 * @param {string} action Confirm | Delete
 * @returns Object with information to create a modal confirmation window.
 */
export const getModalData = (type, editMode, action = "confirm") => {
  let message;
  if (type === "User" && action.toLowerCase() === "confirm") {
    message =
      "You are about to update your account. If you want to proceed click confirm, otherwise cancel this operation";
  } else if (type === "User" && action.toLowerCase() === "delete") {
    message =
      "You are about to delete your account. If you want to proceed click delete, otherwise cancel this operation.";
  } else if ((type === "Project" || type === "Update") && action.toLowerCase() === "confirm") {
    message = `You are about to ${
      editMode ? "update this" : "add a new"
    } ${type.toLowerCase()}. If you want to proceed click confirm, otherwise cancel this operation.`;
  } else if ((type === "Project" || type === "Update") && action.toLowerCase() === "delete") {
    message = `You are about to delete this ${type.toLowerCase()}. If you want to proceed click delete, otherwise cancel this operation.`;
  } else {
    message = "Invalid description";
  }

  const modalData = {
    title: action.toLowerCase() === "confirm" ? "ARE YOU SURE?" : "WARNING!",
    action: action.toLowerCase(),
    description: message,
  };
  return modalData;
};
