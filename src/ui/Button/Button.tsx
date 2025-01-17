import React from "react";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({ className, isLoading, ...buttonProps }) => {
  return (
    <button
      className={cn(styles.button, className)}
      disabled={isLoading}
      {...buttonProps}
    >
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
};
