import { types } from '../mock/point';

export default class OffersModel {
  #offers = types;

  get offers () {
    return this.#offers;
  }
}
