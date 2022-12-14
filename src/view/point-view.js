import dayjs from 'dayjs';
import { createElement } from '../render';

const getOffersByType = (type, offersByType, offerIds) => {
  const offersArray = [];
  if (offerIds.length > 0) {
    offerIds.forEach((id) => {
      const offer = offersByType.filter((item) => item.id === id);
      if (offer.length > 0) {
        offersArray.push(offer[0]);
      }
    });
  }

  return offersArray;
};

const printOffers = (offers) => {
  let template = '';
  if (offers.length > 0) {
    offers.forEach((item) => {
      template += `<li class="event__offer">
          <span class="event__offer-title">${item.title}</span>
          +€&nbsp;
          <span class="event__offer-price">${item.price}</span>
        </li>`;
    });
  } else {
    template += `<li class="event__offer">
      <span class="event__offer-title">No additional offers</span>
    </li>`;
  }
  return template;
};


const createPointTemplate = (point, description, offersByType) => {
  const { dateFrom, dateTo, basePrice, type } = point;
  const { name } = description;
  const offers = getOffersByType(type, offersByType[0].offers, point.offers);
  return (`
<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="2019-03-18">${dayjs(dateFrom).format('MMM DD')}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${name}</h3>
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
    ${printOffers(offers)}
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
  #offers = null;

  constructor(point, description, offers) {
    this.#point = point;
    this.#description = description;
    this.#offers = offers.filter((item) => item.type === this.#point.type);
  }

  get template() {
    return createPointTemplate(this.#point, this.#description, this.#offers);
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
