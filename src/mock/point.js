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

export const generatePoint = () => ({
  basePrice: getRandomInteger(300, 1500),
  dateFrom: dayjs().subtract(1, 'day'),
  dateTo: dayjs().add(3, 'hour'),
  destination: getRandomInteger(0, 15),
  id: getRandomInteger(0, 15),
  offersByType: {
    type: POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)],
    offers:[
      {
        id: getRandomInteger(0, 10),
        title: generateUpgradeTitle(),
        price: getRandomInteger(30, 150)
      },
      {
        id: getRandomInteger(0, 10),
        title: generateUpgradeTitle(),
        price: getRandomInteger(30, 150)
      },
      {
        id: getRandomInteger(0, 10),
        title: generateUpgradeTitle(),
        price: getRandomInteger(30, 150)
      },
      {
        id: getRandomInteger(0, 10),
        title: generateUpgradeTitle(),
        price: getRandomInteger(30, 150)
      }
    ]}
}
);
