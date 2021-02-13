const { users } = require('./data/users')
// 0. Теория
// https://learn.javascript.ru/object
// https://learn.javascript.ru/object-copy
// https://learn.javascript.ru/object-methods
// https://learn.javascript.ru/constructor-new

// 1. описание класса пользователя
// пользователь умеет
// 1) говорить своё имя
// 2) свои контакты
// 3) рассказывать о себе что-нибудь ещё

// 2. Информация о постах: https://jsonplaceholder.typicode.com/posts

const User = function(object){
    this.object = object;

    this.sayId = function () {
        return `Мой id: ${this.object.id}`;
    }
    this.sayName = function () {
        return `Меня зовут ${this.object.name}`;
    }
    this.sayUsername = function() {
        return `Мой ник ${this.object.username}`;
    }
    this.sayEmail = function () {
        return `Моя почта ${this.object.email}`; 
    }
    this.sayAddress = function () {
        return `Мой адрес ${this.object.address.street}, номер квартиры: ${this.object.address.suite}, город: ${this.object.address.city}, индекс: ${this.object.address.zipcode}`;
    } 
    this.sayPhone = function () {
        return `Мой номер телефона ${this.object.phone}`;
    } 
    this.sayWebsite = function () {
        return `Мой сайт ${this.object.website}`;
    } 
    this.sayCompany = function () {
        return `Моя компания ${this.object.company.name}, ключевая фраза: ${this.object.company.catchPhrase}`;
    }
}


for (let obj1 of users) {
    const userCreated = new User(obj1);
    console.log(userCreated.sayName());
    console.log(userCreated.sayPhone());
    console.log(userCreated.sayAddress());
    console.log(userCreated.sayPhone());
    console.log(userCreated.sayWebsite());
    console.log(userCreated.sayCompany());
}

// console.log(users);