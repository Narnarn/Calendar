import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  let curMonthCount = 0 - firstDayOfMonth;

  const daysMatrix = new Array(5).fill(0).map(() => {
    return new Array(7).fill(0).map(() => {
      curMonthCount++;
      return dayjs(new Date(year, month, curMonthCount));
    });
  });
  return daysMatrix;
}
