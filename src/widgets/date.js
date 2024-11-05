import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek)

export function date() {

  function getTime() {
    return dayjs().hour() + " : " + dayjs().minute();
  }

  function getHour() {
    return dayjs().hour()
  }

  function getMinute() {
    return dayjs().minute()
  }

  function getDay(data) {
    const dateObj = dayjs(data);
    const dayOfWeek = dateObj.isoWeekday();
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return daysOfWeek[dayOfWeek - 1];
  }

  return {
    getTime,
    getHour,
    getMinute,
    getDay
  }
}