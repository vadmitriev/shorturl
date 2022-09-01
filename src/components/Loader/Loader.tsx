import React from "react";
import { Spin } from "antd";
import styles from "./Loader.module.scss";

interface LoaderProps {
  visible?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible = true }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.loader}>
      <Spin />
    </div>
  );
};

export default Loader;
