import React from "react";
import styles from "./styles.module.css";

const WebsiteNotice: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={styles.logoContainer}>
          <img src="/spec-untp/img/logo.svg" alt="UNECE Logo" className={styles.logo} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Website Has Moved</h2>
          <p className={styles.message}>
            This website has moved to a new location. Please update your
            bookmarks.
          </p>
          <div className={styles.newUrl}>
            <span className={styles.link}>
              https://spec-untp-fbb45f.opensource.unicc.org
            </span>
          </div>
          <div className={styles.actions}>
            <a
              href="https://spec-untp-fbb45f.opensource.unicc.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Visit New Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteNotice;
