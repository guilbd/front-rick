export const Api = {
	baseUrl: "https://backend-rickmorty.herokuapp.com/personagens/read-all",

	createUrl: () => Api.baseUrl + "/",

	readAllUrl: () => Api.baseUrl + "/",
	readSingleUrl: (id) => Api.baseUrl + "/create/" + id,

	updateUrl: (id) => Api.baseUrl + "/update/" + id,

	deleteUrl: (id) => Api.baseUrl + "/delete/" + id,
	deleteAllUrl: () => Api.baseUrl + "/",

	// Create
	buildApiPostRequest: (url, body) => {
		return fetch(url, {
			method: "POST",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// ReadAll
	buildApiGetRequest: (url) => {
		return fetch(url, {
			method: "GET",
		});
	},

	// UpdateById
	buildApiPutRequest: (url, body) => {
		return fetch(url, {
			method: "PUT",
			headers: new Headers({
				"Content-type": "application/json",
			}),
			body: JSON.stringify(body),
		});
	},

	// DeleteAll
	buildApiDeleteRequest: (url) => {
		return fetch(url, {
			method: "DELETE",
		});
	},
};
