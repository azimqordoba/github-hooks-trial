import { square, multiply } from './calc';

// add comments
const showEsLintLoveMessage = () => {
  let message = 'I love ESLint';
  message += 'dummy';

  return message;
};

showEsLintLoveMessage();

square(100);

multiply([1, 2, 3]);