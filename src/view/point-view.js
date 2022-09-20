import dayjs from 'dayjs';
import { createElement } from '../render';
import { getRandomInteger } from '../utils';

const createPointTemplate = (point, description) => {
  const { dateFrom, dateTo, basePrice, offersByType} = point;
  const { name } = description;
  const offers = offersByType.offers[getRandomInteger(0, offersByType.offers.length - 1)];

  return (`
<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="2019-03-18">${dayjs(dateFrom).format('MMM DD')}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${offersByType.type} ${name}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-18T14:30">${dayjs(dateFrom).format('HH:mm')}</time>
      —
      <time class="event__end-time" datetime="2019-03-18T16:05">${dayjs(dateTo).format('HH:mm')}</time>
    </p>
  </div>
  <p class="event__price">
    €&nbsp;<span class="event__price-value">${basePrice}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
    <li class="event__offer">
      <span class="event__offer-title">${offers.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${offers.price}</span>
    </li>
  </ul>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>
</li>
`);
};

export default class PointView {
  #point = null;
  #description = null;
  #element = null;

  constructor(point, description) {
    this.#point = point;
    this.#description = description;
  }

  get template() {
    return createPointTemplate(this.#point, this.#description);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
