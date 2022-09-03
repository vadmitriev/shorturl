import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Header.module.scss';
import { IconButton, Tooltip, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from 'src/routes/constants';
import { useAppDispatch } from 'src/hooks/redux';
import { logout } from 'src/store/auth/actions';
import { LogoutOutlined } from '@mui/icons-material';
import { ThemeButton } from 'src/components';
import { toggleTheme } from 'src/store/app/appSlice';

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch();

  const navigator = useNavigate();

  const handleClick = () => {
    navigator(PRIVATE_ROUTES.MAIN);
  };

  const handleExit = () => {
    dispatch(logout());
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`${className} ${styles.header}`} {...props}>
      <div className={styles.left} onClick={handleClick}>
        <Typography variant="h5" className={styles.title}>
          Short URL
        </Typography>
      </div>
      <div className={styles.right}>
        <ThemeButton onClick={handleToggleTheme} />
        <div className={styles.exit} onClick={handleExit}>
          <Tooltip title="Выйти">
            <IconButton onClick={handleExit}>
              <LogoutOutlined />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Header;
