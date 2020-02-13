import React from 'react';

import TodoListItem from '../todo-list-item';
import AddItemForm from '../add-item-form';
import './todo-list.css';

const TodoList = ({todos, onDeleted, onAddItem, onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {
        if (!item.show) return false;
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );

    });

    return (
        <div>
            <ul className="list-group todo-list">
                {elements}
            </ul>
            <AddItemForm onAddItem = { (text) => onAddItem(text) } />
        </div>
    );
};

export default TodoList;
