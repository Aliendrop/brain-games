import getRandomInteger from '../utils';
import runGame from '..';

const gameRules = 'What number is missing in the progression?';

const countProgressionElements = 10;

const generateProgression = (start, step) => {
  const hiddenElementIndex = getRandomInteger(countProgressionElements, 1);
  let progressionElement = start;
  let question = '';
  let correctAnswer = '';
  for (let element = 1; element <= countProgressionElements; element += 1) {
    if (element !== hiddenElementIndex) {
      question = `${question} ${progressionElement}`;
    } else {
      question = `${question} ..`;
      correctAnswer = String(progressionElement);
    }
    progressionElement += step;
  }
  return [question, correctAnswer];
};

const progressionGame = () => {
  const startProgression = getRandomInteger(100, 1);
  const progressionStep = getRandomInteger(10, 1);
  return generateProgression(startProgression, progressionStep);
};

export default () => runGame(progressionGame, gameRules);