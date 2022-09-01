import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

import { Footer, Header } from "src/components";
import { Layout } from "antd";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Layout.Content className={styles.body}>
        <Outlet />
      </Layout.Content>
      <Footer className={styles.footer} />
    </div>
  );
};

export default MainLayout;
