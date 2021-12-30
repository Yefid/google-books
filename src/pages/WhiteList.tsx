import { useContext } from 'react';
import { BooksContext } from '../components/context/BooksContext';
import BookCard from '../components/BookCard';
import { Box, Typography } from '@mui/material';
export default function WhiteList() {
	const { whitelist } = useContext(BooksContext);

	return (
		<div>
			<Box m={5}>
				{whitelist.length < 1 && (
					<Typography variant="body1" gutterBottom>
						Your White List is empty
					</Typography>
				)}
				{whitelist.map((item: any, index: number) => {
					return (
						<BookCard
							key={index}
							title={item.volumeInfo.title}
							imgSrc={item.volumeInfo?.imageLinks?.smallThumbnail}
							Publisher={item.volumeInfo?.publisher}
							authors={item.volumeInfo?.authors?.toString()}
						/>
					);
				})}
			</Box>
		</div>
	);
}
