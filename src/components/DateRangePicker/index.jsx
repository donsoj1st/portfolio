import { useEffect, useState } from "react";
import DatePicker from "../DatePicker/DatePicker";

const DateRangePicker = () => {
  const [firstInterval, setFirstInterval] = useState(null);
  const [secondInterval, setSecondInterval] = useState(null);

  useEffect(() => {
    console.log("range", firstInterval, "  ", secondInterval);
  }, [firstInterval, secondInterval]);
  const getfirstCalender = (value) => {
    const currentDate = new Date();

    const day = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + value
    );

    return day;
  };

  const getDayclick = (value) => {
    if (!firstInterval && !secondInterval) {
      setFirstInterval(value);
    } else if (firstInterval && !secondInterval) {
      if (firstInterval > value) {
        setSecondInterval(firstInterval);
        setFirstInterval(value);
      } else {
        setSecondInterval(value);
      }
    } else {
      setSecondInterval(null);
      setFirstInterval(null);
    }
  };

  return (
    <div className="date-range">
      <DatePicker
        defaultSelectedDate={getfirstCalender(0)}
        onGetdateClicked={getDayclick}
        dayClicked={firstInterval}
        secondInterval={secondInterval}
      />
      <DatePicker
        defaultSelectedDate={getfirstCalender(1)}
        onGetdateClicked={getDayclick}
        dayClicked={firstInterval}
        secondInterval={secondInterval}
      />
    </div>
  );
};

export default DateRangePicker;
