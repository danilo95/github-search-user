import axios from 'axios';

const url = axios.create({
	baseURL: 'https://api.github.com/',
});

export const getListOfUsers = (params, page) => {
	let result = url
		.get(`/search/users?q=${params}&page=${page}&per_page=20`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return hadleError(error.response);
		});

	return result;
};
export const getUserInfo = (user) => {
	let result = url
		.get(`/users/${user}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return hadleError(error.response);
		});

	return result;
};

export const getUserRepos = (user, page) => {
	let result = url
		.get(`/users/${user}/repos?per_page=10&page=${page}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return hadleError(error.response);
		});

	return result;
};

const hadleError = (httpRequest) => {
	let { status, data } = httpRequest;
	let { message: serverMessage } = data;
	let error = {};
	let message = '';
	switch (status) {
		case 404:
			message = `Oops, the resource you were looking for was not finding/${serverMessage}`;
			break;
		case 401:
			message = `You do not have the proper permissions to make this request/${serverMessage}`;
			break;
		case 500:
			message = `something happened unexpectedly, this is not your fault.please reload the page/${serverMessage}`;
			break;
		default:
			message = `$something goes wrong, please reload the page and try again/ ${serverMessage}`;
			status = 500;
			break;
	}
	error = {
		error: {
			message,
			code: status,
		},
	};
	return error;
};
