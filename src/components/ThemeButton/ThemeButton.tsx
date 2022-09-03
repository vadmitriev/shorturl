import { Tooltip } from '@mui/material';
import React from 'react';
import styles from './ThemeButton.module.scss';

interface ThemeButtonProps {
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title="Сменить тему">
      <button className={styles.switch}>
        <svg
          className={styles.moon}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={onClick}
        >
          <defs />
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </button>
    </Tooltip>
  );
};

export default ThemeButton;
