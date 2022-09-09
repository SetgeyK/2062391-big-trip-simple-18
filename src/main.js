import CreateFormView from './view/create-form-view';
import FilterView from './view/filter-view';
import TripPresenter from './presenter/trip-presenter';
import { render, RenderPosition } from './render';

const tripMainContainer = document.querySelector('.trip-main');
const tripEventsContainer = document.querySelector('.trip-events');
const filtersContainer = document.querySelector('.trip-controls__filters');
const tripPresenter = new TripPresenter();

render(new CreateFormView(), tripMainContainer, RenderPosition.AFTERBEGIN);
render(new FilterView(), filtersContainer);

tripPresenter.init(tripEventsContainer);
