const personPrototype = {
  firstName: 'Luciano',
  lastName: 'Machado',
  age: 24,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson);
anotherPerson.firstName = 'Maria';
console.log(anotherPerson.firstName);
console.log(personPrototype.firstName);
