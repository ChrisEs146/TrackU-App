import "./dateCard.css";

const DateCard = ({ date }) => {
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });

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
