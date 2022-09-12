import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view';

import { render } from '../render';

export default class TripPresenter {
  pointsListComponent = new PointsListView();

  init = (tripContainer, pointsModel, destinationModel) => {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
    this.destinationModel = destinationModel;
    this.points = [...this.pointsModel.getPoints()];
    this.destinations = [...this.destinationModel.getDestinations()];

    render(new SortView(), this.tripContainer);
    render(this.pointsListComponent, this.tripContainer);
    render(new EditFormView(this.points[this.points.length - 1], this.destinations[this.destinations.length - 1]), this.pointsListComponent.getElement());

    for (let i = 0; i < this.points.length - 1; i++) {
      render(new PointView(this.points[i], this.destinations[i]), this.pointsListComponent.getElement());
    }
  };
}
