import React from 'react';

class ButNav extends React.Component {
	
	render() {
		return (
			<div>
				<ul>
					<li>
						<button className="buttons" onClick={this.props.previous}>
							{'<'} Prev{' '}
						</button>
						{/* <button className="buttons">Edit</button>
								<button className="buttons">Delete</button>
								<button className="buttons">New</button> */}
						<button className="buttons" onClick={this.props.next}>
							next {'>'}{' '}
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default ButNav;
