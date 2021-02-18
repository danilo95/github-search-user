import React, { useState } from 'react';
import SearchUserForm from '../searchUserForm/SearchUserForm';

const UserSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleOnChange = (e) => {
		const { value } = e.target;
		setSearchTerm(value);
	};
	return (
		<div>
			<SearchUserForm
				searchTerm={searchTerm}
				handleOnChange={handleOnChange}
			/>
		</div>
	);
};

export default UserSearch;
