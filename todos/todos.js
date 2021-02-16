const Todo = function(obj){
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
    this.Completed = function() {
        return `Наполнение: ${this.obj.completed}`;
    }
    this.getElement = function(todosEl) {
        const todoEl = document.createElement("div");
        todoEl.innerHTML = `
         <h1>${this.obj.title}</h1>
         <p>${this.obj.completed}</p>
        `
        todosEl.appendChild(todoEl);
        return todoEl;
    }
}

fetch('https://jsonplaceholder.typicode.com/todos') // будет работать на фронтенде
    .then(function(res){
        return res.json()
    })
    .then(function(todos) {
        for (let obj2 of todos){
            const todoCreated = new Todo(obj2);
            todoCreated.getElement(todosEl);

            console.log(todoCreated.sayUserId());
            console.log(todoCreated.sayId());
            console.log(todoCreated.sayTitle());
            console.log(todoCreated.Completed());
       }
    })

    const todosEl = document.querySelector(".todos")