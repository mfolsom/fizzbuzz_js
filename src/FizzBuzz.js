isDivisibleByThree = function(number) {
  return number % 3 == 0;
};

isDivisibleByFive = function(number) {
  return number % 5 == 0;
};

isDivisibleByFifteen = function(number) {
  return number % 15 == 0;
};

fizzyBuzzy = function(number) {

  if(isDivisibleByFifteen(number)) {
    return 'FizzBuzz';
  }

  else {if (isDivisibleByThree(number)) {
    return 'Fizz';
  }

  else {if (isDivisibleByFive(number)) {
    return 'Buzz';
  }

  return number;
};};};