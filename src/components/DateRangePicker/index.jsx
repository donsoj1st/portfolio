import { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";

const DateRangePicker = () => {
  const getfirstCalender = (value) => {
    const currentDate = new Date();

    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + value
    );

    return day;
  };
  const [firstInterval, setFirstInterval] = useState(null);
  const [secondInterval, setSecondInterval] = useState(null);
  const [firstCalender, setFirstCalender] = useState(getfirstCalender(0));
  const [secondCalender, setSecondCalender] = useState(getfirstCalender(1));

  const firstDateSelected = (value) => {
    console.log("first", value);
    const currentDate = new Date(value.getFullYear(), value.getMonth());
    const secondDate = new Date(
      secondCalender.getFullYear(),
      secondCalender.getMonth()
    );
    console.log("checking", currentDate.getTime() >= secondDate.getTime());
    if (currentDate.getTime() > secondDate.getTime()) {
      const newDate = new Date(value.getFullYear(), value.getMonth() + 1);
      console.log("I am here", newDate);
      setSecondCalender((prev) => {
        prev = null;
        return newDate;
      });
    }
  };
  const secondDateSelected = (value) => {
    // console.log("second", value);
  };
  useEffect(() => {
    console.log("range", firstInterval, "  ", secondInterval);
  }, [firstInterval, secondInterval]);

  const getDayclick = (value) => {
    if (!firstInterval && !secondInterval) {
      setFirstInterval(value);
    } else if (firstInterval && !secondInterval) {
      if (firstInterval > value) {
        const holder = firstInterval;
        setFirstInterval(value);
        setSecondInterval(holder);
      } else {
        setSecondInterval(value);
      }
    } else {
      setSecondInterval(null);
      setFirstInterval(value);
    }
  };
  const getTodayInterval = () => {
    setFirstInterval(firstCalender);
    setSecondInterval(firstCalender);
  };

  const getYesterdayInterval = () => {
    const currentDate = new Date();

    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 1
    );
    console.log("date", currentDate);
    setFirstInterval(day);
    setSecondInterval(day);
  };
  const get30DayInterval = () => {
    const currentDate = new Date();
    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 30
    );
    const end = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );
    console.log("date", end, "first", day);
    setFirstInterval(day);
    setSecondInterval(end);
  };

  return (
    <>
      <input
        style={{
          width: "650px",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
          border: "2px solid #2684ff",
        }}
        onFocus={() => {
          console.log("soji");
        }}
        onBlur={() => {
          console.log("blure");
        }}
      />
      <div className="date-range">
        <DatePicker
          defaultSelectedDate={firstCalender}
          onGetdateClicked={getDayclick}
          dayClicked={firstInterval}
          secondInterval={secondInterval}
          onDateSelected={firstDateSelected}
        />
        <DatePicker
          defaultSelectedDate={secondCalender}
          onGetdateClicked={getDayclick}
          dayClicked={firstInterval}
          secondInterval={secondInterval}
          onDateSelected={secondDateSelected}
        />
      </div>
      <div className="footer">
        <button className="button" onClick={getTodayInterval}>
          today
        </button>
        <button className="button" onClick={getYesterdayInterval}>
          Yesterday
        </button>
        <button className="button" onClick={get30DayInterval}>
          last 30 days
        </button>
        {firstDateSelected && secondInterval && (
          <button className="button">OK</button>
        )}
      </div>
    </>
  );
};

export default DateRangePicker;
