import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
	constructor(props){
		super(props);

        this.state = {
            clickedButton: null
        }

		this.handleClick = (activity) => {
            this.props.filterListByActivity(activity);

            this.setState({clickedButton: activity});
		}
	}

	render() {
		let scn = this.state.clickedButton;
	  return (
		<div className="btn-group">
		  <button type="button"
				  className={"btn " + (scn===null?'btn-info':'')}
				  onClick={() => this.handleClick(null)}
		  >All</button>
		  <button type="button"
				  className={"btn " + (scn===true?'btn-info':'')}
                  onClick={() => this.handleClick(true)}
		  >Active</button>
		  <button type="button"
				  className={"btn " + (scn===false?'btn-info':'')}
                  onClick={() => this.handleClick(false)}
		  >Done</button>
		</div>
	  );
	}
}


