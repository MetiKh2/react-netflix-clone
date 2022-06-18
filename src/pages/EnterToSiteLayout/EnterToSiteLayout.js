import React from "react";
import styles from "./EnterToSiteLayout.module.css";
const EnterToSiteLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {children}
      </div>
    </div>
  );
};

export default EnterToSiteLayout;
