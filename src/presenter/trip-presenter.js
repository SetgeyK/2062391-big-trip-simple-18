import SortView from '../view/sort-view.js';
import EditFormView from '../view/edit-form-view';
import PointsListView from '../view/points-list-view.js';
import PointView from '../view/point-view';

import { render } from '../render';

export default class TripPresenter {
  pointsListComponent = new PointsListView();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;

    render(new SortView(), this.tripContainer);
    render(this.pointsListComponent, this.tripContainer);
    render(new EditFormView(), this.pointsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointsListComponent.getElement());
    }
  };
}
