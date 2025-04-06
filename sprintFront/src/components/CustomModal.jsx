import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export default function CustomModal({
  open,
  onClose,
  title,
  message,
  buttonText = 'OK',
  type = 'info' // 'success' | 'error' | 'info'
}) {
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon sx={{ fontSize: 50, color: '#4caf50', mb: 1 }} />;
      case 'error':
        return <ErrorIcon sx={{ fontSize: 50, color: '#f44336', mb: 1 }} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent
        sx={{
          textAlign: 'center',
          p: 4,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" borderRadius="100px">
          {renderIcon()}
          <DialogTitle>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </DialogTitle>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {message}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: type === "success" ? 'green' : 'rgb(226, 16, 16)',
            '&:hover': {
              backgroundColor: type === "success" ? 'green' : 'rgb(217, 53, 53)'
            }
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
