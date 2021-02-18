import axios from 'axios';

const url = axios.create({
	baseURL: 'https://api.github.com/',
});

export const getListOfUsers = (params) => {
	let result = url
		.get(`/search/users?q=${params}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return hadleError(error.response);
		});

	return result;
};

const hadleError = (httpRequest) => {
	let { status } = httpRequest;
	let error = {};
	let message = '';
	switch (status) {
		case 404:
			message =
				'Oops, the resource you were looking for was not finding.';
			break;
		case 401:
			message =
				'You do not have the proper permissions to make this request';
			break;
		case 500:
			message =
				'something happened unexpectedly, this is not your fault.please reload the page';
			break;
		default:
			message =
				'something goes wrong, please reload the page and try again';
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