import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './button.module.scss';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

export default function RoundedButton({children,backgroundButtonColor, backgroundColor="#7011E4", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div
      //  className={styles.roundedButton}
      className={`${styles.roundedButton} relative flex justify-center items-center py-[10px] px-[40px]
      xl:py-[15px] xl:px-[60px]  rounded-[3rem] text-white `}
       style={{overflow: "hidden", backgroundColor: "#00C2FF"}}
        onMouseEnter={() => {manageMouseEnter()}}
         onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {
            children
          }
        <div ref={circle} style={{backgroundColor}} className={styles.circle}></div>
      </div>
    </Magnetic>
  )
}
