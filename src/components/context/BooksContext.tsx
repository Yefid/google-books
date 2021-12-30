import React, { useState } from 'react';

const BooksContext: any = React.createContext({});

const BooksContextProvider = ({ children }: any) => {
	const [whitelist, setWhitelist] = useState([]);

	const defaultValue = {
		whitelist,
		setWhitelist,
	};

	return (
		<BooksContext.Provider value={defaultValue}>
			{children}
		</BooksContext.Provider>
	);
};

export { BooksContext, BooksContextProvider };
