import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import ReactPlayer from "react-player";

function Feature() {
  return (
    <div className={clsx('col col--12')}>
      <div>
      <div className='player-wrapper'>
        <ReactPlayer
          controls
          className='react-player'
          url="https://www.youtube-nocookie.com/embed/4j82irl1s9s?si=oqDlCeiECSWV5X8S"
          width='100%'
          height='100%'
        />
      </div>
      </div>
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
