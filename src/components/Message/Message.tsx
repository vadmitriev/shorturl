import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface MessageProps {
  visible: boolean;
  text: string | null;
  onClose: () => void;
  type?: AlertColor;
  duration?: number;
}

const Message: React.FC<MessageProps> = ({
  visible,
  text,
  onClose,
  type = 'error',
  duration = 5,
}) => {
  if (!text) {
    return null;
  }

  return (
    <Snackbar
      open={visible}
      autoHideDuration={duration * 1000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Message;
