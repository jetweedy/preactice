import React, { Component } from "react";
import "./style.css";

//function GameCard(props) {
class GameCard extends Component {

	render() {
		return (
		<div className="card" onClick={() => { this.props.clickCard(this.props.id); }}>
		  <div className="img-container">
			<img alt={this.props.name} src={this.props.image} />
		  </div>
		  <div className="content">
			<ul>
			  <li>
				<h3>{this.props.name}</h3>
			  </li>
			  <li>
				<strong>Powers:</strong> {this.props.powers}
			  </li>
			</ul>
		  </div>
		</div>
		);
	}
	
}

export default GameCard;
