import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public owner: Owner
  ) { }
}

export class Owner {
  constructor(
    public firstName: string,
    public lastName: string
  ) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [
    {
      id: 3,
      description: 'TODO ID 3',
      completed: false,
      owner: new Owner('John', 'Muller')
    },
    {
      id: 6,
      description: 'TODO ID 6',
      completed: true,
      owner: new Owner('Lucas', 'Farrell')
    },
    {
      id: 7,
      description: 'TODO ID 7',
      completed: false,
      owner: new Owner('Maria', 'Robertson')
    },
  ];

  constructor() { }

  ngOnInit() { }

  toggleFirst() {
    // This way you could to modify the source collection
    // const extractedTodo = Object.assign(<Todo>{}, this.todos.slice(0, 1)[0]);
    // extractedTodo.completed = !extractedTodo.completed;
    // this.todos[0] = extractedTodo;
    this.todos[0]['completed'] = !this.todos[0]['completed'];
  }

  addTodo() {
    // Makes a copy of current collection
    const newTodos = this.todos.slice(0);
    const newTodoId = Math.floor(Math.random() * 100);
    newTodos.push(new Todo(newTodoId, `TODO ID ${newTodoId}`, false, new Owner('John', 'Doe')));
    // reassing the todos with newTodos
    this.todos = newTodos;
  }

  reportToggle(toggledTodo) {
    console.log('toggledTodo', toggledTodo);
  }
}
