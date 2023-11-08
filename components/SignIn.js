const API_URL = "http://graphql.unicaen.fr:4000";

const SIGN_IN = `
    mutation SignIn($username: String!, $password: String!) {
        signIn(username: $username, password: $password)
    }
`;

const USERNAME = null;

export function signIn(username, password) {
	return fetch(API_URL, { 
		method: "POST", 
		headers: {"Content-Type": "application/json",},
		body: JSON.stringify({
			query: SIGN_IN,
			variables: {
				username: username,
				password: password,
			},
    	}),
	})
    .then((response) => {
		return response.json();
    })
    .then((jsonResponse) => {
    	if (jsonResponse.errors != null) {
    		throw jsonResponse.errors[0];
    	}
		console.log(jsonResponse.data);
      	return jsonResponse.data.signIn;
    })
    .catch((error) => {
      	throw error;
    });
}

export function getUsername(token) {
	return fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"authorization": token,
		},
		body: JSON.stringify({
			query: USERNAME,
			variables: {
				authorization: token,
			}
		})
	})
}