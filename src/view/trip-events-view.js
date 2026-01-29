import AbstractView from '../framework/view/abstract-view.js';

const createTripEventsTemplate = () => (`
  <section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>
    <ul class="trip-events__list"></ul>
  </section>`
);

export default class TripEventsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createTripEventsTemplate();
  }
}
