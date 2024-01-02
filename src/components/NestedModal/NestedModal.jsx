import { useState } from "react";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import styles from './NestedModal.module.css';

const NestedModal = ({ item }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        bgcolor: 'background.paper',
        border: '2px solid #c2c2c2',
        boxShadow: 24,
        pt: 2,
        px: 2,
        pb: 2,
    };

    return (
        <>
            <Button onClick={handleOpen}>Ver detalhes</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
                className={styles.nested_modal}
            >
                <Box sx={{ ...style }}>
                    <div>
                        <div>
                            <h4>Última entrada:</h4>
                            <span> 01/01/2024</span>
                            <span>Qtd.: 2kg</span>
                        </div>
                        <div>
                            <h4>Última saída:</h4>
                            <span>01/01/2024</span>
                            <span>Qtd.: 0.5kg</span>
                        </div>
                    </div>
                    <Button onClick={handleClose}>fechar</Button>
                </Box>
            </Modal>
        </>
    )
}

export default NestedModal
