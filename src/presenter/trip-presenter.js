import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view';
import NoPointsView from '../view/nopoints-view.js';

import { render } from '../render';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationModel = null;
  #points = [];
  #destinations = [];
  #offers = [];
  #pointsListComponent = new PointsListView();

  init = (tripContainer, pointsModel, destinationModel, offersModel) => {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationModel = destinationModel;

    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#destinationModel.destinations];
    this.#offers = this.#offersModel.offers;

    if (this.#points.length === 0) {
      render(new NoPointsView(), this.#tripContainer);
    } else {
      render(new SortView(), this.#tripContainer);
      render(this.#pointsListComponent, this.#tripContainer);

      for (let i = 0; i < this.#points.length; i++) {
        this.#renderPoint(this.#points[i], this.#destinations[i], this.#offers);
      }
    }
  };

  #renderPoint = (point, destination) => {
    const pointComponent = new PointView(point, destination, this.#offers);
    const pointEditComponent = new EditFormView(point, destination, this.#offers);

    const replacePointToForm = () => {
      this.#pointsListComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#pointsListComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__save-btn').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    /// здесь сисправить
    pointEditComponent.element.querySelector('.event__reset-btn').addEventListener('click', () => {
      this.#pointsListComponent.removeElement();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    /////
    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
    });

    render(pointComponent, this.#pointsListComponent.element);
  };
}
