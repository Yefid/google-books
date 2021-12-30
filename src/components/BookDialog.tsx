import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';

export default function AlertDialogSlide(props: any) {
	return (
		<div>
			<Dialog
				open={props.open}
				keepMounted
				onClose={props.handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{props?.item?.volumeInfo?.title}</DialogTitle>
				<DialogContent>
					<Box>
						{props?.item?.volumeInfo?.imageLinks?.smallThumbnail && (
							<img
								src={props?.item?.volumeInfo?.imageLinks?.smallThumbnail}
								alt="new"
							/>
						)}
					</Box>

					<DialogContentText id="alert-dialog-slide-description">
						Publisher: {props?.item?.volumeInfo?.publisher} <br />
						authors: {props?.item?.volumeInfo?.authors?.toString()}
						<br />
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleClose}>Close</Button>
					<Button onClick={()=>props.addToWhitelist(props.item)}>Add to whitelist</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
