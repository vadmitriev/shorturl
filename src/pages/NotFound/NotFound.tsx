import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "antd";

import { PUBLIC_ROUTES } from "src/routes/constants";
import styles from "./NotFound.module.scss";

interface NotFoundsPageProps {
  text?: string;
}

const NotFoundPage: React.FC<NotFoundsPageProps> = ({
  text = "Страница не найдена",
}) => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator(PUBLIC_ROUTES.LOGIN);
  };

  return (
    <div className={styles.wrapper}>
      <Card className={styles.content}>
        <Typography.Title>{text}</Typography.Title>
        <Button type="primary" onClick={handleClick} size="large">
          На главную
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;
