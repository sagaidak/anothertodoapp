import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
	
	render() {
		const { label, done, important } = this.props;
		
		let classNames = 'todo-list-item';
		
		if (done) {
			classNames += ' done';
		}
		
		if (important) {
			classNames += ' important';
		}

		return (
			<span className={classNames}>
				<span
				className="todo-list-item-label"
				onClick={this.props.onToggleDone} >
					{label}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={this.props.onToggleImportant}>
					<i className="fa fa-exclamation" />
				</button>

				<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={this.props.onDeleted}>
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}


