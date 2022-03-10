import clsx from "clsx";
import styles from "./Stack.module.css";

export function Stack({ className, ...props }) {
  return <div className={clsx(styles.root, className)} {...props} />;
}
