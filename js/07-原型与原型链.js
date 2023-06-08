class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`我的名字是${name},年龄${age}`);
  }
}
const person1 = new Person();
console.log(person1.__proto__ === Person.prototype);
console.log(Object.getPrototypeOf(person1));
