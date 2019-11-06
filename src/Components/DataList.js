import React from 'react';

class DataList extends React.Component {
	render() {
		return (
			<div className="midwhitespacearea">
				<div className="whitebox">
					<h1>
						Index: {this.props.hackers.id} of {this.props.hackersLength}
					</h1>
					<ul>
						<li className="list">
							<u>{this.props.hackers.name.first} {this.props.hackers.name.last}</u>
						</li>
						<li className="list"><b>From:</b> {this.props.hackers.country}</li>
						<li className="list"><b>Job title:</b> {this.props.hackers.title}</li>
						<li className="list"><b>Employer:</b> {this.props.hackers.employer}</li>
						<li className="list"><b>Favorite Movies:</b></li>
						<li className="list"><b>1.</b> {this.props.hackers.favoriteMovies[0]}</li>
						<li className="list"><b>2.</b> {this.props.hackers.favoriteMovies[1]}</li>
						<li className="list"><b>3.</b> {this.props.hackers.favoriteMovies[2]}</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default DataList;
