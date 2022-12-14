import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, Typography, Button } from '@mui/material';

import { PUBLIC_ROUTES } from 'src/routes/constants';
import styles from './NotFound.module.scss';

interface NotFoundsPageProps {
  text?: string;
}

const NotFoundPage: React.FC<NotFoundsPageProps> = ({
  text = 'Страница не найдена',
}) => {
  const navigator = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === PUBLIC_ROUTES.LOGIN) {
      navigator(0);
    } else {
      navigator(PUBLIC_ROUTES.LOGIN);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.content}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          {text}
        </Typography>
        <Button variant="contained" onClick={handleClick} size="large">
          На главную
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;
