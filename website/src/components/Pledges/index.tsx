import React, { FC } from "react";
import Marquee from "react-fast-marquee";

import { Implementation } from "../../types";
import styles from "./styles.module.css";

interface PledgesProps {
  implementations: Implementation[];
  title?: string;
}

const Pledges: FC<PledgesProps> = ({
  implementations = [],
  title = "Pledges to Implement UNTP",
}) => {

  return (
    <div className={styles.pledgesContainer}>
      <h2 className={styles.pledgesTitle}>{title}</h2>
      <Marquee gradient={false} speed={40} pauseOnHover>
        <div className={styles.logoContainer}>
          {implementations.map((impl, index) => (
            <div key={index} className={styles.logoWrapper}>
              <a href={impl.link} target="_blank">
                <img
                  src={impl.logo}
                  alt={`${impl.name} logo`}
                  className={styles.implementationLogo}
                  style={impl.imageStyle}
                />
              </a>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Pledges;
