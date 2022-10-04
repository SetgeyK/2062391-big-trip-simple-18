import { getRandomInteger } from '../utils';
import { CITIES_NAMES, DESCRIPTION } from './consts';

const generateDescription = () => {
  const randomIndex = getRandomInteger(0, DESCRIPTION.length - 1);

  return DESCRIPTION[randomIndex];
};

const generateName = () => {
  const randomIndex = getRandomInteger(0, CITIES_NAMES.length - 1);

  return CITIES_NAMES[randomIndex];
};


export const generateDestination = () => ({
  id: getRandomInteger(0, 15),
  description: generateDescription(),
  name: generateName(),
  pictures: [
    {
      src: `http://picsum.photos/300/200?r=${getRandomInteger(0, 77)}`,
      description: generateDescription()
    }
  ]
});
