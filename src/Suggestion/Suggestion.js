import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Suggestion.module.css";

export const Suggestion = forwardRef(({ className, ...extraProps }, ref) => (
  <button ref={ref} className={clsx(styles.root, className)} {...extraProps} />
));
