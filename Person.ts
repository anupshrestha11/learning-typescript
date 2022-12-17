class Person {
  name: string;
  age: number;
  isMarried: boolean;

  constructor(name: string, age: number, isMarried: boolean) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  printDetails() {
    console.log(`Name: ${this.name}\nage: ${this.age}years old\nisMarried: ${this.isMarried ? 'Yes' : 'No'}`)
  }
}

export default Person;