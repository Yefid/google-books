import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function Bar() {
	const navigate = useNavigate(); // inside the function

	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
		switch (newValue) {
			case 0:
				navigate('/books');
				break;
			case 1:
				navigate('/whitelist');
				break;
			default:
				navigate('/books');
				break;
		}
	};
	return (
		<div>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Search" {...a11yProps(0)} />
						<Tab label="Whitelist" {...a11yProps(1)} />
					</Tabs>
				</Box>
			</Box>
			<Outlet />
		</div>
	);
}
