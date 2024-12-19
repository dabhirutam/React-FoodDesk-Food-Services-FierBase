import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

export default function KeepMountedModal() {
    const { isDelete } = useSelector((state) => state.SubmitReducer);

    return (
        <div>
            <Modal keepMounted open={isDelete} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description" >
                <Box className="position-absolute top-50 start-50 translate-middle bg-light p-4 text-center">
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
