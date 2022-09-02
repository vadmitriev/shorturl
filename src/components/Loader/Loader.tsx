import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  visible?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible = true }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.loader}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default Loader;
