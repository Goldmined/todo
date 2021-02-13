const man = {
  name: "Федор",
  email: "fedor@mail.com",
  year: 1900,
  sayHello: function () {
    return `привет! Меня зовут ${this.name}`;
  },
  sayEmail: function () {
      return `моя почта ${this.email}`; 
  },
  sayAge: function() {
    return `мне примерно ${new Date().getFullYear() - this.year}`
  }
}

const Person = function(name, email){
    this.email = email;
    this.name = name;

    this.sayEmail = function () {
        return `моя почта ${this.email}`; 
    }
    this.sayHello = function () {
        return `привет! Меня зовут ${this.name}`;
    }
}

const persons = [
  {name:"Федор", email: "fedor@mail.com"},
  {name:"Дмитрий", email: "dm@mail.com"},
  {name:"Кирилл", email: "krl@mail.com"},
  {name:"Егор", email: "egor@gmail.com"},
  {name:"Мария", email: "mary@mail.com"},
];

for (let obj of persons) {

    const person = new Person(obj.name, obj.email);
    console.log(person.sayHello())
    console.log(person.sayEmail())
}

// const fedor = new Person("Федор", "fedor@mail.com");
// console.log(fedor.sayHello())
// console.log(fedor.sayEmail())

// const dmitry = new Person ("Дмитрий", "dm@mail.com");
// console.log(dmitry.sayHello())
// console.log(dmitry.sayEmail())

// const aquaMan = {
//   name: "Квамен",
//   email: "qua@mail.com"
// }

// function showEmail(person) {
//    return person.email;
// }

// function sayHello (person) {
//   return "привет! Меня зовут " + person.name;
// }
// const sayHello = (person) => `привет! Меня зовут ${person.name}`;

// console.log(man.sayHello())
// console.log(man.sayEmail())
// console.log(man.sayAge())


