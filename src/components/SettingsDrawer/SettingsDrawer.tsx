import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { changeTheme } from 'src/store/app/appSlice';

interface SettingsDrawerProps {
  open: boolean;
  toggle: () => void;
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ open, toggle }) => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.app);

  const handleModeChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    mode: 'light' | 'dark',
  ) => {
    dispatch(changeTheme(mode));
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
        },
      }}
      variant="temporary"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography variant="h5">Настройки</Typography>
        <IconButton color="inherit" onClick={toggle} edge="end">
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Box sx={{ pl: 2, pr: 2 }}>
        <Typography gutterBottom id="settings-mode" marginTop={3} variant="h6">
          Тема
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={theme}
          exclusive
          fullWidth
          onChange={handleModeChange}
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Drawer>
  );
};

export default SettingsDrawer;
