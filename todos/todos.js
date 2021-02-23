// lib
const User = function(obj){
    this.obj = obj;
    this.getElement = function(usersEl) {
        const userEl = document.createElement("div");
        userEl.classList.add('user');

        userEl.innerHTML = `
         <h1 class="user__name">${this.obj.name}</h1>
         <p class="user__email">${this.obj.email}</p>
         <p class="user__phone">${this.obj.phone}</p>
         <a href = "${this.obj.website}">${this.obj.website}</a>
         <ol class="todos"></ol>
        `

        usersEl.appendChild(userEl);
        return userEl;s
    }
}

const Todo = function(obj){
    this.obj = obj;
    this.getElement = function(todosWrapper) {
        // 1) создать новый элемент
        const todoEl = document.createElement("li");
        // 2) наполнить его содержимым
        todoEl.innerHTML = `
          <span
            class="${this.obj.completed ? "done" : "in-progress"}"
          >${this.obj.title}</span>
        `
        // 3) добавить новый элемент внутрь todosWrapper
        todosWrapper.appendChild(todoEl);
        return todoEl;
    }
}

// client code
const usersWrapper = document.querySelector('.users');
const allUsers = {} // словарь со всеми пользователями
fetchTodos();

function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos') // будет работать на фронтенде
    .then(function(res){
        return res.json()
    })
    .then(function(todos) {
        for (let obj of todos){
            const todo = new Todo(obj);
            const userId = todo.obj.userId;
            if (!allUsers[userId]) {
                allUsers[userId] = [];
            }
            allUsers[userId].push(todo);
        }

        // запросить пользователей
        // отрисовать пользователей
        // отрисовать тудушки в каждом пользователей
        fetchUsers()
    })
}

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users') // будет работать на фронтенде
    .then(function(res){
        return res.json()
    })
    .then(function(users) {
        for (let obj of users){
            const user = new User(obj);
            const userEl = user.getElement(usersWrapper);
            const todosWrapper = userEl.querySelector('ol.todos')
            for(let todo of allUsers[user.obj.id]) {
                todo.getElement(todosWrapper);
            }
        }
    })
}
    // const Todo = function(obj){
    //     this.obj = obj;
    
    //     this.sayUserId = function() {
    //         return  `Мой id пользователя: ${this.obj.userId}`;
    //     }
    //     this.sayId = function() {
    //         return `Мой ID: ${this.obj.id}`;
    //     }
    //     this.sayTitle = function() {
    //         return `Заголовок: ${this.obj.title}`;
    //     }
    //     this.Completed = function() {
    //         return `Наполнение: ${this.obj.completed}`;
    //     }
    //     this.getElement = function(todosEl) {
    //         const todoEl = document.createElement("div");
    //         todoEl.innerHTML = `
    //          <h1>${this.obj.title}</h1>
    //          <p>${this.obj.completed}</p>
    //         `
    //         todosEl.appendChild(todoEl);
    //         return todoEl;
    //     }
    // }
    
    // fetch('https://jsonplaceholder.typicode.com/todos') // будет работать на фронтенде
    //     .then(function(res){
    //         return res.json()
    //     })
    //     .then(function(todos) {
    //         for (let obj2 of todos){
    //             const todoCreated = new Todo(obj2);
    //             todoCreated.getElement(todosEl);
    
    //             console.log(todoCreated.sayUserId());
    //             console.log(todoCreated.sayId());
    //             console.log(todoCreated.sayTitle());
    //             console.log(todoCreated.Completed());
    //        }
    //     })
    
    //     const todosEl = document.querySelector(".todos")