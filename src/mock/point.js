import { getRandomInteger } from '../utils';
import { POINT_TYPES } from './consts';
import dayjs from 'dayjs';


const generateUpgradeTitle = () => {
  const offerUpgrade = [
    'Upgrade to a business class',
    'Take a drive',
    'Lunch',
    'Radio',
    'Silence',
    'Massage'
  ];
  const randomIndex = getRandomInteger(0, offerUpgrade.length - 1);
  return offerUpgrade[randomIndex];
};

const types = [];

const generateOffers = () => ({
  id: getRandomInteger(0, 10),
  title: generateUpgradeTitle(),
  price: getRandomInteger(30, 150)
});

const createTypes = () => {
  POINT_TYPES.forEach((type) => {
    types.push({
      type: type,
      offers: Array.from({length: getRandomInteger(0, 3)}, generateOffers)
    });
  });
};

createTypes();
const getOffersByType = (offerTypes, type) => {
  const offersArray = [];
  const filtredOffer = offerTypes.filter((item) => item.type === type);
  if (filtredOffer[0].offers.length > 0) {
    for (let i = 0; i < getRandomInteger(0, filtredOffer[0].offers.length); i++) {
      offersArray.push(filtredOffer[0].offers.id);
    }
  }
  return offersArray;
};

const generatePoint = () => {
  const type = POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)];
  return {
    basePrice: getRandomInteger(300, 1500),
    dateFrom: dayjs().subtract(1, 'day'),
    dateTo: dayjs().add(3, 'hour'),
    destination: getRandomInteger(0, 15),
    id: getRandomInteger(0, 15),
    offers: getOffersByType(types, type),
    type: type
  };

};

export { types, generatePoint };
