import TripEventsView from '../view/trip-events-view.js';
import SortView from '../view/sort-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointView from '../view/point-view.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import { render, RenderPosition } from '../framework/render.js';
import { BLANK_POINT } from '../const.js';

export default class BoardPresenter {
  tripEventsView = new TripEventsView();

  constructor({ boardContainer, tripInfoContainer, filterContainer, pointModel }) {
    this.boardContainer = boardContainer;
    this.tripInfoContainer = tripInfoContainer;
    this.filterContainer = filterContainer;
    this.pointModel = pointModel;
  }

  #openEditForm(point, pointElement) {
    const editForm = new EditPointView({ point });
    const editFormElement = editForm.getElement();
    const closeButton = editFormElement.querySelector('.event__rollup-btn');

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        editFormElement.replaceWith(pointElement);
      });
    }

    pointElement.replaceWith(editFormElement);
  }


  render() {
    render(new TripInfoView(), this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView(), this.filterContainer);
    render(this.tripEventsView, this.boardContainer);

    const tripEventsElement = this.tripEventsView.element;

    render(new SortView(), tripEventsElement, RenderPosition.BEFOREBEGIN);

    const pointsList = tripEventsElement.querySelector('.trip-events__list');

    render(new EditPointView({point: BLANK_POINT}), pointsList);

    for (const point of this.boardPointModules) {
      const pointView = new PointView(point);
      const pointElement = pointView.element;

      pointView.setEditClickHandler(() => {
        this.#openEditForm(point, pointElement);
      });

      render(pointView, pointsList);
    }
  }

  init() {
    const rawPoints = this.pointModel.getPoint();
    this.boardPointModules = [];

    for (const rawPoint of rawPoints) {
      const fullPointInfo = this.pointModel.getFullPointInfo(rawPoint);

      if (fullPointInfo) {
        this.boardPointModules.push(fullPointInfo);
      }
    }

    this.render();
  }
}
