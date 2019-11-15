class Todo {

    constructor() {
        this.data = [];
    }

    add(name) {
        this.data.push(name);
    }

    getTodosList() {
        return this.data;
    }

    filterTodo(todo){
        return this.data.filter(item =>item.indexOf(todo) > -1)[0];
    }

    findTodo(todo){
        return this.data.filter(item =>item == todo)[0];
    }
}


var todo = new Todo();
todo.add("Comer macarrão");
todo.add("Comer lasanha");
todo.add("Comer sushi");
todo.add("Comer sorvete");

var todos = todo.getTodosList();

const tasks = document.querySelector(".tasks");

todos.map(task => {
    let element = document.createElement("h4");
    element.innerText = task;

    tasks.appendChild(element);
});

console.log(todo.findTodo(todo.filterTodo("macarrão")));