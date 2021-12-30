import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface BookCardProps {
	title: string;
	imgSrc: string;
	Publisher: string;
	authors: string;
}

export default function BookCard(props: BookCardProps) {
	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia
				component="img"
				sx={{ width: 100, height: 100 }}
				image={props.imgSrc}
				alt="Live from space album cover"
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						{props.title}
					</Typography>
					<Typography
						variant="subtitle1"
						color="text.secondary"
						component="div"
					>
						Publisher: {props.Publisher} <br />
						Authors: {props.authors}
					</Typography>
				</CardContent>
			</Box>
		</Card>
	);
}
