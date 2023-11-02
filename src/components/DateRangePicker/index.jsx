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
    </>
  );
};

export default DateRangePicker;
