import { lazy } from 'react';
const UserSearch = lazy(() => import('./components/userSearch/UserSearch'));
const SelectedUser = lazy(() =>
	import('./components/selectedUser/SelectedUser')
);
const NotFoundPage = lazy(() => import('./components/notFound/NotFound'));
const PublicRoute = lazy(() => import('./components/publicRoute/PublicRoute'));
const FavoriteUsersList = lazy(() =>
	import('./components/favoriteUsersList/FavoriteUsersList')
);

export default [
	{
		key: 1,
		path: '/',
		exact: true,
		type: PublicRoute,
		component: UserSearch,
	},
	{
		key: 2,
		path: '/searchusers',
		exact: true,
		type: PublicRoute,
		component: UserSearch,
	},
	{
		key: 3,
		path: '/user/:id',
		exact: true,
		type: PublicRoute,
		component: SelectedUser,
	},
	{
		key: 4,
		path: '/favorites',
		exact: true,
		type: PublicRoute,
		component: FavoriteUsersList,
	},
	{
		key: 5,
		type: PublicRoute,
		component: NotFoundPage,
	},
];
