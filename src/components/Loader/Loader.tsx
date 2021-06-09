import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
    <div className={styles.Loader} data-testid="Loader">
        <div className={styles.mainSocitalLoader}>
            <div className={`${styles.circle}`}>
                <div className={styles.logo}>
                    <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-360.5 661 480 480">
                        <path className={`${styles.st} ${styles.st0}`} d="M-318.7,854.7l271.3-141.3l126,193.3l-26,126l-108,36c0,0-190.7-54.7-194.7-54.7s-92-112-92-112L-318.7,854.7z"/>
                        <g>
                            <path className={`${styles.st} ${styles.st1}`} d="M-120.5,661c-132.5,0-240,107.5-240,240c0,132.5,107.5,240,240,240c132.5,0,240-107.5,240-240
                                C119.5,768.5,12,661-120.5,661z M-0.7,1038.6c-24.5,7.4-50.3-6.5-57.7-30.9c-2.2-7.3-2.5-14.6-1.2-21.6l-90.8-39.5
                                c-9.7,13-23.6,23.2-40.4,28.2c-41.7,12.6-85.6-11-98.2-52.7c-12.6-41.7,11-85.6,52.7-98.2c26.3-7.9,53.4-1.5,73.1,14.8l65.9-46.6
                                l-0.3-0.8c-6.1-20.3,5.4-41.8,25.7-47.9c20.3-6.1,41.8,5.4,47.9,25.7c5.1,16.9-2,34.7-16.3,43.6l29.7,135.5
                                c18.5,1.4,35.1,14,40.8,32.8C37.6,1005.4,23.8,1031.2-0.7,1038.6z"/>
                            <path className={`${styles.st} ${styles.st1}`} d="M-84,810.7l-63.7,45.1c4.1,6.2,7.4,13.1,9.7,20.7c5.1,16.9,4.2,34.2-1.4,49.6l89.4,38.9 c4.4-5.4,10.1-9.9,16.7-12.9l-29.3-133.6C-70.4,818.1-77.8,815.4-84,810.7z"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
);

export default Loader;
