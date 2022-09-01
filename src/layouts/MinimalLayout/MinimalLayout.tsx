import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "src/components";
import styles from "./MinimalLayout.module.scss";

interface MinimalLayoutProps {}

const MinimalLayout: React.FC<MinimalLayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default MinimalLayout;
