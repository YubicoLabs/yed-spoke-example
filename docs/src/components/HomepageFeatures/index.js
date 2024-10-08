import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import ReactPlayer from "react-player";

function Feature() {
  return (
    <div className={clsx('col col--12')}>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <Feature />
        </div>
      </div>
    </section>
  );
}
