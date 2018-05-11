import React, { Component } from "react";

import { graphql, compose } from 'react-apollo';
import QueryAllCommunities from '../graphQL/QueryAllCommunities';


class HomePage extends Component {
	static defaultProps = {
		communities: []
	};

	render() {
		const { communities } = this.props;

		return (
			<div>
				<h2><strong>Need Prayer?</strong> You're in the right place</h2>
				<p><em>Find a community of believers that will pray for you!</em></p>
				<br/>
				<div>
					<select className="uk-select">
						<option disabled selected value> -- select your community -- </option>
						{communities.map(community =>
							<option value={community.id}>
								{community.name} - {community.location}
							</option>
						)}
					</select>
				</div>
			</div>
		)
	}
}

export default compose(
	graphql(
		QueryAllCommunities,
		{
			options: {
				fetchPolicy: 'cache-and-network'
			},
			props: ({ data: { listCommunities = { items: [] } } }) => ({
				communities: listCommunities.items
			})
		}
	)
)(HomePage);