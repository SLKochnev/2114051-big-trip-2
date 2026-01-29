import AbstractView from '../framework/view/abstract-view.js';
import { actualPointDate, actualPointTime, isPointExpired, pointOffers } from '../utils.js';

const createPointTemplate = (point) => {
  const startDate = actualPointDate(point.dateFrom);
  const startTime = actualPointTime(point.dateFrom);
  const endTime = actualPointTime(point.dateTo);

  const expiredClassName = isPointExpired(point.dateTo) ? 'trip-event--expired' : '';
  const offersClassName = pointOffers(point.offers) ? 'event-offers' : '';
  const favoriteBtnClassName = point.isFavorite ? 'event__favorite-btn--active' : '';
  const cityName = point.destination?.name || 'Unknown';
  const pointPrice = point.basePrice || 0;

  let offersHTML = '';
  if (point.offers && point.offers.length > 0) {
    offersHTML = point.offers.map((offer) => `
      <li class="event__offer">
        <span class="event__offer-title">${offer.title || 'Unknown offer'}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price || 0}</span>
      </li>
    `).join('');
  }

  return `<li class="trip-events__item ${expiredClassName} ${offersClassName}">
    <div class="event">
      <time class="event__date" datetime="${point.dateFrom}">${startDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="${point.type} icon">
      </div>
      <!-- ИСПРАВЛЕНИЕ 1: Используем реальное название города -->
      <h3 class="event__title">${point.type} ${cityName}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${point.dateFrom}">${startTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${point.dateTo}">${endTime}</time>
        </p>
        <p class="event__duration">30M</p>
      </div>
      <!-- ИСПРАВЛЕНИЕ 2: Используем реальную цену точки -->
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${pointPrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <!-- ИСПРАВЛЕНИЕ 3: Показываем реальные опции -->
      <ul class="event__selected-offers">
        ${offersHTML}
      </ul>
      <button class="event__favorite-btn ${favoriteBtnClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class PointView extends AbstractView {
  #point = null;
  #handleEditClick = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createPointTemplate(this.#point);
  }

  setEditClickHandler(callback) {
    this.#handleEditClick = callback;
    this.element.querySelector('.event__rollup-btn')?.addEventListener('click', this.#handleEditClick);
  }
}
