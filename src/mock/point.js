import { getRandomInteger } from '../utils';
import dayjs from 'dayjs';

const generatePointType = () => {
  const pointType = [
    'taxi',
    'us',
    'train',
    'ship',
    'drive',
    'flight',
    'chech-in',
    'sightseeing',
    'restaurant'
  ];
  const randomIndex = getRandomInteger(0, pointType.length - 1);
  return pointType[randomIndex];
};

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
  destination: 1,
  id: 0,
  offer: {
    id: getRandomInteger(0, 10),
    title: generateUpgradeTitle(),
    price: getRandomInteger(30, 150)
  },
  type: generatePointType()
});
