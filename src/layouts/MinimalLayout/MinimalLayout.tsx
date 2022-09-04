import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, SettingsDrawer } from 'src/components';
import styles from './MinimalLayout.module.scss';

import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface MinimalLayoutProps {}

const MinimalLayout: React.FC<MinimalLayoutProps> = () => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <div className={styles.wrapper}>
      <AppBar
        color="transparent"
        position="relative"
        className={styles.header}
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            aria-label="settings"
            component="span"
            onClick={handleSettingsToggle}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={styles.body}>
        <Outlet />
      </div>
      <Box>
        <SettingsDrawer toggle={handleSettingsToggle} open={settingsOpen} />
      </Box>
      <Footer className={styles.footer} />
    </div>
  );
};

export default MinimalLayout;
