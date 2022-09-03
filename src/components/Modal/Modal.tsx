import React from 'react';
import { Modal as UIModal, Box, Typography } from '@mui/material';
import styles from './Modal.module.scss';

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children?: JSX.Element;
  title?: string;
  text?: string;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children = null,
  title = '',
  text = '',
}) => {
  return (
    <UIModal
      open={visible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={styles.box}
        sx={{ p: 4, boxShadow: 24, bgcolor: 'background.paper' }}
      >
        {children ? (
          children
        ) : (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {text}
            </Typography>
          </>
        )}
      </Box>
    </UIModal>
  );
};

export default Modal;
