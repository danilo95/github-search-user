export const saveFavorite = (id, userName, img) => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	favorites = [...favorites, { id, userName, img }];
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const deleteFavorite = (id) => {
	let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	let newFavorites = favorites.filter((value) => value.id !== id);
	localStorage.setItem('favorites', JSON.stringify(newFavorites));
	return newFavorites;
};
