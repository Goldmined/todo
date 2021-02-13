const { users2 } = require('./data/usersfromsite')

const User = function(obj){
    this.obj = obj;

    this.sayUserId = function() {
        return  `Мой id пользователя: ${this.obj.userId}`;
    }
    this.sayId = function() {
        return `Мой ID: ${this.obj.id}`;
    }
    this.sayTitle = function() {
        return `Заголовок: ${this.obj.title}`;
    }
    this.Body = function() {
        return `Наполнение: ${this.obj.body}`;
    }
}


for (let obj2 of users2){
     const userCreated = new User(obj2);
     console.log(userCreated.sayUserId());
     console.log(userCreated.sayId());
     console.log(userCreated.sayTitle());
     console.log(userCreated.Body());
}




// console.log(users2);