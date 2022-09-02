import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Header.module.scss";
import { IconButton, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES } from "src/routes/constants";
import { useAppDispatch } from "src/hooks/redux";
import { logout } from "src/store/auth/actions";
import { LogoutOutlined } from "@mui/icons-material";
import { useTheme } from "src/hooks/useTheme";
import { ThemeButton } from "src/components";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  const { toggleTheme } = useTheme();

  const navigator = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigator(PRIVATE_ROUTES.MAIN);
  };

  const handleExit = () => {
    dispatch(logout());
  };

  return (
    <div className={`${className} ${styles.header}`} {...props}>
      <div className={styles.left} onClick={handleClick}>
        <Typography variant="h5" className={styles.title}>
          Short URL
        </Typography>
      </div>
      <div className={styles.right}>
        <ThemeButton onClick={toggleTheme} />
        <div className={styles.exit} onClick={handleExit}>
          <IconButton title="Выйти" onClick={handleExit}>
            <LogoutOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
