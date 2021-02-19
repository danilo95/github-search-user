import React from 'react';
import { Input } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { FormContainer } from './Style';

const { Search } = Input;

const suffix = (
	<GithubOutlined
		style={{
			fontSize: 16,
			color: '#1890ff',
		}}
	/>
);

const SearchUserForm = ({ searchTerm, handleOnChange, onSubmit }) => {
	const onSearch = () => {
		if (searchTerm) {
			onSubmit();
		}
	};
	return (
		<FormContainer>
			<Search
				placeholder="Try typing danilo95"
				enterButton="Search"
				size="large"
				suffix={suffix}
				onSearch={onSearch}
				value={searchTerm}
				onChange={(e) => handleOnChange(e)}
			/>
		</FormContainer>
	);
};

export default SearchUserForm;
