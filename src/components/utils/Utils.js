let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

export const saveFavorite = (id, userName, img) => {
	favorites = [...favorites, { id, userName, img }];
	localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const deleteFavorite = (id) => {
	let newFavorites = favorites.filter((value) => value.id !== id);
	localStorage.setItem('favorites', JSON.stringify(newFavorites));
	return newFavorites;
};
