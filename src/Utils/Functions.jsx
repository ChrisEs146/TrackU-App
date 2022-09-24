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
  const finalDate = date.toLocaleString("default", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return finalDate;
};
