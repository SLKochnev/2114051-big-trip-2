import BoardPresenter from './presenter/board-presenter.js';
import { PointModel } from './model/tasks-model.js';

const tripInfoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const boardContainer = document.querySelector('.page-main .page-body__container');
const pointModel = new PointModel();

const boardPresenter = new BoardPresenter({
  boardContainer,
  tripInfoContainer,
  filterContainer,
  pointModel
});

boardPresenter.init();
