import "./dateCard.css";

/**
 * DateCard component that shows the month, day and year.
 * @param {Date} date
 * @returns DateCard component
 */
const DateCard = ({ date }) => {
  const fullDate = new Date(date);
  const day = fullDate.toLocaleString("default", { day: "2-digit" });
  const month = fullDate.toLocaleString("default", { month: "short" });
  const year = fullDate.toLocaleString("default", { year: "numeric" });

  return (
    <div className="date">
      <div className="date__container">
        <div className="date__month-container">
          <span className="date__month">{month}</span>
          <span className="date__day">{day}</span>
        </div>
        <span className="date__year">{year}</span>
      </div>
    </div>
  );
};

export default DateCard;
