import { square, multiply } from './calc';

const hello = function () {
  return 'hellow';
};

hello();

const showMessage = () => {
  let message = 'I love ESLint';
  message += 'dummy';

  return message;
};

showMessage();

square(100);

multiply([1, 2, 3]);
