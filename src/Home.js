import React, { Component } from "react";
import data from "./data.json";

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
		this.renderleaderboard = this.renderleaderboard.bind(this);
	}

	componentWillMount() {
		data['data'].sort((a, b) => b.score - a.score);
		this.setState({ data: data['data'], searchText: "" });
	}

	handleSearch(e) {
		this.setState({ searchText: e.target.value });
	}

	renderleaderboard() {
		const { data, searchText } = this.state;
		const filteredList = data.filter(
			item =>
				item.emp_id.toLowerCase().search(searchText.toLowerCase()) !==
				-1
		);
		var n=1
		return filteredList.map(item => (
			<tr key={item.submision_id}>
				<td>
					<h2>{n++}</h2>
				</td>
				<td>
					<span className="trending-heading-column">
						{item.submision_id}
					</span>
				</td>
				<td>
					<span>{item.score}</span>
				</td>
			</tr>
		));
	}

	render() {
		console.log(this.state.data);
		return (
			<div>
				<h2>Public Leaderboard</h2>
				<p>Leaderboard is based on 60% of test data</p>
				<br/>
				<div className="trending">
					<table className="trending-table">
						<tbody>
							<tr className="trending-table-heading">
								<th>#</th>
								<th className="trending-heading-column">
									Submission Id
								</th>
								<th>Accuray %</th>
							</tr>
							{this.renderleaderboard()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Home;