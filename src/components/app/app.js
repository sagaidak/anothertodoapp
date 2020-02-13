import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

class App extends React.Component {
    constructor () {
		super();

		this.state = {
			todos: [
				{ label: 'Drink Coffee', important: false, done: false, id: 1, show: true },
				{ label: 'Make Awesome App', important: true, done: false, id: 2, show: true },
				{ label: 'Have a lunch', important: false, done: false, id: 3, show: true }
			]
		};

		this.createTodoItem = (label, id) => {
		    return {
		        label,
                important: false,
                done: false,
                id,
				show: true
            }
        };

        this.toggleProperty = (arr, propName, id) => {
            const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            return  [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
        };
		
		this.removeTodo = (id) => {
			this.setState(({todos}) => {
				const idx = todos.findIndex((el) => el.id === id);
				
				return {
					todos: [
						...todos.slice(0, idx),
						...todos.slice(idx + 1)
					]
				}
			});
		};

		this.addTodo = (text) => {
			this.setState(({todos}) => {
			    let maxId =  todos.reduce(
                    (max, todo) => (todo.id >= max ? todo.id : max),
                    todos[0].id
                );

				return {
					todos: [
						...todos,
                        this.createTodoItem(text, maxId +1)
					]
				}
			});
		};

		this.onToggleImportant = (id) => {
            this.setState(({todos}) => {
                return {
                    todos: this.toggleProperty(todos, 'important', id)
                }
            });
        };

        this.onToggleDone = (id) => {
            this.setState(({todos}) => {
                return {
                    todos: this.toggleProperty(todos, 'done', id)
                }
            });
        };

        this.filterList = (text) => {
        	this.setState(({todos}) => {
        		let newTodos = [];

        		for (let td of todos) {
        			let label = td.label.toLowerCase();
                    let re = new RegExp(text.toLowerCase(), 'g');
        			td.show = label.match(re);
                    newTodos.push(td);
                }

        		return {
        			todos: newTodos
				}
			})
		}

        this.filterListByActivity = (activity) => {
        	this.setState(({todos}) => {
        		let newTodos = [];

        		for (let td of todos) {
                    td.show = false;

        			if (activity === true ) {
                        if (td.done === false) td.show = true;
					} else if (activity === false) {
                        if (td.done === true) td.show = true;
					}

                    if (activity === null) td.show = true;

        			newTodos.push(td);
				}

                return {
                    todos: newTodos
                }
			});
		}
    }


	render () {
        const {todos} = this.state;
        const doneCount = todos.filter(el => el.done === true).length;
        const undoneCount = todos.filter(el => el.done === false).length;

		return (
			<div className="todo-app">
			  <AppHeader toDo={undoneCount} done={doneCount} />
			  <div className="top-panel d-flex">
				<SearchPanel filterList={(text) => this.filterList(text) }/>
				<ItemStatusFilter filterListByActivity={(activity) => this.filterListByActivity(activity)}/>
			  </div>

			  <TodoList 
				todos={this.state.todos} 
				onDeleted={(id) => this.removeTodo(id)}
                onAddItem={(text) => this.addTodo(text)}
                onToggleImportant={(id) => this.onToggleImportant(id)}
                onToggleDone={(id) => this.onToggleDone(id)}
			  />
			</div>
		  );
	}
  
}

export default App;
