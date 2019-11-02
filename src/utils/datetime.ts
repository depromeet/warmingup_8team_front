import moment from 'moment';

export function convertMesssageTime(datetime: string | undefined) {
  const date = moment(datetime);
  const today = moment();

  // if (today.isSame(date, 'd')) {
  const isAfter = date.hour() >= 12;
  return `${isAfter ? '오후' : '오전'} ${isAfter ? date.hour() - 12 : date.hour()}:${date.minute()}`;
  // }

};
