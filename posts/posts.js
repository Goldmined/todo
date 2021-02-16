// const { posts } = require('./data/posts') // будет работать на бэкенде

const Post = function(obj){
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
    this.commentName = function() {
        return `Название комментария: ${this.obj.name}`;
    }
    this.commentBody = function() {
        return `Комментарий: ${this.obj.body}`;
    }

    this.getElement = function(postsEl) {
        const postEl = document.createElement("div");
        postEl.innerHTML = `
         <h1>${this.obj.title}</h1>
         <p>${this.obj.body}</p>
        `
        postsEl.appendChild(postEl);
        return postEl;
    }
   
}

const Comment = function(obj){
    this.obj = obj;

    this.PostId = function() {
        return  `Мой id пользователя: ${this.obj.postId}`;
    }
    this.Id = function() {
        return `Мой ID: ${this.obj.id}`;
    }
    this.Name = function() {
        return `Название ком-рия: ${this.obj.name}`;
    }
    this.Email = function() {
        return `Почта: ${this.obj.email}`;
    }
    this.Body = function() {
        return `Комментарий: ${this.obj.body}`;
    }
    this.getElement = function(commentsEl) {
        const commentEl = document.createElement("div");
        commentEl.innerHTML = `
        <h2>${this.obj.name}</h2>
        <p>${this.obj.body}</p>
        `
        commentsEl.appendChild(commentEl);
        return commentEl;
    }
}

//посты 
fetch('https://jsonplaceholder.typicode.com/posts') // будет работать на фронтенде
    .then(function(res){
        return res.json()
    })
    .then(function(posts) {
        for (let obj2 of posts){
            const postCreated = new Post(obj2);
            postCreated.getElement(postsEl);

            // console.log(postCreated.sayUserId());
            // console.log(postCreated.sayId());
            // console.log(postCreated.sayTitle());
            // console.log(postCreated.Body());
       }
    })
//комментарии
fetch('http://jsonplaceholder.typicode.com/comments')
    .then(function(res){
        return res.json()
    })
    .then(function(comments) {
        for (let obj2 of comments){
            const commentCreated = new Comment(obj2);
            commentCreated.getElement(commentsEl);

            console.log(commentCreated.Name());
            console.log(commentCreated.Body());
        }
    })



const postsEl = document.querySelector(".posts")
const commentsEl = document.querySelector(".comments")

console.log('End')
// console.log(users2);