import './App.css';
import Welcome from './Welcome';
import Bar from '../components/Bar';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import WhiteList from './WhiteList';
import { BooksContextProvider } from '../components/context/BooksContext';

function App() {
	return (
		<div className="App">
			<BooksContextProvider>
				<Routes>
					<Route path="welcome" element={<Welcome />} />
					<Route path="/" element={<Bar />}>
						<Route index element={<Books />} />
						<Route path="books" element={<Books />} />
						<Route path="whitelist" element={<WhiteList />} />
					</Route>
				</Routes>
			</BooksContextProvider>
		</div>
	);
}

export default App;
