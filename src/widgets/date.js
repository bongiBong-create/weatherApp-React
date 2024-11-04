import dayjs from 'dayjs';

export function date() {
  
  function getTime () {
    return dayjs().hour() + ":" + dayjs().minute();
  }

  function getHour() {
    return dayjs().hour()
  }

  function getMinute() {
    return dayjs().minute()
  }

  return {
    getTime,
    getHour,
    getMinute
  }
}