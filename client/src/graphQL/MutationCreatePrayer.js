import gql from 'graphql-tag';

export default gql(`
	mutation($request: String!, $firstName: String!, $email: String!, $private: Boolean, $createdAt: String!) {
		createPrayer(
			request: $request
			firstName: $firstName
			email: $email
			private: $private
			createdAt: $createdAt
		) {
			id
			request
			firstName
			email
			private
			createdAt
			comments {
				items {
					id
				}
			}
		}
	}
`)