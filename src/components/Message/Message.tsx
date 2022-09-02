import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface MessageProps {
  visible: boolean;
  error: string | null;
  onClose: () => void;
  type?: AlertColor;
}

const Message: React.FC<MessageProps> = ({
  visible,
  error,
  onClose,
  type = 'error',
}) => {
  if (!error) {
    return null;
  }

  return (
    <Snackbar
      open={visible}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Message;
