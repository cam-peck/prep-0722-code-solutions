const person = {
  firstName: 'Cameron',
  lastName: 'Peck',
  hobby: 'piano'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log(`The person's name is ${fullName}.`);

person.job = 'Chemistry Teacher';
console.log(`The person's job is: ${person.job}.`);

person.previousJob = 'Japan ALT';
console.log(`The person's previous job was: ${person.previousJob}.`);

console.log(person);
