import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

/**
 *
 * @type {Props:{
 *  buttons: <{
 *    href: string,
 *    text: string,
 *    className?: string
 * }>[]
 * }}
 */

export default function DownloadBtnGroup({ buttons }) {
  return (
    <div className={styles["buttonDownload-group"]}>
      {buttons.map((btn, index) => {
        return (
          <a key={index} href={btn.href} className={clsx(styles["buttonDownload"],{[btn.className]:btn.className})}>
            {btn.text}
          </a>
        );
      })}
    </div>
  );
}
