"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todo =
/*#__PURE__*/
function () {
  function Todo() {
    _classCallCheck(this, Todo);

    this.data = [];
  }

  _createClass(Todo, [{
    key: "add",
    value: function add(name) {
      this.data.push(name);
    }
  }, {
    key: "getTodosList",
    value: function getTodosList() {
      return this.data;
    }
  }, {
    key: "filterTodo",
    value: function filterTodo(todo) {
      return this.data.filter(function (item) {
        return item.indexOf(todo) > -1;
      })[0];
    }
  }, {
    key: "findTodo",
    value: function findTodo(todo) {
      return this.data.filter(function (item) {
        return item == todo;
      })[0];
    }
  }]);

  return Todo;
}();

var todo = new Todo();
todo.add("Comer macarrão");
todo.add("Comer lasanha");
todo.add("Comer sushi");
todo.add("Comer sorvete");
var todos = todo.getTodosList();
var tasks = document.querySelector(".tasks");
todos.map(function (task) {
  var element = document.createElement("h4");
  element.innerText = task;
  tasks.appendChild(element);
});
console.log(todo.findTodo(todo.filterTodo("macarrão")));
