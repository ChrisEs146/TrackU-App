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
  } else if (value > 0 && value < 40) {
    return "#FD841F";
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

// INPUT FORM RELATED
/**
 * Test the validity of an input value against a regular
 * expression.
 *
 * **Type**: Could be an email, password or title.
 *
 * **InputValue**: Input value to be tested.
 * @param {string} type Email | Password | Title
 * @param {string} inputValue Input value to be tested
 * @returns boolean
 */
export const isInputValid = (type, inputValue) => {
  const validFullName = new RegExp("^(?=\\S)[A-Za-z0-9 ]{4,}$");
  const validTitle = new RegExp("^(?=\\S)[A-Za-z0-9,. ]{4,50}$");
  const validPassword = new RegExp(
    "^(?=\\S)(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#%^&*])[a-zA-Z0-9!@#%^&*]{8,20}$"
  );

  if (type.toLowerCase() === "fullname") return validFullName.test(inputValue);
  if (type.toLowerCase() === "password") return validPassword.test(inputValue);
  if (type.toLowerCase() === "title") return validTitle.test(inputValue);
};
