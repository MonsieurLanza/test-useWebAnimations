import clsx from "clsx";
import { useRef, useEffect, useState, cloneElement } from "react";

import styles from "./Fade.module.css";

export function Fade({ className, children, onAnimationEnd }) {
  const [remove, setRemove] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    if (remove) {
    }
  }, [remove, onAnimationEnd]);

  const handleClick = () => setRemove(true);

  return (
    <div style={props} className={clsx(styles.root, className)}>
      {cloneElement(children, {
        onClick: handleClick
      })}
    </div>
  );
}
