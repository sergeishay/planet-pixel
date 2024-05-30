import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export default function Project({ index, title, manageModal, isMobile, project }) {
  return (
    <div
      onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY); }}
      onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY); }}
      className={styles.project}
    >
      {isMobile && (
        <div className={styles.mobileModal}>
          <Image
            src={`/${project.src}`} // Use project data passed as prop
            width={300}
            height={0}
            alt="image"
          />
          {/* <button className={styles.viewButton}>View</button> */}
        </div>
      )}
      <h2>{title}</h2>
      <p className="text-white font-[18px]" >Design & Development</p>
    </div>
  );
}
