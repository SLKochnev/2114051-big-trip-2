const POINT_COUNT = 3;
const DATE_FORMAT = 'MMM DD';
const TIME_FORMAT = 'HH:mm';

const BLANK_POINT = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: 'flight'
};

export {
  POINT_COUNT,
  DATE_FORMAT,
  TIME_FORMAT,
  BLANK_POINT
};
