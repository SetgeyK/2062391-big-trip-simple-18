import { generateDestination } from '../mock/destination';

export default class DestinationModel {
  destinations = Array.from({length: 15}, generateDestination);

  getDestinations = () => this.destinations;
}
