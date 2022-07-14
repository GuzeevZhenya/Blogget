import React from "react";
import style from "./Heading.module.css";

export const Heading = ({ title }) => {
  return <h1 className={style.heading}>{title}</h1>;
};
