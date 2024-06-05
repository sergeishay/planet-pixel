import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Rounded from "../common/RoundedButton";
import { motion } from "framer-motion";
import gsap from "gsap";
import { fadeIn } from "../../variants";
import Link from "next/link";
import styles from "./style.module.scss";
import Project from "./components/project/Project";
import ProjectsBtn from "../ProjectsBtn";
const projects = [
  {
    title: "Mega Energya",
    src: "aleftaf.webp",
    color: "rgba(255, 255, 255, 0.5)",
  },
  {
    title: "Cotton-Club",
    src: "cotton-club.webp",
    color: "rgba(255, 255, 255, 0.5)",
  },
  {
    title: "Haison",
    src: "haison.webp",
    color: "rgba(255, 255, 255, 0.5)",
  },
  {
    title: "Unicorn",
    src: "Unicorn.webp",
    color: "rgba(255, 255, 255, 0.5)",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const { index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      // GSAP animation setup for desktop only
      const cursor = document.querySelector(".cursor");
      const cursorLabel = document.querySelector(".cursorLabel");

      const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });
      const xMoveCursor = gsap.quickTo(cursor, "left", {
        duration: 0.5,
        ease: "power3",
      });
      const yMoveCursor = gsap.quickTo(cursor, "top", {
        duration: 0.5,
        ease: "power3",
      });
      const xMoveCursorLabel = gsap.quickTo(cursorLabel, "left", {
        duration: 0.45,
        ease: "power3",
      });
      const yMoveCursorLabel = gsap.quickTo(cursorLabel, "top", {
        duration: 0.45,
        ease: "power3",
      });

      const moveItems = (x, y) => {
        xMoveContainer(x);
        yMoveContainer(y);
        xMoveCursor(x);
        yMoveCursor(y);
        xMoveCursorLabel(x);
        yMoveCursorLabel(y);
      };

      const handleMouseMove = (e) => {
        moveItems(e.clientX, e.clientY);
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMobile]);

  const manageModal = (active, index, x, y) => {
    if (!isMobile) {
      const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

      xMoveContainer(x);
      yMoveContainer(y);
    }
    setModal({ active, index });
  };

  return (
    <div className={styles.projects}>
      <motion.h1
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-[30px] xl:text-[3.8vw] leading-tight
         z-5 font-medium mt-[120px] mb-[50px]"
      >
        Recent <span className="text-lightBlue">Works</span>
      </motion.h1>
      <div className={styles.body}>
        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            manageModal={manageModal}
            key={index}
            isMobile={isMobile}
            project={project} // Pass the project data
          />
        ))}
      </div>
      <Rounded backgroundButtonColor="lightBlue">
        <Link href="/work" className="text-white hover:text-white">
          <p>More Work</p>
        </Link>
      </Rounded>
      {!isMobile && (
        <>
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={modal.active ? "enter" : "closed"}
            className={styles.modalContainer}
          >
            <div
              style={{ top: modal.index * -100 + "%" }}
              className={styles.modalSlider}
            >
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <Image src={`/${src}`} width={300} height={0} alt="image" />
                  </div>
                );
              })}
            </div>
            <motion.div
              ref={cursor}
              className={styles.cursor}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
            ></motion.div>
            <motion.div
              ref={cursorLabel}
              className={styles.cursorLabel}
              variants={scaleAnimation}
              initial="initial"
              animate={modal.active ? "enter" : "closed"}
            >
              View
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}
