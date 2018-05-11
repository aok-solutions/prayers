import gql from 'graphql-tag'

export default gql(`
	query {
		listCommunities(limit: 1000, nextToken: null) {
			items {
				id
				name
				location
			}
		}
	}
`);