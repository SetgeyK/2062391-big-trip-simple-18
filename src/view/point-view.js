import dayjs from 'dayjs';
import { createElement } from '../render';

const createPointTemplate = (point, description) => {
  const { dateFrom, dateTo, basePrice, offer, type } = point;
  const { name } = description;

  return (`
<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="2019-03-18">${dayjs(dateFrom).format('MMM DD')}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${name}</h3>
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
      <span class="event__offer-title">${offer.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${offer.price}</span>
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
  constructor(point, description) {
    this.point = point;
    this.description = description;
  }

  getTemplate() {
    return createPointTemplate(this.point, this.description);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
