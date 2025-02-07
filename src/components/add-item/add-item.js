import React from 'react';

import './add-item.css';

export default class AddItem extends React.Component {
	
	constructor() {
		super();
		
		this.state = {
			text: '',
			ready: false
		};
		
		this.onAddClick = () => {
			
		};
		
		this.onTextChange = (newText) => {
			this.setState(({text})={
				if (text === newText) {
					return {text};
				}
				return {
					text: newText
				};
			});
		};
		
	}
	
	
	
	render() {
		const { label } = this.props;
		const { done, important } = this.state;
		
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
				onClick={this.onLabelClick} >
					{label}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={this.onMarkImportant}>
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


