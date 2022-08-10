function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('Sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hourConverter = convertHoursToMinutes(2);
console.log('2 hours in minutes: ', hourConverter);

function getGreeting(string) {
  return 'Hello ' + string + '!';
}

var greeter = getGreeting('World');
console.log('Greeter:', greeter);

function addAndMultiplyBy5(num1, num2) {
  return num1 + num2 * 5;
}

var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('Add & Multiply: ', addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(35, 10);
console.log('Multiply & Divide: ', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtraction = subtractTwoNumbers(22, 7);
console.log('Subtraction: ', subtraction);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference: ', circumference);

function getFullName(firstname, lastname) {
  return firstname + ' ' + lastname;
}

var name = getFullName('Juan', 'Ramirez');
console.log('Name: ', name);

function cube(num) {
  return num * num * num;
}

var cubed = cube(5);
console.log('Cubed: ', cubed);
