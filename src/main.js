import CreateFormView from './view/create-form-view';
import FilterView from './view/filter-view';
import TripPresenter from './presenter/trip-presenter';
import { render, RenderPosition } from './render';
import PointsModel from './model/points-model';
import DestinationModel from './model/destination-model';

const tripMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');
const tripPresenter = new TripPresenter();
const pointsModel = new PointsModel();
const destinationModel = new DestinationModel();

render(new CreateFormView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainer);

tripPresenter.init(tripEventsContainer, pointsModel, destinationModel);
