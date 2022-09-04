import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Header.module.scss';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from 'src/routes/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { logout } from 'src/store/auth/actions';
import { LogoutOutlined } from '@mui/icons-material';

import { SearchFilter, ThemeButton } from 'src/components';
import { toggleTheme } from 'src/store/app/appSlice';
import { resetSearch, setSearch } from 'src/store/shortLinks/shortLinksSlice';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.shortLinks);

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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const handleClearSearch = () => {
    dispatch(resetSearch());
  };

  return (
    <div className={`${className} ${styles.header}`} {...props}>
      <div className={styles.left} onClick={handleClick}>
        <Typography variant="h5" className={styles.title}>
          Short URL
        </Typography>
      </div>
      <div className={styles.right}>
        <Box sx={{ mx: 2 }}>
          <SearchFilter
            search={search}
            onChange={handleSearch}
            onClear={handleClearSearch}
            placeholder="Поиск"
          />
        </Box>
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
