import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Welcome() {
	const navigate = useNavigate(); 

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const username = data.get('username');
		if (username) {
			sessionStorage['username'] = username;
	
			navigate('/');
		} else {
			alert('Please Enter Username');
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<MenuBookIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Welcome to Google Books Api
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="username"
							name="username"
							autoComplete="username"
							autoFocus
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Enter
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
