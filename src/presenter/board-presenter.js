import TripEventsView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import { render, RenderPosition } from '../render.js';

export default class BoardPresenter {
  tripEventsView = new TripEventsView();

  constructor({ boardContainer, tripInfoContainer, filterContainer, pointModel }) {
    this.boardContainer = boardContainer;
    this.tripInfoContainer = tripInfoContainer;
    this.filterContainer = filterContainer;
    this.pointModel = pointModel;
  }

  init() {
    this.boardPointModules = [...this.pointModel.getPoint()];

    render(new TripInfoView(), this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.filterContainer);
    render(this.tripEventsView, this.boardContainer);

    const tripEventsElement = this.tripEventsView.getElement();

    render(new SortView(), tripEventsElement, RenderPosition.BEFOREBEGIN);

    const pointsList = tripEventsElement.querySelector('.trip-events__list');

    render(new EditPointView(), pointsList);

    for (let i = 1; i <= this.boardPointModules.length; i++) {
      render(new PointView({point: this.boardPointModules[i]}), pointsList);
    }
  }
}
