import React, { useState, useEffect } from "react";
//import "./DatePicker.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendar, setCalendar] = useState([]);
  const [visble, setVisible] = useState(false);

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const monthOfYear = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const generateYear = () => {
    const years = [];
    for (let i = 1900; i <= 3022; i++) {
      years.push({ year: i, monthOfYear });
    }
    return years;
  };

  const generateCalendar = () => {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date(); // select day of the month
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    console.log("firstDayOfMonth", firstDayOfMonth);
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    console.log("lastDayOfMonth", lastDayOfMonth);
    const startOffset = firstDayOfMonth.getDay();
    const endOffset = 6 - lastDayOfMonth.getDay();

    console.log("startOffset", startOffset);
    console.log("endOffset", endOffset);

    const days = [];
    for (
      let i = 1 - startOffset;
      i <= lastDayOfMonth.getDate() + endOffset;
      i++
    ) {
      const day = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      days.push({
        date: day,
        isCurrentMonth: day.getMonth() === currentDate.getMonth(),
        isSelected:
          selectedDate && day.toDateString() === selectedDate.toDateString(),
      });
    }
    console.log("day", days);

    setCalendar((prev) => {
      prev = [];
      return [...prev, ...days];
    });
  };

  // Initial calendar generation
  useEffect(() => {
    console.log("i am here");
    generateCalendar();
  }, [selectedDate]);
  //generateCalendar();
  if (!selectedDate) {
    setSelectedDate(new Date());
  }

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (increment) => {
    const newDate = selectedDate ? new Date(selectedDate) : new Date();
    newDate.setMonth(newDate.getMonth() + increment);
    console.log("new date", newDate);
    setSelectedDate(newDate);
  };

  const renderHeader = () => {
    return (
      <div className={`header`}>
        <button onClick={() => handleMonthChange(-1)}>{"<"}</button>
        <div
          className="year-selector"
          onClick={() => {
            setVisible(true);
            console.log(visble);
          }}
        >{`${selectedDate?.toLocaleString("default", {
          month: "long",
        })} ${selectedDate?.getFullYear()}`}</div>
        <button onClick={() => handleMonthChange(1)}>{">"}</button>
      </div>
    );
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-of-week">
        {day}
      </div>
    ));
  };

  const handleMonthClick = (year, month) => {
    const date = new Date(year, month);
    setSelectedDate(date);
    setVisible(false);
  };

  const renderCalendarDays = () => {
    return calendar.map((day, index) => (
      <div
        key={index}
        className={`day ${
          day.isCurrentMonth ? "current-month" : "other-month"
        } ${day.isSelected ? "selected" : ""}`}
        onClick={() => handleDateClick(day.date)}
      >
        {day.date.getDate()}
      </div>
    ));
  };
  const renderYears = () => {
    const years = generateYear();
    return years.map((values, index) => (
      <div className="year-month" key={index} id={index}>
        <p className="year month">{values.year}</p>
        {values.monthOfYear.map((monthOfYearIdex, index) => (
          <p
            key={index}
            className="month"
            onClick={() => handleMonthClick(values.year, monthOfYearIdex)}
          >
            {monthOfYearIdex + 1}
          </p>
        ))}
      </div>
    ));
  };

  return (
    <div className="datepicker-container">
      <div>{renderHeader()}</div>
      <div className="days-of-week">{renderDaysOfWeek()}</div>
      <div className="calendar">{renderCalendarDays()}</div>
      <div className={`year-container ${visble ? "visibility" : ""}`}>
        {renderYears()}
      </div>
    </div>
  );
};

export default DatePicker;
