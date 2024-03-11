import React from 'react';
import styles from '../styles/HorizontalScrollList.module.css'; 

const HorizontalScrollList = ({ items }) => {
  return (
        <div className={styles.horizontalScrollListContainer}>
        <div className={styles.horizontalScrollList}>
            {items.map((item, index) => (
            <div className={styles.item} key={index}>
                {item}
            </div>
            ))}
        </div>
        </div>

  );
};

export default HorizontalScrollList;