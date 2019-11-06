import React from 'react'
import './App.css'
import Data from './Components/Data'
import DataList from './Components/DataList'
import ButNav from './Components/ButNav'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			hackers: Data,
			hackersIndex: 0
		}
		this.previous = this.previous.bind(this)
		this.next = this.next.bind(this)
	}

	previous() {
		if (this.state.hackersIndex > 0) {
			this.setState({
				hackersIndex: this.state.hackersIndex - 1
			})
		}
	}

	next() {
		if (this.state.hackersIndex < this.state.hackers.length - 1) {
			this.setState({
				hackersIndex: this.state.hackersIndex + 1
			})
		}
	}

	render() {
		return (
			<div className="parent">
				<header>
					<nav className="topnav">
						<ul>
							<li>Home</li>
						</ul>
					</nav>
				</header>

<div>
				<DataList
					hackers={this.state.hackers[this.state.hackersIndex]}
					hackersLength={this.state.hackers.length}
          />
          </div>

      <footer className="botnav">

      <div className="buttonnavbg">
        <ButNav previous={this.previous} next={this.next} />
      </div>
      </footer>
          </div>
		)
	}
}

export default App
