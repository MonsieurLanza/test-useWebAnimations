import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Product.module.css";

export const Product = forwardRef(({ className, ...extraProps }, ref) => (
  <button ref={ref} className={clsx(styles.root, className)} {...extraProps} />
));
