import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';

import { Footer, Header } from 'src/components';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default MainLayout;
