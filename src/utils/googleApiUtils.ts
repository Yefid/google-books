import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';

const getBooks = (query: string, maxResults: number, startIndex: number) => {
	return axios.get(url, {
		params: {
			q: 'intitle:' + query,
			maxResults: maxResults,
			startIndex: startIndex,
		},
	});
};

export default getBooks;
