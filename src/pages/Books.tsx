import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton, Pagination, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import getBooks from '../utils/googleApiUtils';
import { useContext, useState } from 'react';
import BookDialog from '../components/BookDialog';
import { BooksContext } from '../components/context/BooksContext';

export default function Books() {
	const [searchInput, setSearchInput] = useState('');
	const [books, setBooks] = useState([]);
	const [open, setOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState({});
	const { whitelist, setWhitelist } = useContext(BooksContext);
	const [page, setPage] = useState(1);
	const [numberOfPages, setNumberOfPages] = useState(1);
	const [startNumber, setStartNumber] = useState(1);

	const handleChange = async (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		const startValue = 1 + (value - 1) * 20;
		try {
			const results = await getBooks(searchInput, 20, startValue);
			setNumberOfPages(Math.floor(results.data.totalItems / 20));
			setPage(value);
			setStartNumber(startValue);
			setBooks(results.data.items);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSearch = async () => {
		const results = await getBooks(searchInput, 20, 1);
		setNumberOfPages(Math.floor(results.data.totalItems / 20));
		setBooks(results.data.items);
	};
	const showMoreInfo = async (item: any) => {
		setSelectedItem(item);
		handleClickOpen();
	};
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const addToWhitelist = (item: any) => {
		let whitelistTemp = [...whitelist];
		whitelistTemp.push(item);
		setWhitelist(whitelistTemp);
		handleClose();
	};

	return (
		<div>
			<Box m={2}>
				<Typography variant="body1" gutterBottom>
					Hello {sessionStorage['username']}! Please look for a book...
				</Typography>{' '}
				<Stack spacing={2} direction="row">
					<TextField
						value={searchInput}
						placeholder="Enter a book name"
						hiddenLabel
						InputProps={{
							endAdornment: (
								<IconButton>
									<SearchIcon />
								</IconButton>
							),
						}}
						onChange={(e) => {
							setSearchInput(e.target.value);
						}}
					/>

					<Box
						sx={{
							'& > :not(style)': { m: 0, width: '80px', height: '56px' },
						}}
						m={2}
					>
						<Button onClick={handleSearch} variant="contained">
							Find
						</Button>
					</Box>
				</Stack>
				<Box mt={2}>
					{books?.length > 0 && (
						<Typography variant="h4" gutterBottom>
							Results:
						</Typography>
					)}
					<ol start={startNumber}>
						{books?.map((item: any, index: number) => {
							return (
								<li key={index} onClick={() => showMoreInfo(item)}>
									{item.volumeInfo.title}
								</li>
							);
						})}
					</ol>
				</Box>
			</Box>
			<BookDialog
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				item={selectedItem}
				addToWhitelist={addToWhitelist}
			/>
			{books?.length > 0 && (
				<Pagination count={numberOfPages} page={page} onChange={handleChange} />
			)}
		</div>
	);
}
